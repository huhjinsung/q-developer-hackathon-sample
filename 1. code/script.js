/**
 * VPC를 삭제하는 함수
 */
function deleteVpc() {
    // Hide only the VPC background image
    const vpcImg = document.querySelector('.vpc-image');
    if (vpcImg) {
        vpcImg.style.visibility = 'hidden';
    }
    
    // Enable Create VPC button
    document.querySelector('.create-vpc-btn').disabled = false;
    
    // Disable Delete VPC button
    document.querySelector('.delete-vpc-btn').disabled = true;
}

/**
 * VPC를 생성하는 함수
 */
function createVpc() {
    // Show only the VPC background image
    const vpcImg = document.querySelector('.vpc-image');
    if (vpcImg) {
        vpcImg.style.visibility = 'visible';
        applyFadeInAnimation(vpcImg);
        
        // 별표 효과 추가
        createSparkleEffect(vpcImg);
    }
    
    // Disable Create VPC button
    document.querySelector('.create-vpc-btn').disabled = true;
    
    // Enable Delete VPC button
    document.querySelector('.delete-vpc-btn').disabled = false;
}

/**
 * 리전을 삭제하는 함수
 */
function deleteRegion() {
    // Hide only the Region background image
    document.querySelector('.region > img:first-child').style.visibility = 'hidden';
    
    // Enable Create Region button
    document.querySelector('.create-region-btn').disabled = false;
    
    // Disable Delete Region button
    document.querySelector('.delete-region-btn').disabled = true;
}

/**
 * 리전을 생성하는 함수
 */
function createRegion() {
    // Show the Region background image
    document.querySelector('.region > img:first-child').style.visibility = 'visible';
    
    // Disable Create Region button
    document.querySelector('.create-region-btn').disabled = true;
    
    // Enable Delete Region button
    document.querySelector('.delete-region-btn').disabled = false;
}

/**
 * S3를 삭제하는 함수
 */
function deleteS3() {
    // Hide the S3
    document.querySelector('.s3-bucket').classList.add('hidden');
    
    // Enable Create S3 button
    document.querySelector('.create-s3-btn').disabled = false;
    
    // Disable Delete S3 button
    document.querySelector('.delete-s3-btn').disabled = true;
}

/**
 * S3를 생성하는 함수
 */
function createS3() {
    // Show the S3
    const s3 = document.querySelector('.s3-bucket');
    s3.classList.remove('hidden');
    
    // Fade-in 애니메이션 적용
    applyFadeInAnimation(s3);
    
    // Disable Create S3 button
    document.querySelector('.create-s3-btn').disabled = true;
    
    // Enable Delete S3 button
    document.querySelector('.delete-s3-btn').disabled = false;
}

/**
 * 로드밸런서를 삭제하는 함수
 */
function deleteAlb() {
    // Hide the ALB
    document.querySelector('.alb').classList.add('hidden');
    
    // Enable Create ALB button
    document.querySelector('.create-alb-btn').disabled = false;
    
    // Disable Delete ALB button
    document.querySelector('.delete-alb-btn').disabled = true;
}

/**
 * 로드밸런서를 생성하는 함수
 */
function createAlb() {
    // Show the ALB
    const alb = document.querySelector('.alb');
    alb.classList.remove('hidden');
    
    // Fade-in 애니메이션 적용
    applyFadeInAnimation(alb);
    
    // Disable Create ALB button
    document.querySelector('.create-alb-btn').disabled = true;
    
    // Enable Delete ALB button
    document.querySelector('.delete-alb-btn').disabled = false;
}

/**
 * 인터넷 게이트웨이를 삭제하는 함수
 */
function deleteIgw() {
    // Hide the Internet Gateway
    const igw = document.querySelector('.internet-gateway');
    igw.classList.add('hidden');
    
    // 후광 효과 제거
    const igwImg = igw.querySelector('img');
    if (igwImg) {
        igwImg.classList.remove('glow-effect');
    }
    
    // Enable Create IGW button
    document.querySelector('.create-igw-btn').disabled = false;
    
    // Disable Delete IGW button
    document.querySelector('.delete-igw-btn').disabled = true;
}

/**
 * 인터넷 게이트웨이를 생성하는 함수
 */
function createIgw() {
    // Show the Internet Gateway
    const igw = document.querySelector('.internet-gateway');
    igw.classList.remove('hidden');
    
    // Fade-in 애니메이션 적용
    applyFadeInAnimation(igw);
    
    // 후광 효과 적용
    const igwImg = igw.querySelector('img');
    if (igwImg) {
        igwImg.classList.add('glow-effect');
    }
    
    // Disable Create IGW button
    document.querySelector('.create-igw-btn').disabled = true;
    
    // Enable Delete IGW button
    document.querySelector('.delete-igw-btn').disabled = false;
}

/**
 * 서브넷을 삭제하는 함수
 */
function deleteSubnet() {
    // Hide only the Subnet background images
    document.querySelectorAll('.public-subnet-1 > img:first-child, .public-subnet-2 > img:first-child, .private-subnet-1-1 > img:first-child, .private-subnet-1-2 > img:first-child, .private-subnet-2-1 > img:first-child, .private-subnet-2-2 > img:first-child').forEach(subnetImg => {
        subnetImg.style.visibility = 'hidden';
    });
    
    // Enable Create Subnet button
    document.querySelector('.create-subnet-btn').disabled = false;
    
    // Disable Delete Subnet button
    document.querySelector('.delete-subnet-btn').disabled = true;
}

/**
 * 서브넷을 생성하는 함수
 */
function createSubnet() {
    // Show the Subnet background images
    document.querySelectorAll('.public-subnet-1 > img:first-child, .public-subnet-2 > img:first-child, .private-subnet-1-1 > img:first-child, .private-subnet-1-2 > img:first-child, .private-subnet-2-1 > img:first-child, .private-subnet-2-2 > img:first-child').forEach(subnetImg => {
        subnetImg.style.visibility = 'visible';
    });
    
    // Disable Create Subnet button
    document.querySelector('.create-subnet-btn').disabled = true;
    
    // Enable Delete Subnet button
    document.querySelector('.delete-subnet-btn').disabled = false;
}

/**
 * AZ를 삭제하는 함수
 */
function deleteAz() {
    // Hide only the AZ background images
    document.querySelectorAll('.az-1 > img:first-child, .az-2 > img:first-child').forEach(azImg => {
        azImg.style.visibility = 'hidden';
    });
    
    // Enable Create AZ button
    document.querySelector('.create-az-btn').disabled = false;
    
    // Disable Delete AZ button
    document.querySelector('.delete-az-btn').disabled = true;
}

/**
 * AZ를 생성하는 함수
 */
function createAz() {
    // Show the AZ background images
    document.querySelectorAll('.az-1 > img:first-child, .az-2 > img:first-child').forEach(azImg => {
        azImg.style.visibility = 'visible';
    });
    
    // Disable Create AZ button
    document.querySelector('.create-az-btn').disabled = true;
    
    // Enable Delete AZ button
    document.querySelector('.delete-az-btn').disabled = false;
}

/**
 * DB를 삭제하는 함수
 */
function deleteDb() {
    // Hide the DBs
    document.querySelectorAll('.aurora-1, .aurora-2').forEach(db => {
        db.classList.add('hidden');
    });
    
    // Enable Create DB button
    document.querySelector('.create-db-btn').disabled = false;
    
    // Disable Delete DB button
    document.querySelector('.delete-db-btn').disabled = true;
}

/**
 * DB를 생성하는 함수
 */
