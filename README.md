🛒 Shopping Cart Project

📂 프로젝트 파일 구조

/my-cart-app
 ├── src
 │   ├── components
 │   │   ├── ShoppingCart.tsx      // 🛒 장바구니 최상위 컴포넌트
 │   │   ├── CartProduct.tsx       // 🏷 개별 상품을 렌더링하는 컴포넌트
 │   │   ├── QuantityController.tsx// ➕➖ 수량 조절 버튼 컴포넌트
 │   │   ├── TotalPriceDisplay.tsx // 💰 총 가격 표시 컴포넌트
 │   ├── data
 │   │   ├── products.ts           // 📦 상품 데이터 (초기값)
 │   ├── styles
 │   │   ├── Cart.module.css       // 🎨 스타일 파일 (CSS 모듈)
 │   ├── App.tsx                   // 🌍 메인 앱 컴포넌트 (최상위)
 │   ├── main.tsx                   // 🚀 React 렌더링 진입점
 │   ├── index.html                 // 📄 기본 HTML 파일

📌 프로젝트 개요

이 프로젝트는 React와 Vite를 사용하여 구현한 장바구니(Shopping Cart) 기능입니다.
사용자는 상품 목록을 보고, 수량을 조절하며, 총 가격을 확인할 수 있습니다.

🚀 주요 기능

✅ 상품 리스트 렌더링: 기본적으로 상품 데이터를 불러와 화면에 표시.

✅ 수량 조절 기능: + 및 - 버튼을 클릭하여 수량을 변경 가능.

✅ 총 가격 계산: 장바구니에 담긴 상품의 총 가격을 자동으로 업데이트.

✅ 상태 관리 최적화: useState를 활용하여 상태를 효율적으로 업데이트.

🤔 구현하면서 고민한 점

1️⃣ 컴포넌트 분리

ShoppingCart.tsx → 장바구니 최상위 관리 컴포넌트

CartProduct.tsx → 개별 상품을 렌더링하는 컴포넌트

QuantityController.tsx → 수량을 조절하는 컴포넌트

TotalPriceDisplay.tsx → 총 가격을 표시하는 컴포넌트

2️⃣ 상태 관리 전략

ShoppingCart.tsx에서 useState를 사용하여 상품 목록 상태를 관리.

수량이 변경될 때마다 setState를 호출하여 리렌더링.

props를 통해 onUpdate 함수를 하위 컴포넌트로 전달하여 상태 변경을 부모 컴포넌트에서 처리하도록 설계.

3️⃣ 버튼 비활성화 조건

최소 수량(1)일 때 - 버튼을 비활성화.

최대 수량(설정된 max 값)일 때 + 버튼을 비활성화.

🛠️ 설치 및 실행 방법


# 3️⃣ 패키지 설치
npm install

# 4️⃣ 개발 서버 실행
npm run dev

🏗️ 개발 환경
프레임워크: React

번들러: Vite


📌 향후 개선 사항

🔹 로컬 스토리지 연동: 새로고침 후에도 장바구니 상태 유지하기

🔹 장바구니 상품 삭제 기능 추가

🔹 상품 검색 및 필터 기능 구현

📩 느낀점 

실제로 진행하면서 예상보다 어려운 점이 많았습니다. 특히 프로젝트 구조를 유지하면서 기능을 추가하는 것이 쉽지 않았습니다.

이번 프로젝트를 통해 React의 상태 관리 방식과 컴포넌트에 대해 더 고민해보게 되었고 복습을 조금 더 철저히 히고 수업에 따라가애겠다고 생각했습니다. 
