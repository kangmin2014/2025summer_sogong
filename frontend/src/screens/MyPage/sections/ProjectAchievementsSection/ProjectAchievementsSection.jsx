import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ProjectAchievementsSection.css";

export const ProjectAchievementsSection = ({ project_achievements }) => {
  const achievements = project_achievements || [];

  return (
    <Card className="project-achievements-card">
      <CardContent className="project-achievements-content">
        <div className="project-achievements-header">
          <h2 className="project-achievements-title">프로젝트 성과</h2>
        </div>

        <div className="project-achievements-list">
          {achievements.length > 0 ? (
            achievements.map((achievement, index) => (
              <div key={index} className="achievement-row">
                <div className="achievement-date">{achievement.date}</div>
                <div className="achievement-description">{achievement.description}</div>
              </div>
            ))
          ) : (
            <div className="project-achievements-empty">등록된 프로젝트 성과가 없습니다.</div>
          )}

          {/* 빈칸 채우기 (선택사항) */}
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