function createDb() {
    // Show the DBs
    document.querySelectorAll('.aurora-1, .aurora-2').forEach(db => {
        db.classList.remove('hidden');
        
        // Fade-in 애니메이션 적용
        applyFadeInAnimation(db);
    });
    
    // Disable Create DB button
    document.querySelector('.create-db-btn').disabled = true;
    
    // Enable Delete DB button
    document.querySelector('.delete-db-btn').disabled = false;
}

/**
 * 오토 스케일링 그룹을 삭제하는 함수
 */
function deleteAsg() {
    // Hide the Auto Scaling Group
    document.querySelector('.asg').classList.add('hidden');
    
    // Enable Create ASG button
    document.querySelector('.create-asg-btn').disabled = false;
    
    // Disable Delete ASG button
    document.querySelector('.delete-asg-btn').disabled = true;
}

/**
 * 오토 스케일링 그룹을 생성하는 함수
 */
function createAsg() {
    // Show the Auto Scaling Group
    const asg = document.querySelector('.asg');
    asg.classList.remove('hidden');
    
    // Fade-in 애니메이션 적용
    applyFadeInAnimation(asg);
    
    // Disable Create ASG button
    document.querySelector('.create-asg-btn').disabled = true;
    
    // Enable Delete ASG button
    document.querySelector('.delete-asg-btn').disabled = false;
}

/**
 * EC2 인스턴스를 삭제하는 함수
 */
function deleteEc2(position) {
    // Hide the EC2 instances at the specified position in both AZs
    document.querySelector(`.ec2-az1-private1-${position}`).classList.add('hidden');
    document.querySelector(`.ec2-az2-private1-${position}`).classList.add('hidden');
    
    // Enable Create EC2 button
    document.querySelector(`.create-ec2-${position}-btn`).disabled = false;
    
    // Disable Delete EC2 button
    document.querySelector(`.delete-ec2-${position}-btn`).disabled = true;
}

/**
 * EC2 인스턴스를 생성하는 함수
 */
function createEc2(position) {
    // Show the EC2 instances at the specified position in both AZs
    const ec2Az1 = document.querySelector(`.ec2-az1-private1-${position}`);
    const ec2Az2 = document.querySelector(`.ec2-az2-private1-${position}`);
    
    ec2Az1.classList.remove('hidden');
    ec2Az2.classList.remove('hidden');
    
    // Fade-in 애니메이션 적용
    applyFadeInAnimation(ec2Az1);
    applyFadeInAnimation(ec2Az2);
    
    // Disable Create EC2 button
    document.querySelector(`.create-ec2-${position}-btn`).disabled = true;
    
    // Enable Delete EC2 button
    document.querySelector(`.delete-ec2-${position}-btn`).disabled = false;
}

/**
 * EC2-2를 흔드는 함수
 */
function shakeEc2() {
    // 양쪽 AZ의 두 번째 EC2에 shake 클래스 추가
    const ec2Elements = [
        document.querySelector('.ec2-az1-private1-2'),
        document.querySelector('.ec2-az2-private1-2')
    ];
    
    ec2Elements.forEach(ec2 => {
        // 이미 애니메이션 중이면 중복 실행 방지
        if (!ec2.classList.contains('shake')) {
            // shake 클래스 추가
            ec2.classList.add('shake');
            
            // 애니메이션이 끝나면 shake 클래스 제거
            setTimeout(() => {
                ec2.classList.remove('shake');
            }, 2000); // 애니메이션 지속 시간과 동일하게 설정
        }
    });
}

/**
 * VPC 모달을 표시하는 함수
 */
function showVpcModal() {
    // Show the VPC modal
    document.getElementById('vpcModal').style.display = 'block';
}

/**
 * 모달을 닫는 함수
 */
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// 메시지 애니메이션 완료 여부를 추적하는 변수
let messageAnimationComplete = true;
let messageQueue = [];

// Function to add a message to the chat
function addMessage(text, isUser = true, nextCommand = null) {
    // 메시지 객체 생성
    const messageObj = { text, isUser, nextCommand };
    
    // 메시지를 큐에 추가
    messageQueue.push(messageObj);
    
    // 애니메이션이 진행 중이 아니면 메시지 표시 시작
    if (messageAnimationComplete) {
        processNextMessage();
    }
}

// 큐에서 다음 메시지를 처리하는 함수
function processNextMessage() {
    if (messageQueue.length === 0) {
        messageAnimationComplete = true;
        return;
    }
    
    messageAnimationComplete = false;
    const { text, isUser, nextCommand } = messageQueue.shift();
    
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'system-message'}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    
    // 애니메이션 완료 이벤트 리스너 추가
    messageDiv.addEventListener('animationend', function onAnimationEnd() {
        // 이벤트 리스너 제거
        messageDiv.removeEventListener('animationend', onAnimationEnd);
        
        // 다음 명령어 제안이 있으면 추가
        if (nextCommand && !isUser) {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.className = 'command-suggestion';
            suggestionDiv.textContent = nextCommand;
            suggestionDiv.onclick = function() {
                document.getElementById('messageInput').value = nextCommand;
                // 자동으로 메시지 전송
                sendMessage();
            };
            chatMessages.appendChild(suggestionDiv);
        }
        
        // 스크롤 조정
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // 약간의 지연 후 다음 메시지 처리
        setTimeout(() => {
            processNextMessage();
        }, 300);
    });
    
    // 스크롤 조정
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 사용자 의도를 파악하는 함수
function matchIntent(userMessage, keywords) {
    userMessage = userMessage.toLowerCase();
    return keywords.some(keyword => userMessage.includes(keyword));
}

