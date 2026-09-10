# 블루라인 스튜디오 홈페이지 (bluelinestudio.kr)

정적 홈페이지 소스. main 브랜치에 push되면 GitHub Actions가 후이즈 웹호스팅(SFTP)에 자동 배포합니다.

- index.html : 홈페이지 본체
- data/site.js : 사이트 공통 문구(연락처·푸터 등)
- assets/works/ : 작품 폴더 (표시 순서는 assets/works/folders.js)
- .github/workflows/deploy.yml : 자동 배포 설정

배포에 필요한 GitHub Secret: FTP_PASSWORD (후이즈 FTP 비밀번호)
