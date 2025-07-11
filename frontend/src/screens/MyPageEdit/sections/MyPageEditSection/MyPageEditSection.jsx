import React from "react";
import { Button } from "../../../../components/ui/button";
import { useNavigate } from "react-router-dom"; // ✅ 추가
import "./MyPageEditSection.css";

export const MyPageEditSection = ({ onSave }) => {
  const navigate = useNavigate(); // ✅ 네비게이션 객체 생성

  const handleSaveClick = () => {
    if (onSave && typeof onSave === "function") {
      onSave(); // 저장 실행
    } else {
      console.warn("저장 함수(onSave)가 정의되지 않았습니다.");
    }

    // ✅ 저장 후 마이페이지로 이동
    navigate("/MyPage");
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