// Function to handle message sending
function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message);
        
        // VPC 관련 명령어
        if (matchIntent(message, ['vpc를 만들', 'vpc 생성', 'vpc 만들', 'create vpc', 'vpc 추가', 'vpc 설정'])) {
            setTimeout(() => {
                addMessage('VPC를 생성했습니다. 이제 Public 서브넷을 만들어볼까요?', false, 'Public 서브넷을 만들어줘');
                createVpc();
                showCharacter('vpc');
            }, 500);
        } else if (matchIntent(message, ['vpc를 삭제', 'vpc 삭제', 'vpc 제거', 'delete vpc', 'vpc 지우', 'vpc 없애'])) {
            setTimeout(() => {
                addMessage('VPC를 삭제했습니다.', false);
                deleteVpc();
            }, 500);
        }
        
        // 리전 관련 명령어
        else if (matchIntent(message, ['리전을 만들', '리전 생성', 'create region', '리전 추가', '리전 설정'])) {
            setTimeout(() => {
                addMessage('리전은 이미 생성되어 있습니다. VPC를 만들어보세요.', false, 'VPC를 만들어줘');
                createRegion();
            }, 500);
        } else if (matchIntent(message, ['리전을 삭제', '리전 삭제', 'delete region', '리전 제거', '리전 지우'])) {
            setTimeout(() => {
                addMessage('리전은 기본 인프라로 삭제할 수 없습니다.', false);
                // 리전은 삭제하지 않음
            }, 500);
        }
        
        // Public 서브넷 관련 명령어
        else if (matchIntent(message, ['public 서브넷을 만들', 'public 서브넷 생성', 'create public subnet', '퍼블릭 서브넷', '공개 서브넷'])) {
            setTimeout(() => {
                addMessage('Public 서브넷을 생성했습니다. 이제 Private 서브넷을 만들어보세요', false, 'Private 서브넷을 만들어줘');
                createPublicSubnet();
                showCharacter('subnet');
            }, 500);
        } else if (matchIntent(message, ['public 서브넷을 삭제', 'public 서브넷 삭제', 'delete public subnet', '퍼블릭 서브넷 제거'])) {
            setTimeout(() => {
                addMessage('Public 서브넷을 삭제했습니다.', false);
                deletePublicSubnet();
            }, 500);
        }
        
        // Private 서브넷 관련 명령어
        else if (matchIntent(message, ['private 서브넷을 만들', 'private 서브넷 생성', 'create private subnet', '프라이빗 서브넷', '비공개 서브넷'])) {
            setTimeout(() => {
                addMessage('Private 서브넷을 생성했습니다. 이제 Internet Gateway를 만들어보세요', false, 'Internet Gateway를 만들어줘');
                createPrivateSubnet();
                showCharacter('subnet');
            }, 500);
        } else if (matchIntent(message, ['private 서브넷을 삭제', 'private 서브넷 삭제', 'delete private subnet', '프라이빗 서브넷 제거'])) {
            setTimeout(() => {
                addMessage('Private 서브넷을 삭제했습니다.', false);
                deletePrivateSubnet();
            }, 500);
        }
        
        // 기존 서브넷 명령어 처리 (하위 호환성 유지)
        else if (matchIntent(message, ['서브넷을 만들', '서브넷 생성', 'create subnet', '서브넷 추가'])) {
            setTimeout(() => {
                addMessage('서브넷은 Public과 Private으로 나뉩니다. Public 서브넷부터 만들어볼까요?', false, 'Public 서브넷을 만들어줘');
            }, 500);
        } else if (matchIntent(message, ['서브넷을 삭제', '서브넷 삭제', 'delete subnet', '서브넷 제거', '서브넷 지우'])) {
            setTimeout(() => {
                addMessage('Public과 Private 서브넷을 모두 삭제했습니다.', false);
                deletePublicSubnet();
                deletePrivateSubnet();
            }, 500);
        }
        
        // AZ 관련 명령어
        else if (matchIntent(message, ['az를 만들', 'az 생성', 'create az', '가용 영역', '가용영역 생성', '에이지'])) {
            setTimeout(() => {
                addMessage('가용 영역은 이미 생성되어 있습니다. 서브넷을 생성해보세요.', false, '서브넷을 만들어줘');
                createAz();
            }, 500);
        } else if (matchIntent(message, ['az를 삭제', 'az 삭제', 'delete az', '가용 영역 삭제', '가용영역 제거'])) {
            setTimeout(() => {
                addMessage('가용 영역은 기본 인프라로 삭제할 수 없습니다.', false);
                // AZ는 삭제하지 않음
            }, 500);
        }
        
        // Internet Gateway 관련 명령어
        else if (matchIntent(message, ['internet gateway를 만들', 'igw 생성', 'create igw', '인터넷 게이트웨이', '인터넷 게이트', 'igw 추가', '인터넷 연결'])) {
            setTimeout(() => {
                addMessage('Internet Gateway를 생성했습니다. 이제 NAT Gateway를 생성해보세요', false, 'NAT Gateway를 만들어줘');
                createIgw();
                showCharacter('igw');
            }, 500);
        } else if (matchIntent(message, ['internet gateway를 삭제', 'igw 삭제', 'delete igw', '인터넷 게이트웨이 삭제', '인터넷 게이트웨이 제거'])) {
            setTimeout(() => {
                addMessage('Internet Gateway를 삭제했습니다.', false);
                deleteIgw();
            }, 500);
        }
        
        // NAT Gateway 관련 명령어
        else if (matchIntent(message, ['nat gateway를 만들', 'nat 생성', 'create nat', '나트 게이트웨이', '나트 게이트', 'nat 추가', '내트'])) {
            setTimeout(() => {
                addMessage('NAT Gateway를 생성했습니다. 이제 EC2 인스턴스를 생성해보세요', false, 'EC2를 만들어줘');
                createNatGateway();
                showCharacter('nat');
            }, 500);
        } else if (matchIntent(message, ['nat gateway를 삭제', 'nat 삭제', 'delete nat', '나트 게이트웨이 삭제', '나트 게이트웨이 제거'])) {
            setTimeout(() => {
                addMessage('NAT Gateway를 삭제했습니다.', false);
                deleteNatGateway();
            }, 500);
        }
        
        // ALB 관련 명령어
        else if (matchIntent(message, ['alb를 만들', 'application load balancer를 만들', 'alb 생성', 'create alb', '로드 밸런서', '로드밸런서', '부하 분산', '로드발란서'])) {
            setTimeout(() => {
                addMessage('Application Load Balancer를 생성했습니다. 이제 Auto Scaling Group을 만들어보세요', false, 'Auto Scaling Group을 만들어줘');
                createAlb();
                showCharacter('alb');
            }, 500);
        } else if (matchIntent(message, ['alb를 삭제', 'alb 삭제', 'delete alb', '로드 밸런서 삭제', '로드밸런서 제거'])) {
            setTimeout(() => {
                addMessage('Application Load Balancer를 삭제했습니다.', false);
                deleteAlb();
            }, 500);
        }
        
        // Auto Scaling Group 관련 명령어
        else if (matchIntent(message, ['auto scaling group을 만들', 'asg 생성', 'create asg', '오토 스케일링', '자동 확장', '오토스케일링', '오토스케일링 그룹'])) {
            setTimeout(() => {
                addMessage('Auto Scaling Group을 생성했습니다. 이제 추가 EC2 인스턴스를 생성해보세요', false, 'DB를 만들어줘');
                createAsg();
                showCharacter('asg');
            }, 500);
        } else if (matchIntent(message, ['auto scaling group을 삭제', 'asg 삭제', 'delete asg', '오토 스케일링 삭제', '자동 확장 제거'])) {
            setTimeout(() => {
                addMessage('Auto Scaling Group을 삭제했습니다.', false);
                deleteAsg();
            }, 500);
        }
        
        // EC2 관련 명령어
        else if (matchIntent(message, ['ec2를 만들', 'ec2 생성', 'create ec2', '인스턴스 생성', '서버 생성', '가상 서버', '이씨투'])) {
            setTimeout(() => {
                addMessage('기본 EC2 인스턴스를 생성했습니다. 이제 ALB를 생성해보세요', false, 'ALB를 만들어줘');
                createEc2('2'); // 처음에는 EC2 인스턴스를 하나만 생성
                showCharacter('ec2');
            }, 500);
        } else if (matchIntent(message, ['ec2를 삭제', 'ec2 삭제', 'delete ec2', '인스턴스 삭제', '서버 삭제', '가상 서버 제거'])) {
            setTimeout(() => {
                addMessage('EC2 인스턴스를 삭제했습니다.', false);
                deleteEc2('1');
                deleteEc2('2');
                deleteEc2('3');
            }, 500);
        } else if (matchIntent(message, ['추가 ec2를 만들', '추가 ec2 생성', 'create more ec2', '더 많은 인스턴스', '서버 추가', 'ec2 더 만들'])) {
            setTimeout(() => {
                addMessage('추가 EC2 인스턴스를 생성했습니다.', false);
                createEc2('1');
                createEc2('3');
                showCharacter('ec2');
            }, 500);
        }


        
        // DB 관련 명령어
        else if (matchIntent(message, ['db를 만들', 'db 생성', 'create db', '데이터베이스 생성', '디비 생성', 'rds 생성', '데이터 저장소'])) {
            setTimeout(() => {
                addMessage('데이터베이스를 생성했습니다. 이제 S3를 생성해보세요', false, 'S3를 만들어줘');
                createDb();
                showCharacter('db');
            }, 500);
        } else if (matchIntent(message, ['db를 삭제', 'db 삭제', 'delete db', '데이터베이스 삭제', '디비 삭제', 'rds 삭제'])) {
            setTimeout(() => {
                addMessage('데이터베이스를 삭제했습니다.', false);
                deleteDb();
            }, 500);
        }
        
        // S3 관련 명령어
        else if (matchIntent(message, ['s3를 만들', 's3 생성', 'create s3', '스토리지 생성', '버킷 생성', '에스쓰리', '저장소 생성'])) {
            setTimeout(() => {
                addMessage('S3 버킷을 생성했습니다. 이제 트래픽 부하를 넣어볼까요?', false, '트래픽 부하 넣기');
                createS3();
                showCharacter('s3');
            }, 500);
        } else if (matchIntent(message, ['s3를 삭제', 's3 삭제', 'delete s3', '스토리지 삭제', '버킷 삭제', '에스쓰리 삭제'])) {
            setTimeout(() => {
                addMessage('S3 버킷을 삭제했습니다.', false);
                deleteS3();
            }, 500);
        }
        
        // 트래픽 부하 관련 명령어
        else if (matchIntent(message, ['트래픽 부하 넣기', '트래픽 발생', 'add traffic', '부하 테스트', '트래픽 증가', '부하 주기', '트래픽 테스트'])) {
            setTimeout(() => {
                addMessage('부하가 발생중입니다!', false);
                
                // 천둥번개 효과 추가
                createThunderEffect();
                
                // 전체 아키텍처 흔들기
                const architecture = document.querySelector('.architecture');
                if (architecture) {
                    architecture.classList.add('shake-architecture');
                    setTimeout(() => {
                        architecture.classList.remove('shake-architecture');
                    }, 500);
                }
                
                // EC2 흔들기
                shakeEc2();
                
                // 캐릭터 표시
                showCharacter('traffic');
                
                // 애니메이션이 끝난 후 스케일링 메시지 표시 및 EC2 생성
                setTimeout(() => {
                    addMessage('EC2 인스턴스가 스케일링됩니다.', false, '전체 아키텍처 삭제');
                    createEc2('1');
                    createEc2('3');
                }, 2000); // shakeEc2 함수의 애니메이션 지속 시간과 동일하게 설정
            }, 500);
        }
        
        // 전체 아키텍처 생성 명령어
        else if (matchIntent(message, ['전체 아키텍처 생성', 'create all', '모두 생성', '전체 생성', '모든 리소스 생성', '전부 만들기', '한번에 생성'])) {
            setTimeout(() => {
                createAllArchitecture();
            }, 500);
        }
        
        // 전체 아키텍처 삭제 명령어
        else if (matchIntent(message, ['전체 아키텍처 삭제', 'delete all', '모두 삭제', '전체 삭제', '모든 리소스 삭제', '전부 지우기', '초기화'])) {
            setTimeout(() => {
                addMessage('전체 아키텍처를 삭제하고 초기 화면으로 돌아갑니다.', false);
                deleteAllArchitecture();
            }, 500);
        }
        
        // 도움말 명령어
        else if (message === '도움말' || message === 'help' || message === '명령어') {
            addMessage('사용 가능한 명령어 목록입니다:', false);
            addMessage('- VPC 생성/삭제: "vpc 생성", "vpc 삭제"', false);
            addMessage('- 리전 생성/삭제: "리전 생성", "리전 삭제"', false);
            addMessage('- 서브넷 생성/삭제: "서브넷 생성", "서브넷 삭제"', false);
            addMessage('- AZ 생성/삭제: "az 생성", "az 삭제"', false);
            addMessage('- IGW 생성/삭제: "igw 생성", "igw 삭제"', false);
            addMessage('- NAT Gateway 생성/삭제: "nat 생성", "nat 삭제"', false);
            addMessage('- ALB 생성/삭제: "alb 생성", "alb 삭제"', false);
            addMessage('- ASG 생성/삭제: "asg 생성", "asg 삭제"', false);
            addMessage('- EC2 생성/삭제: "ec2 생성", "ec2 삭제"', false);
            addMessage('- DB 생성/삭제: "db 생성", "db 삭제"', false);
            addMessage('- S3 생성/삭제: "s3 생성", "s3 삭제"', false);
            addMessage('- 트래픽 부하: "트래픽 부하 넣기"', false);
            addMessage('- 전체 생성/삭제: "전체 아키텍처 생성", "전체 아키텍처 삭제"', false);
        }
        
        // 알 수 없는 명령어
        else {
            addMessage('죄송합니다. 해당 명령어를 이해하지 못했습니다. "도움말"을 입력하여 사용 가능한 명령어를 확인하세요.', false);
        }
        
        // Clear input
        input.value = '';
    }
}

