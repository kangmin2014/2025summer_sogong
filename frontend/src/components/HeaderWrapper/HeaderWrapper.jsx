import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderWrapper.css";

export const HeaderWrapper = ({ className }) => {
  const navigate = useNavigate();

  return (
    <div className={`header-wrapper ${className}`}>
      <div className="header-top">
        <div className="logo-section">
          <p className="logo-text">
            <button
              onClick={() => navigate("/")}
              style={{ all: "unset", cursor: "pointer" }}
            >
              <span className="logo-green">TEAM</span>
              <span className="logo-yellow">O</span>
            </button>
          </p>
        </div>

        <div className="profile-container">
          {/* ✅ 겹쳐지는 24px 버튼 */}
          <button
            className="mypage-overlay-button"
            onClick={() => {
              const isLoggedIn = localStorage.getItem("isLoggedIn");
              if (isLoggedIn === "true") {
                navigate("/MyPage");
              } else {
                navigate("/Login");
              }
            }}
          />
          <img
            className="profile-button"
            alt="Profile"
            src="https://c.animaapp.com/vPMKbFT7/img/button-1.svg"
          />
        </div>
      </div>

      <div className="header-menu">
        <div className="nav-links">
          <button className="nav-item" onClick={() => navigate("/")}>홈</button>
          <button className="nav-item" onClick={() => navigate("/ExternalActivities")}>대외활동</button>
          <button className="nav-item" onClick={() => navigate("/")}>공모전</button>
          <button className="nav-item" onClick={() => navigate("/")}>스터디</button>
          <button className="nav-item" onClick={() => navigate("/")}>게시판</button>
        </div>

        <div className="search-bar">
          <div className="search-placeholder">검색어를 입력해주세요...</div>
          <img
            className="search-icon"
            alt="Search"
            src="https://c.animaapp.com/vPMKbFT7/img/search-button-1.svg"
          />
        </div>
      </div>
    </div>
  );
};
