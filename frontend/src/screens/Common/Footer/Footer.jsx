// Footer.jsx
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-title">회사이름</div>

      <div className="footer-info">
        <div className="footer-text">서울특별시 동작구 사당로 50</div>
        <div className="footer-divider">|</div>
        <div className="footer-text">사업자등록번호. 108-82-00391</div>
        <div className="footer-divider">|</div>
        <div className="footer-text">TEAMO 문의하기</div>
      </div>

      <div className="footer-policy">
        <div className="footer-text">이용약관</div>
        <div className="footer-divider">|</div>
        <div className="footer-text">개인정보처리방침</div>
        <div className="footer-divider">|</div>
        <div className="footer-text">커뮤니티이용규칙</div>
        <div className="footer-divider">|</div>
        <div className="footer-text">공지사항</div>
      </div>

      <img
        className="footer-line"
        alt="Line"
        src="https://c.animaapp.com/vPMKbFT7/img/line.svg"
      />

      <p className="footer-copyright">
        © 2025 By TEAMO Inc. All Rights Reserved.
      </p>
    </footer>
  );
};