// Add event listener for Enter key
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Display initial image when page loads
window.onload = function() {
    // Add initial welcome message
    setTimeout(() => {
        addMessage('안녕하세요! AWS 3-Tier 아키텍처를 쉽게 배워보아요.', false);
        addMessage('AWS Cloud, Region, 가용 영역(AZ)이 이미 생성되어 있습니다. 이제 VPC부터 만들어보세요!', false);
        addMessage('아래 명령어를 사용하여 AWS 리소스를 생성하고 삭제할 수 있습니다.', false);
        
        // Add command suggestions
        setTimeout(() => {
            const chatMessages = document.getElementById('chatMessages');
            
            const helpDiv = document.createElement('div');
            helpDiv.className = 'command-suggestion';
            helpDiv.textContent = '도움말';
            helpDiv.onclick = function() {
                document.getElementById('messageInput').value = '도움말';
                // 자동으로 메시지 전송
                sendMessage();
            };
            chatMessages.appendChild(helpDiv);
            
            const createAllDiv = document.createElement('div');
            createAllDiv.className = 'command-suggestion';
            createAllDiv.textContent = '전체 아키텍처 생성';
            createAllDiv.onclick = function() {
                document.getElementById('messageInput').value = '전체 아키텍처 생성';
                // 자동으로 메시지 전송
                sendMessage();
            };
            chatMessages.appendChild(createAllDiv);
            
            const vpcDiv = document.createElement('div');
            vpcDiv.className = 'command-suggestion';
            vpcDiv.textContent = 'VPC를 만들어줘';
            vpcDiv.onclick = function() {
                document.getElementById('messageInput').value = 'VPC를 만들어줘';
                // 자동으로 메시지 전송
                sendMessage();
            };
            chatMessages.appendChild(vpcDiv);
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 2000);
    }, 500);
    
    // 초기 버튼 상태 설정 - aws-cloud, region, az는 이미 생성된 상태로 시작
    document.querySelector('.create-vpc-btn') && (document.querySelector('.create-vpc-btn').disabled = false);
    document.querySelector('.delete-vpc-btn') && (document.querySelector('.delete-vpc-btn').disabled = true);
    
    document.querySelector('.create-region-btn') && (document.querySelector('.create-region-btn').disabled = true);
    document.querySelector('.delete-region-btn') && (document.querySelector('.delete-region-btn').disabled = false);
    
    document.querySelector('.create-az-btn') && (document.querySelector('.create-az-btn').disabled = true);
    document.querySelector('.delete-az-btn') && (document.querySelector('.delete-az-btn').disabled = false);
    
    // NAT Gateway 버튼 초기화
    document.querySelector('.create-nat-btn') && (document.querySelector('.create-nat-btn').disabled = false);
    document.querySelector('.delete-nat-btn') && (document.querySelector('.delete-nat-btn').disabled = true);
    
    document.querySelector('.create-s3-btn') && (document.querySelector('.create-s3-btn').disabled = false);
    document.querySelector('.delete-s3-btn') && (document.querySelector('.delete-s3-btn').disabled = true);
    
    document.querySelector('.create-alb-btn') && (document.querySelector('.create-alb-btn').disabled = false);
    document.querySelector('.delete-alb-btn') && (document.querySelector('.delete-alb-btn').disabled = true);
    
    document.querySelector('.create-igw-btn') && (document.querySelector('.create-igw-btn').disabled = false);
    document.querySelector('.delete-igw-btn') && (document.querySelector('.delete-igw-btn').disabled = true);
    
    // Public/Private 서브넷 버튼 초기화
    document.querySelector('.create-public-subnet-btn') && (document.querySelector('.create-public-subnet-btn').disabled = false);
    document.querySelector('.delete-public-subnet-btn') && (document.querySelector('.delete-public-subnet-btn').disabled = true);
    
    document.querySelector('.create-private-subnet-btn') && (document.querySelector('.create-private-subnet-btn').disabled = false);
    document.querySelector('.delete-private-subnet-btn') && (document.querySelector('.delete-private-subnet-btn').disabled = true);
    
    document.querySelector('.create-az-btn') && (document.querySelector('.create-az-btn').disabled = false);
    document.querySelector('.delete-az-btn') && (document.querySelector('.delete-az-btn').disabled = true);
    
    document.querySelector('.create-db-btn') && (document.querySelector('.create-db-btn').disabled = false);
    document.querySelector('.delete-db-btn') && (document.querySelector('.delete-db-btn').disabled = true);
    
    document.querySelector('.create-asg-btn') && (document.querySelector('.create-asg-btn').disabled = false);
    document.querySelector('.delete-asg-btn') && (document.querySelector('.delete-asg-btn').disabled = true);
    
    // EC2 인스턴스 버튼 초기화
    for (let i = 1; i <= 3; i++) {
        document.querySelector(`.create-ec2-${i}-btn`) && (document.querySelector(`.create-ec2-${i}-btn`).disabled = false);
        document.querySelector(`.delete-ec2-${i}-btn`) && (document.querySelector(`.delete-ec2-${i}-btn`).disabled = true);
    }
    
    // 초기 상태에서 aws-cloud, region, available-zone은 표시하고 나머지 리소스는 숨기기
    // AWS Cloud, Region, AZ는 기본으로 표시
    createRegion();
    createAz();
    
    // VPC와 나머지 리소스는 숨기기
    deleteVpc();
    deletePublicSubnet();
    deletePrivateSubnet();
    deleteIgw();
    deleteNatGateway();
    deleteAlb();
    deleteAsg();
    deleteEc2('1');
    deleteEc2('2');
    deleteEc2('3');
    deleteDb();
    deleteS3();
};
/**
 * NAT Gateway를 삭제하는 함수
 */
function deleteNatGateway() {
    // Hide the NAT Gateway
    const natGateway = document.querySelector('.nat-gateway');
    natGateway.classList.add('hidden');
    
    // 후광 효과 제거
    const natImg = natGateway.querySelector('img');
    if (natImg) {
        natImg.classList.remove('nat-glow-effect');
    }
    
    // Enable Create NAT Gateway button
    document.querySelector('.create-nat-btn').disabled = false;
    
    // Disable Delete NAT Gateway button
    document.querySelector('.delete-nat-btn').disabled = true;
}

/**
 * NAT Gateway를 생성하는 함수
 */
function createNatGateway() {
    // Show the NAT Gateway
    const natGateway = document.querySelector('.nat-gateway');
    natGateway.classList.remove('hidden');
    
    // Fade-in 애니메이션 적용
    applyFadeInAnimation(natGateway);
    
    // 후광 효과 적용 (주황색)
    const natImg = natGateway.querySelector('img');
    if (natImg) {
        natImg.classList.add('nat-glow-effect');
    }
    
    // Disable Create NAT Gateway button
    document.querySelector('.create-nat-btn').disabled = true;
    
    // Enable Delete NAT Gateway button
    document.querySelector('.delete-nat-btn').disabled = false;
}
/**
 * Public 서브넷을 생성하는 함수
 */
function createPublicSubnet() {
    // Show the Public Subnet background images
    document.querySelectorAll('.public-subnet-1 > img:first-child, .public-subnet-2 > img:first-child').forEach(subnetImg => {
        subnetImg.style.visibility = 'visible';
        
        // Fade-in 애니메이션 적용
        applyFadeInAnimation(subnetImg);
        
        // 반딧불이 효과 적용
        createFireflyEffect(subnetImg.parentElement);
    });
    
    // Disable Create Public Subnet button
    document.querySelector('.create-public-subnet-btn').disabled = true;
    
    // Enable Delete Public Subnet button
    document.querySelector('.delete-public-subnet-btn').disabled = false;
}

/**
 * Public 서브넷을 삭제하는 함수
 */
function deletePublicSubnet() {
    // Hide the Public Subnet background images
    document.querySelectorAll('.public-subnet-1 > img:first-child, .public-subnet-2 > img:first-child').forEach(subnetImg => {
        subnetImg.style.visibility = 'hidden';
    });
    
    // Enable Create Public Subnet button
    document.querySelector('.create-public-subnet-btn').disabled = false;
    
    // Disable Delete Public Subnet button
    document.querySelector('.delete-public-subnet-btn').disabled = true;
}

/**
 * Private 서브넷을 생성하는 함수
 */
function createPrivateSubnet() {
    // Show the Private Subnet background images
    document.querySelectorAll('.private-subnet-1-1 > img:first-child, .private-subnet-1-2 > img:first-child, .private-subnet-2-1 > img:first-child, .private-subnet-2-2 > img:first-child').forEach(subnetImg => {
        subnetImg.style.visibility = 'visible';
        
        // Fade-in 애니메이션 적용
        applyFadeInAnimation(subnetImg);
        
        // 민트색 반딧불이 효과 적용
        createMintFireflyEffect(subnetImg.parentElement);
    });
    
    // Disable Create Private Subnet button
    document.querySelector('.create-private-subnet-btn').disabled = true;
    
    // Enable Delete Private Subnet button
    document.querySelector('.delete-private-subnet-btn').disabled = false;
}

/**
 * Private 서브넷을 삭제하는 함수
 */
function deletePrivateSubnet() {
    // Hide the Private Subnet background images
    document.querySelectorAll('.private-subnet-1-1 > img:first-child, .private-subnet-1-2 > img:first-child, .private-subnet-2-1 > img:first-child, .private-subnet-2-2 > img:first-child').forEach(subnetImg => {
        subnetImg.style.visibility = 'hidden';
    });
    
    // Enable Create Private Subnet button
    document.querySelector('.create-private-subnet-btn').disabled = false;
    
    // Disable Delete Private Subnet button
    document.querySelector('.delete-private-subnet-btn').disabled = true;
}
// Function to show help message
function showHelpMessage() {
    addMessage('사용 가능한 명령어 목록입니다:', false);
    addMessage('- VPC 생성/삭제: "vpc 생성", "vpc 삭제"', false);
    addMessage('- 리전 생성/삭제: "리전 생성", "리전 삭제"', false);
    addMessage('- Public 서브넷 생성/삭제: "public 서브넷 생성", "public 서브넷 삭제"', false);
    addMessage('- Private 서브넷 생성/삭제: "private 서브넷 생성", "private 서브넷 삭제"', false);
    addMessage('- AZ 생성/삭제: "az 생성", "az 삭제"', false);
    addMessage('- IGW 생성/삭제: "igw 생성", "igw 삭제"', false);
    addMessage('- NAT Gateway 생성/삭제: "nat 생성", "nat 삭제"', false);
    addMessage('- ALB 생성/삭제: "alb 생성", "alb 삭제"', false);
    addMessage('- ASG 생성/삭제: "asg 생성", "asg 삭제"', false);
    addMessage('- EC2 생성/삭제: "ec2 생성", "ec2 삭제"', false);
    addMessage('- 추가 EC2 생성: "추가 ec2 생성"', false);
    addMessage('- DB 생성/삭제: "db 생성", "db 삭제"', false);
    addMessage('- S3 생성/삭제: "s3 생성", "s3 삭제"', false);
    addMessage('- 트래픽 부하: "트래픽 부하 넣기"', false);
    addMessage('- 전체 생성/삭제: "전체 아키텍처 생성", "전체 아키텍처 삭제"', false);
}
// 버튼 컨테이너 숨기기 함수
function hideButtonContainer() {
    const buttonContainer = document.querySelector('.button-container');
    if (buttonContainer) {
        buttonContainer.style.display = 'none';
    }
}

// 페이지 로드 시 버튼 컨테이너 숨기기
window.addEventListener('DOMContentLoaded', hideButtonContainer);
/**
 * 요소에 fade-in 애니메이션을 적용하는 함수
 */
function applyFadeInAnimation(element) {
    if (element) {
        // 기존 클래스 유지하면서 fade-in 클래스 추가
        element.classList.add('fade-in');
        
        // 애니메이션이 끝나면 fade-in 클래스 제거
        setTimeout(() => {
            element.classList.remove('fade-in');
        }, 800); // 애니메이션 지속 시간과 동일하게 설정
    }
}
/**
 * 트래픽 부하 시 번개 애니메이션을 표시하는 함수
 */
function showLightningAnimation() {
    // 번개 애니메이션 요소 생성
    const lightningContainer = document.createElement('div');
    lightningContainer.className = 'lightning-container';
    document.body.appendChild(lightningContainer);
    
    // 애니메이션이 끝나면 요소 제거
    setTimeout(() => {
        document.body.removeChild(lightningContainer);
    }, 2000); // 애니메이션 지속 시간
}
undefined
/**
 * 서비스 설명 데이터
 */
const serviceDescriptions = {
    'vpc': {
        title: 'Amazon VPC',
        description: 'Virtual Private Cloud(VPC)는 AWS 클라우드에서 논리적으로 격리된 네트워크 공간을 제공합니다. 자체 IP 주소 범위, 서브넷, 라우팅 테이블 및 네트워크 게이트웨이를 구성할 수 있습니다.'
    },
    'subnet': {
        title: 'Subnet',
        description: 'VPC의 IP 주소 범위를 나누는 서브넷은 리소스를 논리적으로 구성하고 보안을 강화합니다. 퍼블릭 서브넷은 인터넷에 직접 연결되고, 프라이빗 서브넷은 인터넷에 직접 연결되지 않습니다.'
    },
    'igw': {
        title: 'Internet Gateway',
        description: 'VPC와 인터넷 간의 통신을 가능하게 하는 게이트웨이입니다. 퍼블릭 서브넷의 리소스가 인터넷에 접속할 수 있도록 합니다.'
    },
    'nat': {
        title: 'NAT Gateway',
        description: 'Network Address Translation(NAT) 게이트웨이는 프라이빗 서브넷의 리소스가 인터넷에 접속할 수 있게 하면서, 인터넷에서 이러한 리소스에 직접 접근하는 것을 방지합니다.'
    },
    'alb': {
        title: 'Application Load Balancer',
        description: 'HTTP/HTTPS 트래픽을 여러 EC2 인스턴스에 분산시켜 애플리케이션의 가용성을 높입니다. 경로 기반 라우팅, 호스트 기반 라우팅 등 고급 요청 라우팅 기능을 제공합니다.'
    },
    'asg': {
        title: 'Auto Scaling Group',
        description: 'EC2 인스턴스를 자동으로 확장하거나 축소하여 애플리케이션의 가용성을 유지하고 비용을 최적화합니다. 트래픽이 증가하면 인스턴스를 추가하고, 감소하면 인스턴스를 제거합니다.'
    },
    'ec2': {
        title: 'Amazon EC2',
        description: 'Elastic Compute Cloud(EC2)는 클라우드에서 안전하고 크기 조정이 가능한 컴퓨팅 파워를 제공합니다. 다양한 인스턴스 유형을 선택하여 애플리케이션에 맞는 최적의 성능을 구성할 수 있습니다.'
    },
    'db': {
        title: 'Amazon RDS',
        description: 'Relational Database Service(RDS)는 클라우드에서 관계형 데이터베이스를 쉽게 설정, 운영 및 확장할 수 있게 해주는 서비스입니다. 하드웨어 프로비저닝, 데이터베이스 설정, 패치 및 백업과 같은 시간 소모적인 관리 작업을 자동화합니다.'
    },
    's3': {
        title: 'Amazon S3',
        description: 'Simple Storage Service(S3)는 어디서나 원하는 양의 데이터를 저장하고 검색할 수 있는 객체 스토리지 서비스입니다. 높은 내구성, 가용성 및 확장성을 제공합니다.'
    },
    'traffic': {
        title: '트래픽 부하 테스트',
        description: '트래픽 부하가 증가하면 Auto Scaling Group이 자동으로 EC2 인스턴스를 추가하여 애플리케이션의 가용성을 유지합니다. 이를 통해 사용자 경험을 저하시키지 않고 트래픽 급증을 처리할 수 있습니다.'
    }
};

/**
 * 캐릭터와 말풍선을 표시하는 함수
 */
function showCharacter(serviceType) {
    // 이미 존재하는 캐릭터 컨테이너 제거
    removeCharacter();
    
    // 서비스 정보 가져오기
    const serviceInfo = serviceDescriptions[serviceType];
    if (!serviceInfo) return;
    
    // 캐릭터 컨테이너 생성
    const characterContainer = document.createElement('div');
    characterContainer.className = 'character-container';
    characterContainer.onclick = removeCharacter;
    
    // 말풍선 생성
    const speechBubble = document.createElement('div');
    speechBubble.className = 'speech-bubble';
    
    // 말풍선 내용 추가
    const title = document.createElement('h3');
    title.textContent = serviceInfo.title;
    
    const description = document.createElement('p');
    description.textContent = serviceInfo.description;
    
    // 버튼 컨테이너 생성
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container-speech';
    
    // 음성 버튼 추가
    const speakButton = document.createElement('button');
    speakButton.textContent = '🔊 읽어주기';
    speakButton.className = 'speak-button';
    speakButton.onclick = function(e) {
        e.stopPropagation(); // 버블링 방지
        speakText(serviceInfo.title + '. ' + serviceInfo.description);
    };
    
    // 유튜브 버튼 추가
    const youtubeButton = document.createElement('button');
    youtubeButton.textContent = '📺 유튜브 보기';
    youtubeButton.className = 'youtube-button';
    youtubeButton.onclick = function(e) {
        e.stopPropagation(); // 버블링 방지
        // 해당 서비스의 유튜브 URL이 있으면 새 창에서 열기
        if (youtubeUrls[serviceType]) {
            window.open(youtubeUrls[serviceType], '_blank');
        }
    };
    
    // 버튼들을 컨테이너에 추가
    buttonContainer.appendChild(speakButton);
    buttonContainer.appendChild(youtubeButton);
    
    speechBubble.appendChild(title);
    speechBubble.appendChild(description);
    speechBubble.appendChild(buttonContainer);
    
    // 캐릭터 이미지 생성
    const characterImage = document.createElement('img');
    characterImage.className = 'character-image';
    characterImage.src = 'images/peccy.jpg';
    characterImage.alt = 'AWS Peccy';
    
    // 컨테이너에 요소 추가
    characterContainer.appendChild(speechBubble);
    characterContainer.appendChild(characterImage);
    
    // 페이지에 추가
    document.body.appendChild(characterContainer);
    
    // 자동으로 음성 재생
    speakText(serviceInfo.title + '. ' + serviceInfo.description);
}

/**
 * 캐릭터와 말풍선을 제거하는 함수
 */
function removeCharacter() {
    // 음성 중단
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    
    // 캐릭터 제거
    const characterContainer = document.querySelector('.character-container');
    if (characterContainer) {
        characterContainer.remove();
    }
}
/**
 * 텍스트를 음성으로 읽어주는 함수
 */
function speakText(text) {
    // Web Speech API 지원 확인
    if ('speechSynthesis' in window) {
        // 이전 음성 중지
        window.speechSynthesis.cancel();
        
        // 새 음성 생성
        const utterance = new SpeechSynthesisUtterance(text);
        
        // 한국어로 설정 (기본값은 영어)
        utterance.lang = 'ko-KR';
        
        // 음성 속도 설정 (0.1 ~ 10, 기본값 1)
        utterance.rate = 1.0;
        
        // 음성 높낮이 설정 (0 ~ 2, 기본값 1)
        utterance.pitch = 1.0;
        
        // 음성 볼륨 설정 (0 ~ 1, 기본값 1)
        utterance.volume = 1.0;
        
        // 음성 재생
        window.speechSynthesis.speak(utterance);
    }
}
/**
 * 전체 아키텍처를 생성하는 함수
 */
function createAllArchitecture() {
    // 모든 리소스 생성
    createRegion();
    createVpc();
    createAz();
    createPublicSubnet();
    createPrivateSubnet();
    createIgw();
    createNatGateway();
    createAlb();
    createAsg();
    createEc2('1');
    createEc2('2');
    createEc2('3');
    createDb();
    createS3();
    
    // 채팅창에 메시지 추가
    addMessage('전체 AWS 3-Tier 아키텍처를 생성했습니다.', false, '트래픽 부하 넣기');
}

/**
 * 전체 아키텍처를 삭제하는 함수
 */
function deleteAllArchitecture() {
    // 모든 리소스 삭제
    deleteVpc();
    deletePublicSubnet();
    deletePrivateSubnet();
    deleteIgw();
    deleteNatGateway();
    deleteAlb();
    deleteAsg();
    deleteEc2('1');
    deleteEc2('2');
    deleteEc2('3');
    deleteDb();
    deleteS3();
    
    // 대화창 초기화
    setTimeout(() => {
        // 대화창 내용 지우기
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML = '';
        
        // 초기 메시지 다시 표시
        addMessage('안녕하세요! AWS 3-Tier 아키텍처를 쉽게 배워보아요.', false);
        addMessage('AWS Cloud, Region, 가용 영역(AZ)이 이미 생성되어 있습니다. 이제 VPC부터 만들어보세요!', false);
        addMessage('아래 명령어를 사용하여 AWS 리소스를 생성하고 삭제할 수 있습니다.', false);
        
        // 명령어 제안 추가
        const helpDiv = document.createElement('div');
        helpDiv.className = 'command-suggestion';
        helpDiv.textContent = '도움말';
        helpDiv.onclick = function() {
            document.getElementById('messageInput').value = '도움말';
            sendMessage();
        };
        chatMessages.appendChild(helpDiv);
        
        const createAllDiv = document.createElement('div');
        createAllDiv.className = 'command-suggestion';
        createAllDiv.textContent = '전체 아키텍처 생성';
        createAllDiv.onclick = function() {
            document.getElementById('messageInput').value = '전체 아키텍처 생성';
            sendMessage();
        };
        chatMessages.appendChild(createAllDiv);
        
        const vpcDiv = document.createElement('div');
        vpcDiv.className = 'command-suggestion';
        vpcDiv.textContent = 'VPC를 만들어줘';
        vpcDiv.onclick = function() {
            document.getElementById('messageInput').value = 'VPC를 만들어줘';
            sendMessage();
        };
        chatMessages.appendChild(vpcDiv);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
}
/**
 * 요소에 별표 효과를 적용하는 함수
 * @param {HTMLElement} element - 별표 효과를 적용할 요소
 */
function createSparkleEffect(element) {
    if (!element) return;
    
    // 요소의 위치와 크기 정보 가져오기
    const rect = element.getBoundingClientRect();
    
    // 별표 개수 설정
    const sparkleCount = 20;
    
    // 별표 생성 및 애니메이션 적용
    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            // 별표 요소 생성
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle sparkle-animation';
            
            // 랜덤 위치 설정 (요소 주변 넓은 영역)
            const offset = 100; // 요소 경계에서 더 넓게 퍼지도록 설정
            const x = rect.left + Math.random() * (rect.width + offset * 2) - offset;
            const y = rect.top + Math.random() * (rect.height + offset * 2) - offset;
            
            // 별표 크기 랜덤화
            const size = 10 + Math.random() * 15;
            sparkle.style.width = `${size}px`;
            sparkle.style.height = `${size}px`;
            
            // 별표 위치 설정
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            
            // 별표 색상 랜덤화 (노란색 계열)
            const hue = 50 + Math.random() * 10; // 노란색 계열의 색상
            sparkle.style.filter = `hue-rotate(${hue - 60}deg)`;
            
            // 문서에 별표 추가
            document.body.appendChild(sparkle);
            
            // 애니메이션 종료 후 별표 제거
            setTimeout(() => {
                if (sparkle.parentNode) {
                    document.body.removeChild(sparkle);
                }
            }, 1200); // 애니메이션 지속 시간과 동일하게 설정
        }, i * 60); // 별표마다 약간의 시간차를 두고 생성
    }
}
/**
 * 반딧불이 효과를 생성하는 함수
 * @param {HTMLElement} container - 반딧불이 효과를 적용할 컨테이너 요소
 */
