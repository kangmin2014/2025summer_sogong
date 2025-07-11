import React, { useEffect, useState } from "react";
import { ActivityRecordsEditSection } from "./sections/ActivityRecordsEditSection";
import { ActivitySummaryEditSection } from "./sections/ActivitySummaryEditSection";
import { AvailableToolsEditSection } from "./sections/AvailableToolsEditSection";
import { InterestAreaEditSection } from "./sections/InterestAreaEditSection";
import { MyPageEditSection } from "./sections/MyPageEditSection";
import { ProjectAchievementsEditSection } from "./sections/ProjectAchievementsEditSection";
import { SkillSetEditSection } from "./sections/SkillSetEditSection";
import { UserProfileEditSection } from "./sections/UserProfileEditSection";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

import "./MyPageEdit.css";

export const MyPageEdit = () => {
  const loginID = localStorage.getItem("loginID");
  const [nickname, setNickname] = useState("");
  const [profile_img, setProfileImg] = useState("");
  const [participation_rate, setParticipationRate] = useState(0);
  const [trust_score, setTrustScore] = useState(0);
  const [interests, setInterests] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [language_tests, setLanguageTests] = useState([]);
  const [activity_history, setActivityHistory] = useState([]);
  const [soft_skills, setSoftSkills] = useState([]);
  const [project_achievements, setProjectAchievements] = useState([]);
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/get_user_info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: loginID }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const user = data.user;
          setNickname(user.nickname);
          setProfileImg(user.profile_img);
          setParticipationRate(user.participation_rate);
          setTrustScore(user.trust_score);
          setInterests(user.interests || []);
          setCertifications(user.certifications || []);
          setLanguageTests(user.language_tests || []);
          setActivityHistory(user.activity_history || []);
          setSoftSkills(user.soft_skills || []);
          setProjectAchievements(user.project_achievements || []);
          setTools(user.tools || []);

        }
      });
  }, [loginID]);

  const handleProfileImgChange = (url) => {
    setProfileImg(url); // ✅ 업로드된 이미지 URL을 상위 상태에 반영
  };

  const handleSave = () => {
    const dataToSend = {
      username: loginID,
      nickname,
      profile_img,
      participation_rate,
      trust_score,
      interests: JSON.stringify(interests),
      certifications: JSON.stringify(certifications),
      language_tests: JSON.stringify(language_tests),
      activity_history: JSON.stringify(activity_history),
      soft_skills: JSON.stringify(soft_skills),
      project_achievements: JSON.stringify(project_achievements),
      tools: JSON.stringify(tools),
    };

    const filtered = Object.fromEntries(
      Object.entries(dataToSend).filter(([_, v]) => v !== undefined)
    );

    fetch("http://localhost:5000/api/update_user_info", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filtered),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("저장되었습니다!");
          // ✅ 최신 상태 다시 가져오기 (parse 제거)
          fetch("http://localhost:5000/api/get_user_info", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: loginID }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                const user = data.user;
                setNickname(user.nickname);
                setProfileImg(user.profile_img);
                setParticipationRate(user.participation_rate);
                setTrustScore(user.trust_score);
                setInterests(user.interests || []);
                setCertifications(user.certifications || []);
                setLanguageTests(user.language_tests || []);
                setActivityHistory(user.activity_history || []);
                setSoftSkills(user.soft_skills || []);
                setProjectAchievements(user.project_achievements || []);
                setTools(user.tools || []);
              }
            });
        } else {
          alert("저장에 실패했습니다: " + data.message);
        }
      });
  };

  return (
    <div className="mypageedit-container">
      <div className="mypageedit-content">
        <div className="mypageedit-header">
          <MyPageEditSection onSave={handleSave} />
        </div>

        <div className="mypageedit-row user-profile">
          <UserProfileEditSection
            username={loginID}
            nickname={nickname}
            setNickname={setNickname}
            profile_img={profile_img}
            setProfileImg={setProfileImg}
            participation_rate={participation_rate}
            setParticipationRate={setParticipationRate}
            trust_score={trust_score}
            setTrustScore={setTrustScore}
            onProfileImgChange={handleProfileImgChange}
          />
        </div>

        <div className="mypageedit-row activity-summary">
          <ActivitySummaryEditSection
            activity_history={activity_history}
            setActivityHistory={setActivityHistory}
          />
        </div>

        <div className="mypageedit-row project-achievements">
          <ProjectAchievementsEditSection
            project_achievements={project_achievements}
            setProjectAchievements={setProjectAchievements}
          />
        </div>

        <div className="mypageedit-row interest-area">
          <InterestAreaEditSection
            interests={interests}
            setInterests={setInterests}
          />
        </div>

        <div className="mypageedit-row skill-set">
          <SkillSetEditSection
            soft_skills={soft_skills}
            setSoftSkills={setSoftSkills}
          />
        </div>

        <div className="mypageedit-row available-tools">
          <AvailableToolsEditSection
            tools={tools}
            setTools={setTools}
          />
        </div>

        <div className="mypageedit-row activity-records">
          <ActivityRecordsEditSection
            certifications={certifications}
            setCertifications={setCertifications}
            language_tests={language_tests}
            setLanguageTests={setLanguageTests}
          />
        </div>

        <Header />
      </div>
      <Footer />
    </div>
  );
};