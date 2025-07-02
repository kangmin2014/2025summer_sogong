import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./SkillSetSection.css";

export const SkillSetSection = () => {
  const skillRatings = [
    // { name: "커뮤니케이션", rating: 4.1, stars: 4, width: "skill-width-1", gap: "skill-gap-1" },
    // { name: "협업 태도", rating: 4.8, stars: 5, width: "skill-width-2", gap: "skill-gap-1" },
    // { name: "적극성", rating: 4.5, stars: 5, width: "skill-width-3", gap: "skill-gap-2" },
    // { name: "문제 해결력", rating: 3.9, stars: 4, width: "skill-width-4", gap: "skill-gap-3" },
    // { name: "성실성", rating: 4.3, stars: 4, width: "skill-width-3", gap: "skill-gap-2" },
    { name: "커뮤니케이션", rating: 4.1, stars: 4 },
    { name: "협업 태도", rating: 4.8, stars: 5 },
    { name: "적극성", rating: 4.5, stars: 5 },
    { name: "문제 해결력", rating: 3.9, stars: 4 },
    { name: "성실성", rating: 4.3, stars: 4 },
  ];

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
        {skillRatings.map((skill, index) => (
          <div key={`skill-${index}`} className={`skill-row ${skill.gap}`}>
            <div className={`skill-name ${skill.width}`}>{skill.name}</div>
            <div className="skill-stars">
              {renderStars(skill.stars)}
              <div className="skill-score">({skill.rating})</div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