function createFireflyEffect(container) {
    if (!container) return;
    
    // 컨테이너의 위치와 크기 정보 가져오기
    const rect = container.getBoundingClientRect();
    
    // 반딧불이 개수 설정
    const fireflyCount = 15;
    
    // 반딧불이 생성 및 애니메이션 적용
    for (let i = 0; i < fireflyCount; i++) {
        setTimeout(() => {
            // 반딧불이 요소 생성
            const firefly = document.createElement('div');
            firefly.className = 'firefly firefly-animation';
            
            // 랜덤 위치 설정 (컨테이너 내부)
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * rect.height;
            
            // 반딧불이 위치 설정
            firefly.style.left = `${x}px`;
            firefly.style.top = `${y}px`;
            
            // 랜덤 방향 설정
            const direction = Math.random() * 360;
            const distance = 50 + Math.random() * 100;
            const duration = 1 + Math.random() * 1.5;
            
            firefly.style.setProperty('--direction', `${direction}deg`);
            firefly.style.setProperty('--distance', `${distance}px`);
            firefly.style.setProperty('--duration', `${duration}s`);
            
            // 랜덤 크기 설정
            const size = 3 + Math.random() * 4;
            firefly.style.width = `${size}px`;
            firefly.style.height = `${size}px`;
            
            // 랜덤 애니메이션 지연 설정
            firefly.style.animationDelay = `${Math.random() * 0.5}s`;
            firefly.style.animationDuration = `${duration}s`;
            
            // 랜덤 경로 설정
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 100;
            firefly.style.setProperty('--move-x', `${randomX}px`);
            firefly.style.setProperty('--move-y', `${randomY}px`);
            
            // 문서에 반딧불이 추가
            document.body.appendChild(firefly);
            
            // 애니메이션 종료 후 반딧불이 제거
            setTimeout(() => {
                if (firefly.parentNode) {
                    document.body.removeChild(firefly);
                }
            }, duration * 1000); // 애니메이션 지속 시간만큼 대기
        }, i * 100); // 반딧불이마다 약간의 시간차를 두고 생성
    }
}
/**
 * 민트색 반딧불이 효과를 생성하는 함수
 * @param {HTMLElement} container - 반딧불이 효과를 적용할 컨테이너 요소
 */
