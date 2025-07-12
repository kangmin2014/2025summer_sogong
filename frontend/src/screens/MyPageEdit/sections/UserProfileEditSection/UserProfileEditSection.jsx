import React, { useRef, useState } from "react";
import "./UserProfileEditSection.css";

export const UserProfileEditSection = ({
  username,
  nickname,
  setNickname,
  profile_img,
  setProfileImg,
  participation_rate,
  setParticipationRate,
  trust_score,
  setTrustScore,
  onProfileImgChange, // ✅ 상위에서 전달받은 콜백
}) => {
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profile_img", file);

    try {
      const response = await fetch("http://localhost:5000/api/upload-profile", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success && data.url) {
        setProfileImg(data.url); // 영구 URL 저장
        if (onProfileImgChange) {
          onProfileImgChange(data.url); // ✅ DB 저장용 URL 전달
        }
      } else {
        alert("이미지 업로드에 실패했습니다.");
      }
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
      alert("이미지 업로드 중 오류가 발생했습니다.");
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;
    const koreanLength = value.match(/[ㄱ-ㅎ|가-힣]/g)?.length || 0;
    const englishLength = value.length;

    if (koreanLength > 7 || englishLength > 12) return;

    setNickname(value);
    setNicknameError(false);
  };

  const handleNicknameBlur = () => {
    if (!nickname.trim()) {
      setNicknameError(true);
      alert("닉네임을 입력해주세요");
      return;
    }
    setIsEditingNickname(false);
  };

  const handleNicknameKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNicknameBlur();
    }
  };

  return (
    <div className="user-profile-card">
      <div className="user-profile-content">
        <div className="user-profile-top">
          <div className="user-avatar" onClick={handleImageClick}>
            <img
              src={profile_img}
              alt="User profile"
              className="user-avatar-img"
            />
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleImageChange}
            />
          </div>

          <div className="user-info-box">
            {isEditingNickname ? (
              <input
                type="text"
                value={nickname}
                placeholder="닉네임을 입력해주세요"
                onChange={handleNicknameChange}
                onBlur={handleNicknameBlur}
                onKeyDown={handleNicknameKeyDown}
                className={`nickname-input ${nicknameError ? "error" : ""}`}
                autoFocus
              />
            ) : (
              <div className="nickname-display" onClick={() => setIsEditingNickname(true)}>
                <h2 className="user-nickname">
                  {nickname || "닉네임을 입력해주세요"}
                </h2>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/84/84380.png"
                  alt="Edit"
                  className="edit-icon"
                />
              </div>
            )}
            <div className="user-id-box">
              <span className="user-id-at">@</span>
              <span className="user-id-text">
                {username && username.trim() !== "" ? username : "아이디없음"}
              </span>
            </div>
          </div>
        </div>

        <div className="user-stats">
          <div className="stat-box">
            <img
              className="stat-icon"
              alt="Fire icon"
              src="https://c.animaapp.com/OhEHVw08/img/fire-icon.svg"
            />
            <span className="stat-label">참여율</span>
            <span className="stat-value">{participation_rate}%</span>
          </div>

          <div className="stat-box">
            <img
              className="stat-icon"
              alt="Star"
              src="https://c.animaapp.com/OhEHVw08/img/star.svg"
            />
            <span className="stat-label">신뢰도 평가</span>
            <span className="stat-value">{trust_score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
