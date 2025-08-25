terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-northeast-2" # 서울 리전
}

# S3 버킷 생성
resource "aws_s3_bucket" "static_website" {
  bucket = var.bucket_name
}

# S3 버킷 Public Access 차단
resource "aws_s3_bucket_public_access_block" "static_website" {
  bucket = aws_s3_bucket.static_website.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

# S3 버킷 버전 관리 설정
resource "aws_s3_bucket_versioning" "static_website" {
  bucket = aws_s3_bucket.static_website.id
  versioning_configuration {
    status = "Enabled"
  }
}

# S3 버킷 서버 사이드 암호화 설정
resource "aws_s3_bucket_server_side_encryption_configuration" "static_website" {
  bucket = aws_s3_bucket.static_website.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

# CloudFront Origin Access Control 생성
resource "aws_cloudfront_origin_access_control" "static_website" {
  name                              = "${var.bucket_name}-oac"
  description                       = "OAC for ${var.bucket_name}"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}

# CloudFront 배포 생성
resource "aws_cloudfront_distribution" "static_website" {
  origin {
    domain_name              = aws_s3_bucket.static_website.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.static_website.id
    origin_id                = "S3-${var.bucket_name}"
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CloudFront distribution for ${var.bucket_name}"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${var.bucket_name}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  # 에러 페이지 설정 (SPA 지원)
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  price_class = "PriceClass_100" # 아시아 태평양 지역만 사용

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  tags = {
    Name = "${var.bucket_name}-cloudfront"
  }
}

# S3 버킷 정책 - CloudFront에서만 접근 허용
resource "aws_s3_bucket_policy" "static_website" {
  bucket = aws_s3_bucket.static_website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "AllowCloudFrontServicePrincipal"
        Effect    = "Allow"
        Principal = {
          Service = "cloudfront.amazonaws.com"
        }
        Action   = "s3:GetObject"
        Resource = "${aws_s3_bucket.static_website.arn}/*"
        Condition = {
          StringEquals = {
            "AWS:SourceArn" = aws_cloudfront_distribution.static_website.arn
          }
        }
      }
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.static_website]
}

# 파일 업로드를 위한 null_resource
resource "null_resource" "upload_files" {
  depends_on = [
    aws_s3_bucket.static_website,
    aws_s3_bucket_policy.static_website
  ]

  provisioner "local-exec" {
    command = <<-EOT
      # 소스 디렉토리 확인
      if [ ! -d "../1. code" ]; then
        echo "오류: 소스 디렉토리 '../1. code'이 존재하지 않습니다."
        exit 1
      fi

      echo "파일을 S3 버킷 '${var.bucket_name}'에 업로드 중..."

      # 파일 업로드
      aws s3 sync "../1. code" "s3://${var.bucket_name}" \
        --delete \
        --exclude "*.DS_Store" \
        --exclude "*.git*" \
        --exclude "*.md"

      # Content-Type 설정
      aws s3 cp "s3://${var.bucket_name}" "s3://${var.bucket_name}" \
        --recursive --exclude "*" --include "*.html" \
        --metadata-directive REPLACE --content-type "text/html; charset=utf-8"

      aws s3 cp "s3://${var.bucket_name}" "s3://${var.bucket_name}" \
        --recursive --exclude "*" --include "*.css" \
        --metadata-directive REPLACE --content-type "text/css"

      aws s3 cp "s3://${var.bucket_name}" "s3://${var.bucket_name}" \
        --recursive --exclude "*" --include "*.js" \
        --metadata-directive REPLACE --content-type "application/javascript"

      echo "파일 업로드가 완료되었습니다!"
    EOT
  }

  triggers = {
    bucket_name = var.bucket_name
  }
}