function createMintFireflyEffect(container) {
    if (!container) return;
    
    // 컨테이너의 위치와 크기 정보 가져오기
    const rect = container.getBoundingClientRect();
    
    // 반딧불이 개수 설정
    const fireflyCount = 15;
    
    // 반딧불이 생성 및 애니메이션 적용
    for (let i = 0; i < fireflyCount; i++) {
        setTimeout(() => {
            // 민트색 반딧불이 요소 생성
            const firefly = document.createElement('div');
            firefly.className = 'mint-firefly mint-firefly-animation';
            
            // 랜덤 위치 설정 (컨테이너 내부)
            const x = rect.left + Math.random() * rect.width;
            const y = rect.top + Math.random() * rect.height;
            
            // 반딧불이 위치 설정
            firefly.style.left = `${x}px`;
            firefly.style.top = `${y}px`;
            
            // 랜덤 방향 설정
            const direction = Math.random() * 360;
            const distance = 50 + Math.random() * 100;
            const duration = 1 + Math.random() * 1.5;
            
            firefly.style.setProperty('--direction', `${direction}deg`);
            firefly.style.setProperty('--distance', `${distance}px`);
            firefly.style.setProperty('--duration', `${duration}s`);
            
            // 랜덤 크기 설정
            const size = 3 + Math.random() * 4;
            firefly.style.width = `${size}px`;
            firefly.style.height = `${size}px`;
            
            // 랜덤 애니메이션 지연 설정
            firefly.style.animationDelay = `${Math.random() * 0.5}s`;
            firefly.style.animationDuration = `${duration}s`;
            
            // 랜덤 경로 설정
            const randomX = (Math.random() - 0.5) * 200;
            const randomY = (Math.random() - 0.5) * 100;
            firefly.style.setProperty('--move-x', `${randomX}px`);
            firefly.style.setProperty('--move-y', `${randomY}px`);
            
            // 문서에 반딧불이 추가
            document.body.appendChild(firefly);
            
            // 애니메이션 종료 후 반딧불이 제거
            setTimeout(() => {
                if (firefly.parentNode) {
                    document.body.removeChild(firefly);
                }
            }, duration * 1000); // 애니메이션 지속 시간만큼 대기
        }, i * 100); // 반딧불이마다 약간의 시간차를 두고 생성
    }
}

