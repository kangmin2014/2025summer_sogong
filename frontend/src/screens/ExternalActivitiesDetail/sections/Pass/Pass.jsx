import React, { useState } from "react";
import { PassedPersonalBox } from "./sections/PassedPersonalBox";
import { IntroductionBox } from "./sections/IntroductionBox";
import { MoreButtonBox } from "./sections/MoreButtonBox";
import "./Pass.css";
import profileDefault from "./img/profile.png";
import posterImage from "./img/picture.png";

export const Pass = ({ cases = [], setSelectedTab, setSelectedPassComment }) => {
  const [visibleUsersCount, setVisibleUsersCount] = useState(8);
  const [visibleIntroCount, setVisibleIntroCount] = useState(4);

  const handleLoadMoreUsers = () => setVisibleUsersCount((prev) => prev + 8);
  const handleLoadMoreIntros = () => setVisibleIntroCount((prev) => prev + 4);

  const visibleUsers = cases.slice(0, visibleUsersCount);
  const visibleIntroductions = cases.slice(0, visibleIntroCount); // 합격 후기도 success_cases로 대체

  const handleIntroMoreClick = (intro) => {
    setSelectedPassComment(intro);
    setSelectedTab("PassComment");
  };

  return (
    <div className="external-activities-pass">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          {/* ✅ 합격자 스펙 */}
          <div className="passed-person-box">
            <div className="review-title-box">
              <div className="pass-text-3">합격자 스펙</div>
            </div>
            <div className="overlap">
              {visibleUsers.map((user, index) => (
                <PassedPersonalBox
                  key={index}
                  nickname={user.nickname}
                  detail={`${user.program} 합격`}
                  participation={(user.user_participation_rate * 100).toFixed(0) + "%"}
                  trust={user.trust_score.toFixed(1)}
                  picture={user.profile_img?.trim() }
                />
              ))}
            </div>
            {visibleUsersCount < cases.length && (
              <MoreButtonBox onClick={handleLoadMoreUsers} />
            )}
          </div>

          {/* ✅ 합격 후기 모음 */}
          <div className="introduction-person-box">
            <div className="introduction-title">
              <div className="pass-text-3">합격 후기 모음</div>
            </div>
            <div className="introduction-list">
              {visibleIntroductions.map((intro, index) => (
                <IntroductionBox
                  key={index}
                  id={index}
                  title={`[${intro.program}]`}
                  content={intro.content}
                  date={intro.date}
                  views={intro.views}
                  scraps={intro.scraps}
                  author={intro.nickname}
                  profile={profileDefault}
                  image={posterImage}
                  onMoreClick={() => handleIntroMoreClick(intro)}
                />
              ))}
            </div>
            {visibleIntroCount < cases.length && (
              <MoreButtonBox onClick={handleLoadMoreIntros} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
