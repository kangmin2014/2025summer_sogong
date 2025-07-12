import React from "react";
import { Button } from "../../../../components/ui/button";
import "./MyPageEditSection.css";

// props로 저장 함수 받는 구조
export const MyPageEditSection = ({ onSave }) => {
  const handleSaveClick = () => {
    if (onSave && typeof onSave === "function") {
      onSave(); // 부모 컴포넌트에서 전달한 저장 함수 실행
    } else {
      console.warn("저장 함수(onSave)가 정의되지 않았습니다.");
    }
  };

  return (
    <header className="mypageeditsect-header">
      <div className="mypageedit-title-wrapper">
        <h1 className="mypageedit-title">마이페이지</h1>
      </div>

      <Button
        variant="ghost"
        className="mypageedit-save-btn"
        onClick={handleSaveClick}
      >
        <img
          className="mypage-edit-icon"
          alt="Save icon"
          src="https://i.postimg.cc/TYSFJxQ7/Vector.png"
        />
        <span className="mypage-edit-text">저장하기</span>
      </Button>
    </header>
  );
};
