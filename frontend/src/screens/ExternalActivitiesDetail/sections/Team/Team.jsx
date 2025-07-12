import React, { useState } from "react";
import "./Team.css";

// ───────── D-day 표시 컴포넌트 ─────────
const ShortTermDday = ({ deadline }) => {
  if (!deadline)
    return (
      <div className="dday-box">
        <div className="team-text">-</div>
      </div>
    );

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 날짜 문자열 안전하게 파싱
  const [year, month, day] = deadline.split("-").map(Number);
  const endDate = new Date(year, month - 1, day);
  endDate.setHours(0, 0, 0, 0);

  const diffTime = endDate - today;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (isNaN(diffDays)) {
    return (
      <div className="dday-box">
        <div className="team-text">-</div>
      </div>
    );
  }

  if (diffDays < 0) {
    return (
      <div className="dday-box dday-ended">
        <div className="team-text">마감됨</div>
      </div>
    );
  }

  if (diffDays === 0) {
    return (
      <div className="dday-box today">
        <div className="team-text">오늘마감</div>
      </div>
    );
  }

  const className = diffDays <= 7 ? "short-term" : "long-term";

  return (
    <div className={`dday-box ${className}`}>
      <div className="team-text">D-{diffDays}</div>
    </div>
  );
};

// ───────── 팀원 모집 카드 컴포넌트 ─────────
const RecruitmentBox = ({
  title,
  profile,
  nickname,
  deadline,
  views,
  current,
  total,
  
  thumbnail,
  onClick,
}) => {
  const imageSrc = thumbnail ;

  return (
    <div className="recruitment-box" onClick={onClick} style={{ cursor: "pointer" }}>
      <img className="picture" alt="Picture" src={imageSrc} />
      <div className="detail-box">
        <div className="title-nickname-box">
          <div className="title">{title}</div>
          <div className="externalteam-nickname">{nickname}</div>
        </div>
        <div className="information-box">
          <ShortTermDday deadline={deadline} />
          <div className="view-box">
            <div className="recruitmentbox-text-wrapper">조회</div>
            <div className="recruitmentbox-text-wrapper">{views}</div>
          </div>
          <div className="situation-box">
            <div className="div">모집현황</div>
            <div className="div">{current}</div>
            <div className="div">/</div>
            <div className="div">{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ───────── 더보기 버튼 컴포넌트 ─────────
const MoreButtonBox = ({ onClick }) => (
  <div className="team-more-button-box">
    <button className="team-more-button" onClick={onClick}>
      <span className="text">더보기</span>
    </button>
  </div>
);

// ───────── 메인 Team 컴포넌트 ─────────
export const Team = ({
  recruitmentData = [],
  setSelectedTab,
  setSelectedRecruitment,
}) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleMoreClick = () => setVisibleCount((prev) => prev + 8);

  const handleRecruitmentClick = (item) => {
    setSelectedRecruitment(item);
    setSelectedTab("TeamRecruitment");
  };

  // 마감 상태 및 마감일 기준 정렬
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sortedData = [...recruitmentData].sort((a, b) => {
    const dateA = new Date(a.deadline);
    const dateB = new Date(b.deadline);
    dateA.setHours(0, 0, 0, 0);
    dateB.setHours(0, 0, 0, 0);

    const isPastA = dateA < today;
    const isPastB = dateB < today;

    if (isPastA && !isPastB) return 1;
    if (!isPastA && isPastB) return -1;

    return dateA - dateB;
  });

  const visibleData = sortedData.slice(0, visibleCount);

  return (
    <div className="external-activities-team">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="out-team">
            <div className="div-wrapper">
              <div className="contest-text-3">팀원 모집글 모아보기</div>
            </div>
            <div className="review-count">
              <div className="text-wrapper-2">전체</div>
              <div className="text-wrapper-2">{recruitmentData.length}개</div>
            </div>
          </div>

          <div className="contest-teamframe">
            {visibleData.map((item, idx) => (
              <RecruitmentBox
                key={idx}
                {...item}
                thumbnail={item.thumbnail} // ✅ 각 아이템의 썸네일 전달
                onClick={() => handleRecruitmentClick(item)}
              />
            ))}

            {visibleCount < recruitmentData.length && (
              <MoreButtonBox onClick={handleMoreClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
