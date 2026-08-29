# 서울 매수 레이더

서울 25개 구의 매수 후보지를 가격, 전세가율, 공급 리스크, 교통, 생활 인프라 기준으로 비교하는 개인용 정적 웹앱입니다.

## 실행

별도 서버 없이 `index.html`을 열어도 동작합니다. 로컬 서버로 확인하려면 아래 중 하나를 사용하세요.

```bash
python3 -m http.server 4173
```

그다음 `http://localhost:4173/seoul-buy-radar/`로 접속합니다.

## 배포

### GitHub Pages

루트의 `.github/workflows/deploy-seoul-buy-radar.yml`가 `main` 브랜치 push 때 `seoul-buy-radar/` 폴더를 GitHub Pages artifact로 배포합니다.

저장소 Settings > Pages > Build and deployment에서 Source를 GitHub Actions로 설정하세요.

### Vercel 또는 Netlify

프로젝트 루트를 `seoul-buy-radar`로 지정하면 정적 사이트로 바로 배포할 수 있습니다.

- Build command: 비워둠
- Output directory: `.`

## 데이터 갱신

`data/seoul-districts.json` 파일의 값을 최신 데이터로 바꾸면 점수와 화면이 자동으로 갱신됩니다.

주요 필드:

- `medianPrice`: 중위 매매가, 단위는 만 원
- `jeonseRatio`: 전세가율, 단위는 퍼센트
- `newSupplyRisk`: 신규 공급 리스크, 1 낮음 - 5 높음
- `transitScore`: 교통 점수, 0 - 100
- `livabilityScore`: 생활 인프라 점수, 0 - 100
- `reasons`: 상세 분석 문장

## 주의

현재 데이터는 샘플이며 투자 조언이 아닙니다. 실사용 전 최신 실거래가, 전세가율, 입주 물량, 금리, 대출 규제, 정비사업 현황을 별도로 확인하세요.
