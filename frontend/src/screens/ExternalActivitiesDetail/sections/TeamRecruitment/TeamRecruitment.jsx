import React from "react";
import "./TeamRecruitment.css";
import linkIcon from "./link.svg";

// ───────── ShortTermDday ─────────
const ShortTermDday = ({ deadline }) => {
  const today = new Date();
  const endDate = new Date(deadline);
  const diffTime = endDate.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return (
      <div className="dday-box today">
        <div className="text">오늘마감</div>
      </div>
    );
  }

  const className = diffDays <= 7 ? "short-term" : "long-term";

  return (
    <div className={`dday-box ${className}`}>
      <div className="text">D-{diffDays}</div>
    </div>
  );
};

// ───────── HeadInfoBox ─────────
const HeadInfoBox = ({ profile, title, nickname, views, deadline, current, total, picture }) => {
  return (
    <div className="teamrecruit-head-info-box">
      <div className="title">
        <div className="teamrecruitment-text-wrapper">{title}</div>
      </div>

      <div className="information-box">
        <div className="profile">
          {profile && <img className="profile" alt="Profile" src={profile} />}
          <div className="team-ID">{nickname}</div>
        </div>

        <div className="info-section">
          <ShortTermDday deadline={deadline} />
          <div className="view-box">
            <div className="teamrecruitment-text-wrapper-2">조회</div>
            <div className="teamrecruitment-text-wrapper-2">{views}</div>
          </div>

          <div className="teamrecruitment-navbar">
            <div className="recruitment-inline">
              <div className="teamrecruitment-text-wrapper-3">모집현황</div>
              <div className="teamrecruitment-text-wrapper-3">{current}</div>
              <div className="teamrecruitment-text-wrapper-3">/</div>
              <div className="teamrecruitment-text-wrapper-3">{total}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ───────── TitleBox ─────────
const TitleBox = ({ subtitle }) => {
  return (
    <div className="title-box">
      <div className="title">{subtitle}</div>
      <div className="link-box">
        <img className="icon" alt="link" src={linkIcon} />
        <div className="link-text">바로가기</div>
      </div>
    </div>
  );
};

// ───────── DetailBox ─────────
const DetailBox = ({ content }) => {
  if (!content) return null;

  return (
    <div className="detail-box">
      <p className="teamrecruitment-text-wrapper">{content}</p>
    </div>
  );
};

// ───────── ProfileTitleBox ─────────
const ProfileTitleBox = ({ count }) => (
  <div className="profile-title-box">
    <div className="title">팀원 프로필 보기</div>
    <div className="volunteer-info-inline">
      <span className="teamrecruitment-text-wrapper">(현재 지원자</span>
      <span className="teamrecruitment-text-wrapper">{count}</span>
      <span className="teamrecruitment-text-wrapper">명)</span>
    </div>
  </div>
);

// ───────── Leader Profile ─────────
const Leader = ({ profile, nickname }) => (
  <div className="leader">
    {profile && <img className="picture" alt="Leader Profile" src={profile} />}
    <div className="nickname">{nickname}</div>
    <div className="position">모집자</div>
    <div className="visit-button">
      <div className="text">프로필 방문</div>
    </div>
  </div>
);

// ───────── Team Member Profile ─────────
const Member = ({ profile, nickname }) => (
  <div className="team">
    {profile && <img className="picture" alt="Team Member Profile" src={profile} />}
    <div className="nickname">{nickname}</div>
    <div className="position">팀원</div>
    <div className="visit-button">
      <div className="text">프로필 방문</div>
    </div>
  </div>
);

// ───────── ProfileList ─────────
const ProfileList = ({ leader, members }) => (
  <div className="profile-list">
    {leader && <Leader profile={leader.profile} nickname={leader.nickname} />}
    {members.map((m, i) => (
      <Member key={i} profile={m.profile} nickname={m.nickname} />
    ))}
  </div>
);

// ───────── 최종 통합 TeamRecruitment ─────────
export const TeamRecruitment = ({
  title,
  nickname,
  profile_img, // profile 대신 profile_img로 받음
  subtitle,
  views,
  deadline,
  current,
  total,
  picture,
  content, // 상세 소개글 content prop 추가
  leader,
  members = [],
}) => {
  return (
    <div className="team-recruitment">
      <div className="team-recruitment-overlap-group">
        <HeadInfoBox
          profile={profile_img} // profile_img를 profile로 사용
          title={title}
          nickname={nickname}
          views={views}
          deadline={deadline}
          current={current}
          total={total}
          picture={picture}
        />
        <TitleBox subtitle={subtitle} />
        <DetailBox content={content} />
        <ProfileTitleBox count={members.length} />
        <ProfileList
          leader={{
            ...leader,
            profile: leader?.profile_img ?? profile_img, // leader 프로필도 profile_img 사용
          }}
          members={members.map((m) => ({
            ...m,
            profile: m.profile_img ?? profile_img, // 멤버 프로필도 profile_img 사용
          }))}
        />
      </div>
    </div>
  );
};
