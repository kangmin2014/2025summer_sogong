import React, { useRef, useState } from "react";
import "./UserProfileEditSection.css";

export const UserProfileEditSection = () => {
  const [profileImage, setProfileImage] = useState("https://c.animaapp.com/OhEHVw08/img/picture@2x.png");
  const [nickname, setNickname] = useState("닉네임");
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);

  const fileInputRef = useRef(null);

  const userProfile = {
    username: "아이디",
    participationRate: "96%",
    trustRating: "4.7",
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleNicknameChange = (e) => {
    const value = e.target.value;

    // 한글 10자 또는 영문/숫자 13자 제한
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
              src={profileImage}
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
              <span className="user-id-text">{userProfile.username}</span>
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
            <span className="stat-value">{userProfile.participationRate}</span>
          </div>

          <div className="stat-box">
            <img
              className="stat-icon"
              alt="Star"
              src="https://c.animaapp.com/OhEHVw08/img/star.svg"
            />
            <span className="stat-label">신뢰도 평가</span>
            <span className="stat-value">{userProfile.trustRating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