/**
 * AWS 서비스별 관련 유튜브 URL
 */
const youtubeUrls = {
    'vpc': 'https://youtu.be/LCqlNjprz7w?t=270',
    'subnet': 'https://youtu.be/LCqlNjprz7w?t=491',
    'igw': 'https://youtu.be/LCqlNjprz7w?t=446',
    'nat': '',
    'alb': 'https://youtu.be/Mg6lLromiQM?t=1358',
    'asg': 'https://youtu.be/Mg6lLromiQM?t=1437',
    'ec2': 'https://youtu.be/Mg6lLromiQM?t=113',
    'db': 'https://www.youtube.com/watch?v=KwEWpDV2r2c',
    's3': 'https://youtu.be/erhyRR6mVNo?t=906',
    'traffic': 'https://youtu.be/Mg6lLromiQM?t=1437'
};
/**
 * 천둥번개 효과를 생성하는 함수
 */
function createThunderEffect() {
    // 번개 이미지 URL 배열 (노란색)
    const thunderImages = [
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiA2NCI+PHBhdGggZmlsbD0iI2ZmZmYwMCIgZD0iTTE4LDAgTDAsNDAgTDEyLDQwIEw4LDY0IEwzMiwyNCBMMjAsMjQgTDI0LDAgTDE4LDAiLz48L3N2Zz4=',
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiA2NCI+PHBhdGggZmlsbD0iI2ZmZmYwMCIgZD0iTTE2LDAgTDQsNDAgTDE2LDQwIEwxMCw2NCBMMzAsMjQgTDE4LDI0IEwyNCwwIEwxNiwwIi8+PC9zdmc+'
    ];
    
    // 아키텍처 영역 가져오기
    const architecture = document.querySelector('.architecture');
    if (!architecture) return;
    
    const rect = architecture.getBoundingClientRect();
    
    // 번개 개수
    const thunderCount = 3;
    
    // 번개 생성
    for (let i = 0; i < thunderCount; i++) {
        setTimeout(() => {
            // 번개 요소 생성
            const thunder = document.createElement('img');
            thunder.className = 'thunder-bolt thunder-animation';
            
            // 랜덤 이미지 선택
            const randomImageIndex = Math.floor(Math.random() * thunderImages.length);
            thunder.src = thunderImages[randomImageIndex];
            
            // 랜덤 위치 설정
            const x = rect.left + Math.random() * rect.width * 0.8;
            const y = rect.top + Math.random() * rect.height * 0.5;
            
            // 랜덤 크기 설정
            const scale = 1 + Math.random() * 1.5;
            thunder.style.transform = `scale(${scale})`;
            
            // 번개 위치 설정
            thunder.style.left = `${x}px`;
            thunder.style.top = `${y}px`;
            
            // 문서에 번개 추가
            document.body.appendChild(thunder);
            
            // 번개 효과음 재생
            playThunderSound();
            
            // 애니메이션 종료 후 번개 제거
            setTimeout(() => {
                if (thunder.parentNode) {
                    document.body.removeChild(thunder);
                }
            }, 1500);
        }, i * 500);
    }
    
    // 번개 효과와 함께 화면 번쩍임 효과 추가
    showLightningAnimation();
}

