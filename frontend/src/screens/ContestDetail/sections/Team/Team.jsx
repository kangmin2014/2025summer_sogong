import React, { useState } from "react";
import picture from "./img/picture.png";
import profile from "./img/profile.png";
import "./Team.css";

// ───────── D-day 표시 컴포넌트 ─────────
const ShortTermDday = ({ deadline }) => {
  const today = new Date();
  const endDate = new Date(deadline);
  const diffTime = endDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

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
  title, profile, nickname, deadline, views,
  current, total, picture, onClick
}) => {
  return (
    <div className="recruitment-box" onClick={onClick} style={{ cursor: "pointer" }}>
      <img className="picture" alt="Picture" src={picture} />
      <div className="detail-box">
        <div className="title-nickname-box">
          <div className="title">{title}</div>
          <div className="nickname">{nickname}</div>
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
export const Team = ({ setSelectedTab, setSelectedRecruitment }) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const recruitmentData = [
  {
    title: "대외활동 팀원 모집합니다!",
    nickname: "말하는 감자",
    profile: "path/to/profile1.jpg",
    subtitle: "대외활동 같이 하실 분?",
    deadline: "2025-07-16",
    views: 64,
    current: 2,
    total: 4,
    picture: "path/to/picture1.jpg",
    info: {
      field: "대외활동",
      recruitment: "4명",
      status: "2명 모집 완료",
      method: "온라인",
      want: "열정 있고 커뮤니케이션 잘하시는 분",
      period: "2025-07-01 ~ 2025-07-16",
    },
    leader: {
      name: "말하는 감자",
      nickname: "말하는 감자",
      image: "path/to/profile1.jpg",
      profile: "path/to/profile1.jpg",
      role: "기획자",
    },
    members: [
      {
        name: "홍길동",
        nickname: "홍길동",
        profile: "path/to/profile2.jpg",
        role: "디자이너",
      },
      {
        name: "김개발",
        nickname: "김개발",
        profile: "path/to/profile3.jpg",
        role: "개발자",
      },
    ],
  },

  {
    title: "디자인 프로젝트 팀원 구해요!",
    nickname: "디자인왕",
    profile: "path/to/profile4.jpg",
    subtitle: "실무형 디자인 스터디 함께해요",
    deadline: "2025-07-20",
    views: 120,
    current: 3,
    total: 5,
    picture: "path/to/picture2.jpg",
    info: {
      field: "디자인",
      recruitment: "5명",
      status: "3명 모집 완료",
      method: "오프라인 (서울)",
      want: "UX/UI에 관심 있는 분",
      period: "2025-07-01 ~ 2025-07-20",
    },
    leader: {
      name: "디자인왕",
      nickname: "디자인왕",
      profile: "path/to/profile4.jpg",
      role: "디자이너",
    },
    members: [
      {
        name: "이예술",
        nickname: "이예술",
        profile: "path/to/profile5.jpg",
        role: "디자이너",
      },
      {
        name: "박창의",
        nickname: "박창의",
        profile: "path/to/profile6.jpg",
        role: "기획자",
      },
      {
        name: "최퍼블",
        nickname: "최퍼블",
        profile: "path/to/profile7.jpg",
        role: "퍼블리셔",
      },
    ],
  },

  {
    title: "개발 프로젝트 같이하실 분!",
    nickname: "코딩너머",
    profile: "path/to/profile8.jpg",
    subtitle: "React & Node.js 협업 프로젝트",
    deadline: "2025-07-14",
    views: 95,
    current: 1,
    total: 3,
    picture: "path/to/picture3.jpg",
    info: {
      field: "개발",
      recruitment: "3명",
      status: "1명 모집 완료",
      method: "온라인",
      want: "풀스택 지향, 협업 경험자 우대",
      period: "2025-07-01 ~ 2025-07-14",
    },
    leader: {
      name: "코딩너머",
      nickname: "코딩너머",
      profile: "path/to/profile8.jpg",
      role: "개발자",
    },
    members: [
      {
        name: "안풀스",
        nickname: "안풀스",
        profile: "path/to/profile9.jpg",
        role: "프론트엔드",
      },
    ],
  },
  {
    title: "개발 프로젝트 같이하실 분!",
    nickname: "코딩너머",
    profile: "path/to/profile8.jpg",
    subtitle: "React & Node.js 협업 프로젝트",
    deadline: "2025-07-14",
    views: 95,
    current: 1,
    total: 3,
    picture: "path/to/picture3.jpg",
    info: {
      field: "개발",
      recruitment: "3명",
      status: "1명 모집 완료",
      method: "온라인",
      want: "풀스택 지향, 협업 경험자 우대",
      period: "2025-07-01 ~ 2025-07-14",
    },
    leader: {
      name: "코딩너머",
      nickname: "코딩너머",
      profile: "path/to/profile8.jpg",
      role: "개발자",
    },
    members: [
      {
        name: "안풀스",
        nickname: "안풀스",
        profile: "path/to/profile9.jpg",
        role: "프론트엔드",
      },
    ],
  },
  {
    title: "개발 프로젝트 같이하실 분!",
    nickname: "코딩너머",
    profile: "path/to/profile8.jpg",
    subtitle: "React & Node.js 협업 프로젝트",
    deadline: "2025-07-14",
    views: 95,
    current: 1,
    total: 3,
    picture: "path/to/picture3.jpg",
    info: {
      field: "개발",
      recruitment: "3명",
      status: "1명 모집 완료",
      method: "온라인",
      want: "풀스택 지향, 협업 경험자 우대",
      period: "2025-07-01 ~ 2025-07-14",
    },
    leader: {
      name: "코딩너머",
      nickname: "코딩너머",
      profile: "path/to/profile8.jpg",
      role: "개발자",
    },
    members: [
      {
        name: "안풀스",
        nickname: "안풀스",
        profile: "path/to/profile9.jpg",
        role: "프론트엔드",
      },
    ],
  },
  {
    title: "개발 프로젝트 같이하실 분!",
    nickname: "코딩너머",
    profile: "path/to/profile8.jpg",
    subtitle: "React & Node.js 협업 프로젝트",
    deadline: "2025-07-14",
    views: 95,
    current: 1,
    total: 3,
    picture: "path/to/picture3.jpg",
    info: {
      field: "개발",
      recruitment: "3명",
      status: "1명 모집 완료",
      method: "온라인",
      want: "풀스택 지향, 협업 경험자 우대",
      period: "2025-07-01 ~ 2025-07-14",
    },
    leader: {
      name: "코딩너머",
      nickname: "코딩너머",
      profile: "path/to/profile8.jpg",
      role: "개발자",
    },
    members: [
      {
        name: "안풀스",
        nickname: "안풀스",
        profile: "path/to/profile9.jpg",
        role: "프론트엔드",
      },
    ],
  },
  {
    title: "개발 프로젝트 같이하실 분!",
    nickname: "코딩너머",
    profile: "path/to/profile8.jpg",
    subtitle: "React & Node.js 협업 프로젝트",
    deadline: "2025-07-14",
    views: 95,
    current: 1,
    total: 3,
    picture: "path/to/picture3.jpg",
    info: {
      field: "개발",
      recruitment: "3명",
      status: "1명 모집 완료",
      method: "온라인",
      want: "풀스택 지향, 협업 경험자 우대",
      period: "2025-07-01 ~ 2025-07-14",
    },
    leader: {
      name: "코딩너머",
      nickname: "코딩너머",
      profile: "path/to/profile8.jpg",
      role: "개발자",
    },
    members: [
      {
        name: "안풀스",
        nickname: "안풀스",
        profile: "path/to/profile9.jpg",
        role: "프론트엔드",
      },
    ],
  },
  {
    title: "개발 프로젝트 같이하실 분!",
    nickname: "코딩너머",
    profile: "path/to/profile8.jpg",
    subtitle: "React & Node.js 협업 프로젝트",
    deadline: "2025-07-14",
    views: 95,
    current: 1,
    total: 3,
    picture: "path/to/picture3.jpg",
    info: {
      field: "개발",
      recruitment: "3명",
      status: "1명 모집 완료",
      method: "온라인",
      want: "풀스택 지향, 협업 경험자 우대",
      period: "2025-07-01 ~ 2025-07-14",
    },
    leader: {
      name: "코딩너머",
      nickname: "코딩너머",
      profile: "path/to/profile8.jpg",
      role: "개발자",
    },
    members: [
      {
        name: "안풀스",
        nickname: "안풀스",
        profile: "path/to/profile9.jpg",
        role: "프론트엔드",
      },
    ],
  },
  {
    title: "개발 프로젝트 같이하실 분!",
    nickname: "코딩너머",
    profile: "path/to/profile8.jpg",
    subtitle: "React & Node.js 협업 프로젝트",
    deadline: "2025-07-14",
    views: 95,
    current: 1,
    total: 3,
    picture: "path/to/picture3.jpg",
    info: {
      field: "개발",
      recruitment: "3명",
      status: "1명 모집 완료",
      method: "온라인",
      want: "풀스택 지향, 협업 경험자 우대",
      period: "2025-07-01 ~ 2025-07-14",
    },
    leader: {
      name: "코딩너머",
      nickname: "코딩너머",
      profile: "path/to/profile8.jpg",
      role: "개발자",
    },
    members: [
      {
        name: "안풀스",
        nickname: "안풀스",
        profile: "path/to/profile9.jpg",
        role: "프론트엔드",
      },
    ],
  },
];


  const handleMoreClick = () => setVisibleCount((prev) => prev + 8);
  const handleRecruitmentClick = (item) => {
    setSelectedRecruitment(item);
    setSelectedTab("TeamRecruitment");
  };

  // ✅ 마감 상태 및 마감일 기준 정렬
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
