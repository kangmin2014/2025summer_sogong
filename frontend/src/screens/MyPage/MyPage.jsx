// MyPage.jsx

import React, { useEffect, useState } from "react"; // 수정: useEffect, useState 추가
import { ActivityRecordsSection } from "./sections/ActivityRecordsSection";
import { ActivitySummarySection } from "./sections/ActivitySummarySection";
import { AvailableToolsSection } from "./sections/AvailableToolsSection";
import { InterestAreaSection } from "./sections/InterestAreaSection";
import { MyPageSection } from "./sections/MyPageSection/MyPageSection";
import { ProjectAchievementsSection } from "./sections/ProjectAchievementsSection";
import { SkillSetSection } from "./sections/SkillSetSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

import "./MyPage.css";

export const MyPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserInfo() {
      const loginID = localStorage.getItem("loginID");
      if (!loginID) {
        console.error("로그인 정보가 없습니다.");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/get_user_info", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: loginID }),
        });
        

        if (!response.ok) {
          console.error("User info fetch 실패");
          return;
        }

        const data = await response.json();

        if (data.success) {
          setUserData(data.user);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("API 호출 실패", err);
      }
    }

    fetchUserInfo();
  }, []);

  if (!userData) {
    return <div>로딩중...</div>;
  }

  return (
    <div className="mypage-container">
      <div className="mypage-content">
        <div className="mypage-header">
          {/* 🟢 MyPageSection은 사용자 요약 정보 + 수정 버튼을 보여주는 역할로 추정 */}
          <MyPageSection nickname={userData.nickname} />
        </div>

        <div className="mypage-row user-profile">
          <UserProfileSection
            username={userData.username}
            nickname={userData.nickname}
            profile_img={userData.profile_img}
            participation_rate={userData.participation_rate}
            trust_score={userData.trust_score}
          />
        </div>

        <div className="mypage-row activity-summary">
          <ActivitySummarySection activity_history={userData.activity_history} />
        </div>

        <div className="mypage-row project-achievements">
          <ProjectAchievementsSection project_achievements={userData.project_achievements} />
        </div>

        <div className="mypage-row interest-area">
          <InterestAreaSection interests={userData.interests} />
        </div>

        <div className="mypage-row skill-set">
          <SkillSetSection soft_skills={userData.soft_skills} />
        </div>

        <div className="mypage-row available-tools">
          <AvailableToolsSection tools={userData.tools} />
        </div>

        <div className="mypage-row activity-records">
          <ActivityRecordsSection
            certifications={userData.certifications}
            language_tests={userData.language_tests}
          />
        </div>

        <Header />
      </div>
      <Footer />
    </div>
  );
};

