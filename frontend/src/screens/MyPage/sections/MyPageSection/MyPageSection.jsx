import React from "react";
import { Button } from "../../../../components/ui/button";
import "./MyPageSection.css";

export const MyPageSection = () => {
  return (
    <header className="mypagesect-header">
      <div className="mypage-title-wrapper">
        <h1 className="mypage-title">마이페이지</h1>
      </div>

      <Button variant="ghost" className="mypage-edit-btn" asChild>
        <a href="#edit">
          <span className="mypage-edit-text">수정하기</span>
          <img
            className="mypage-edit-arrow"
            alt="Edit arrow"
            src="https://c.animaapp.com/OhEHVw08/img/arrow.svg"
          />
        </a>
      </Button>
    </header>
  );
};
