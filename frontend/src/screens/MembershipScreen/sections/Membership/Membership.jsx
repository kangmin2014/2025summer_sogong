// Membership.jsx
import React, { useState } from "react";
import "./Membership.css";
import { useNavigate } from "react-router-dom";


export const Membership = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    nickname: "",
  });
const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    const { username, password, passwordConfirm, nickname } = form;

    // 빈 값 체크
    if (!username || !password || !passwordConfirm || !nickname) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    // 비밀번호 확인 일치 체크
    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }


    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, nickname }), // 닉네임 포함
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ 회원가입 완료!");
        navigate("/login");
        setForm({ username: "", password: "", passwordConfirm: "", nickname: "" });
      
      } else {
        alert("❌ 회원가입 실패: " + data.message);
      }
    } catch (error) {
      alert("서버와 연결할 수 없습니다.");
      console.error(error);
    }
  };

  const labels = ["아이디", "비밀번호", "비밀번호 확인", "닉네임"];
  const names = ["username", "password", "passwordConfirm", "nickname"];
  const types = ["text", "password", "password", "text"];

  return (
    <div className="membership-container">
      <div className="membership-form">
        {labels.map((label, idx) => (
          <div className="membership-field" key={idx}>
            <div className="membership-label">{label}</div>
            <input
              className="membership-input"
              type={types[idx]}
              name={names[idx]}
              value={form[names[idx]]}
              onChange={handleChange}
              placeholder={""}
              autoComplete="off"
            />
          </div>
        ))}
      </div>

      <div className="membership-button-wrapper">
        <button className="membership-button" onClick={handleRegister}>
          회원가입
        </button>
      </div>
    </div>
  );
};
