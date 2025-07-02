import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ProjectAchievementsSection.css";

export const ProjectAchievementsSection = () => {
  const achievements = [
    { date: "2025.02", description: "AI학습법 아이디어톤 우수상" },
    { date: "2024.05", description: "숭실대학교 Wish 해커톤 금상" },
    { date: "2023.09", description: "SSU 소프트웨어 공모전 본선 진출 / 대상" },
  ];

  return (
    <Card className="project-achievements-card">
      <CardContent className="project-achievements-content">
        <div className="project-achievements-header">
          <h2 className="project-achievements-title">프로젝트 성과</h2>
        </div>

        <div className="project-achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-row">
              <div className="achievement-date">{achievement.date}</div>
              <div className="achievement-description">{achievement.description}</div>
            </div>
          ))}

          {[...Array(4)].map((_, index) => (
            <div key={`empty-${index}`} className="achievement-row">
              <div className="achievement-date"></div>
              <div className="achievement-description"></div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
