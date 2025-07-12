import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./SkillSetSection.css";

export const SkillSetSection = ({ soft_skills = [] }) => {
  // 점수 기반으로 별 개수 계산 함수
  const getStarsFromScore = (score) => {
    if (score >= 4.6) return 5;
    if (score >= 3.6) return 4;
    if (score >= 2.6) return 3;
    if (score >= 1.6) return 2;
    if (score >= 0.6) return 1;
    return 0;
  };

  const renderStars = (filledStars, totalStars = 5) => {
    return Array.from({ length: totalStars }, (_, index) => (
      <img
        key={`star-${index}`}
        className="star-icon"
        alt={index < filledStars ? "Filled star" : "Empty star"}
        src={
          index < filledStars
            ? "https://c.animaapp.com/OhEHVw08/img/star-24.svg"
            : "https://c.animaapp.com/OhEHVw08/img/star-25.svg"
        }
      />
    ));
  };

  return (
    <Card className="skill-card">
      <div className="skill-header">
        <h2 className="skill-title">소프트 스킬 점수</h2>
      </div>

      <CardContent className="skill-content">
        {soft_skills.map((skillObj, index) => {
          const { skill, score } = skillObj;
          const stars = getStarsFromScore(score);
          return (
            <div key={`skill-${index}`} className="skill-row">
              <div className="skill-name">{skill}</div>
              <div className="skill-stars">
                {renderStars(stars)}
                <div className="skill-score">({score})</div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
