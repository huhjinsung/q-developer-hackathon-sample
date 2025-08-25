variable "bucket_name" {
  description = "S3 버킷 이름 (전역적으로 고유해야 함)"
  type        = string
  
  validation {
    condition     = can(regex("^[a-z0-9][a-z0-9-]*[a-z0-9]$", var.bucket_name))
    error_message = "버킷 이름은 소문자, 숫자, 하이픈만 사용할 수 있으며, 하이픈으로 시작하거나 끝날 수 없습니다."
  }
  
  validation {
    condition     = length(var.bucket_name) >= 3 && length(var.bucket_name) <= 63
    error_message = "버킷 이름은 3자 이상 63자 이하여야 합니다."
  }
}
