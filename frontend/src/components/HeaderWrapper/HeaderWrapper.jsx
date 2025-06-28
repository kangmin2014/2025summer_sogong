// HeaderWrapper.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderWrapper.css";

export const HeaderWrapper = ({ className }) => {
  return (
    <div className={`header-wrapper ${className}`}>
      <div className="header-top">
        <div className="logo-section">
          <p className="logo-text">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <span className="logo-green">TEAM</span>
                <span className="logo-yellow">O</span>
              </Link>
          </p>
        </div>
        <img
          className="profile-button"
          alt="Button"
          src="https://c.animaapp.com/vPMKbFT7/img/button-1.svg"
        />
      </div>

      <div className="header-menu">
        <div className="nav-links">
          <div className="nav-item">홈</div>
          <div className="nav-item">대외활동</div>
          <div className="nav-item">공모전</div>
          <div className="nav-item">스터디</div>
          <div className="nav-item">게시판</div>
        </div>

        <div className="search-bar">
          <div className="search-placeholder">검색어를 입력해주세요...</div>
          <img
            className="search-icon"
            alt="Search button"
            src="https://c.animaapp.com/vPMKbFT7/img/search-button-1.svg"
          />
        </div>
      </div>
    </div>
  );
};
