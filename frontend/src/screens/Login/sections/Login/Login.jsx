// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ 로그인 성공!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loginID",username);
        navigate("/")
        // 예: navigate("/dashboard"); 로 이동 가능
      } else {
        alert("❌ 로그인 실패: " + data.message);
      }
    } catch (err) {
      console.error("로그인 요청 실패:", err);
      alert("서버와 연결할 수 없습니다.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-field">
        <div className="login-label">아이디</div>
        <input
          className="login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="login-field">
        <div className="login-label">비밀번호</div>
        <input
          className="login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder=""
        />
        <div className="login-forgot">비밀번호를 잊어버리셨나요?</div>
      </div>

      <div className="login-button" onClick={handleLogin}>
        <div className="login-button-text">로그인</div>
      </div>

      <div className="login-signup">
        <div className="signup-prompt">아직 TEAMO가 아니신가요?</div>
        <div className="signup-link" onClick={() => navigate("/memreg")}>
          회원가입
        </div>
      </div>
    </div>
  );
};
