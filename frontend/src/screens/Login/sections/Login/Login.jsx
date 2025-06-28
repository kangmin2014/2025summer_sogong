// Login.jsx
import React from "react";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="login-field">
        <div className="login-label">아이디</div>
        <div className="login-input" />
      </div>

      <div className="login-field">
        <div className="login-label">비밀번호</div>
        <div className="login-input" />
        <div className="login-forgot">비밀번호를 잊어버리셨나요?</div>
      </div>

      <div className="login-button">
        <div className="login-button-text">로그인</div>
      </div>

      <div className="login-signup">
        <div className="signup-prompt">아직 TEAMO가 아니신가요?</div>
        <div className="signup-link">회원가입</div>
      </div>
    </div>
  );
};
