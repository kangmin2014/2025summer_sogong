// HeaderWrapper.jsx
import React from "react";
import { Link } from "react-router-dom";
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
        <img
          className="profile-button"
          alt="Button"
          src="https://c.animaapp.com/vPMKbFT7/img/button-1.svg"
        />
      </div>

      <div className="header-menu">
        <div className="nav-links">

          <button
            className="nav-item"
            onClick={() => navigate("/")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            홈
          </button>
          <button
            className="nav-item"
            onClick={() => navigate("/")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            대외활동
          </button>
          <button
            className="nav-item"
            onClick={() => navigate("/")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            공모전
          </button>
          <button
            className="nav-item"
            onClick={() => navigate("/")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            스터디
          </button>
          <button
            className="nav-item"
            onClick={() => navigate("/")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            게시판
          </button>
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
