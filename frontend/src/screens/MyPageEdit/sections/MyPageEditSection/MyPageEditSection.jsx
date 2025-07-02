import React from "react";
import { Button } from "../../../../components/ui/button";
import "./MyPageEditSection.css";

export const MyPageEditSection = () => {
  return (
    <header className="mypageeditsect-header">
      <div className="mypageedit-title-wrapper">
        <h1 className="mypageedit-title">마이페이지</h1>
      </div>

      <Button variant="ghost" className="mypageedit-save-btn" asChild>
        <a href="#save">
          <img
            className="mypage-edit-icon"
            alt="Save icon"
            src="https://i.postimg.cc/TYSFJxQ7/Vector.png"
          />
          <span className="mypage-edit-text">저장하기</span>
        </a>
      </Button>
    </header>
  );
};
