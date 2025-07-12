import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./HeaderWrapper.css";

export const HeaderWrapper = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab(""); // 홈 예외
    } else if (location.pathname.startsWith("/ExternalActivities")) {
      setActiveTab("/ExternalActivities");
    } else if (location.pathname.startsWith("/Contest")) {
      setActiveTab("/Contest");
    } else if (location.pathname.startsWith("/Study")) {
      setActiveTab("/Study");
    } else if (location.pathname.startsWith("/Board")) {
      setActiveTab("/Board");
    } else {
      setActiveTab(""); // 기본값
    }
  }, [location.pathname]);


  const handleClick = (path) => {
    navigate(path);
    if (path === "/") {
      setActiveTab(""); // 홈은 예외 처리
    } else {
      setActiveTab(path);
    }
  };

  return (
    <div className={`header-wrapper ${className}`}>
      <div className="header-top">
        <div className="logo-section">
          <p className="logo-text">
            <button
              onClick={() => handleClick("/")}
              style={{ all: "unset", cursor: "pointer" }}
            >
              <span className="logo-green">TEAM</span>
              <span className="logo-yellow">O</span>
            </button>
          </p>
        </div>

        <div className="profile-container">
          <button
            className="mypage-overlay-button"
            onClick={() => {
              const isLoggedIn = localStorage.getItem("isLoggedIn");
              navigate(isLoggedIn === "true" ? "/MyPage" : "/Login");
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
          <button
            className={`nav-item ${activeTab === "" ? "active" : ""}`}
            onClick={() => handleClick("/")}
          >
            홈
          </button>
          <button
            className={`nav-item ${activeTab === "/ExternalActivities" ? "active" : ""}`}
            onClick={() => handleClick("/ExternalActivities")}
          >
            대외활동
          </button>
          <button
            className={`nav-item ${activeTab === "/Contest" ? "active" : ""}`}
            onClick={() => handleClick("/Contest")}
          >
            공모전
          </button>
          <button
            className={`nav-item ${activeTab === "/Study" ? "active" : ""}`}
            onClick={() => handleClick("/Study")}
          >
            스터디
          </button>
          <button
            className={`nav-item ${activeTab === "/Board" ? "active" : ""}`}
            onClick={() => handleClick("/Board")}
          >
            게시판
          </button>
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