/**
 * 천둥 효과음을 재생하는 함수
 */
function playThunderSound() {
    // 오디오 요소 생성
    const audio = new Audio();
    audio.volume = 0.3; // 볼륨 설정
    
    // 천둥 효과음 URL 설정 (base64로 인코딩된 짧은 효과음을 사용할 수도 있음)
    audio.src = 'data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA/+M4wAAAAAAAAAAAAEluZm8AAAAPAAAAAwAAAbAAkJCQkJCQkJCQkJCQkJCQwMDAwMDAwMDAwMDAwMDAwMD//////////////////wAAAABMYXZjNTguMTM0AAAAAAAAAAAAAAAAJAYHf/7kGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAACsADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3/////////////////////////////////AAAAAExhdmY1OC43Ni4xMDAAAAAAAAAAAAAAACQQBH/+5BkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYaW5nAAAADwAAAAMAAAKwAJCQkJCQkJCQkJCQkJCQkMDAwMDAwMDAwMDAwMDAwMDA//////////////////8AAAAATGFtZTMuMTAwAQAAAAAAAAAAAAAA/+MYxAAAAANIAAAAAExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDsAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
    
    // 효과음 재생
    audio.play().catch(e => {
        // 브라우저에서 자동 재생을 차단할 수 있으므로 오류 무시
        console.log('Thunder sound could not be played:', e);
    });
}