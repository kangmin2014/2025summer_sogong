// Membership.jsx
import React from "react";
import "./Membership.css";

export const Membership = () => {
  return (
    <div className="membership-container">
      <div className="membership-form">
        {["아이디", "비밀번호", "비밀번호 확인", "닉네임"].map((label, index) => (
          <div className="membership-field" key={index}>
            <div className="membership-label">{label}</div>
            <div className="membership-input" />
          </div>
        ))}
      </div>

      <div className="membership-button-wrapper">
        <button className="membership-button">회원가입</button>
      </div>
    </div>
  );
};
