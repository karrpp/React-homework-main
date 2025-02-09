import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/Cart.module.css"; // 전체 스타일 적용

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
