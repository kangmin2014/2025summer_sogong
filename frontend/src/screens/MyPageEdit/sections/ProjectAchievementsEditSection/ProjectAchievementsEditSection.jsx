import React, { useState, useRef } from "react";
import "./ProjectAchievementsEditSection.css";

export const ProjectAchievementsEditSection = () => {
  const initialAchievements = [
    { date: "2025-02", description: "AI학습법 아이디어톤 우수상" },
    { date: "2024-05", description: "숭실대학교 Wish 해커톤 금상" },
    { date: "2023-09", description: "SSU 소프트웨어 공모전 본선 진출 / 대상" },
  ];

  const [achievements, setAchievements] = useState(initialAchievements);
  const monthRefs = useRef({});

  const handleChange = (index, field, value) => {
    const updated = [...achievements];
    updated[index][field] = value;
    setAchievements(updated);
  };

  const handleAdd = () => {
    if (achievements.length >= 7) {
      alert("최대 7개까지 등록할 수 있습니다.");
      return;
    }
    setAchievements([...achievements, { date: "", description: "" }]);
  };

  const handleDelete = (index) => {
    const updated = [...achievements];
    updated.splice(index, 1);
    setAchievements(updated);
  };

  const formatFullMonth = (value) => {
    if (!value) return "";
    const [year, month] = value.split("-");
    return `${year}.${month}`;
  };

  const focusMonthInput = (index) => {
    const ref = monthRefs.current[index];
    ref?.showPicker?.();
  };

  return (
    <div className="project-achievements-edit-wrapper">
      <div className="project-achievements-edit-header">
        <h2 className="project-achievements-edit-title">프로젝트 성과</h2>
        <button className="add-button" onClick={handleAdd}>
          <img
            src="https://i.postimg.cc/1zGsnX01/plus.png"
            alt="Add"
            className="add-button-icon"
          />
        </button>
      </div>

      <div className="project-achievements-edit-list">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-row">
            <div
              className="month-display"
              onClick={() => focusMonthInput(index)}
            >
              {achievement.date ? formatFullMonth(achievement.date) : "날짜"}
              <input
                type="month"
                className="hidden-month"
                value={achievement.date}
                ref={(el) => (monthRefs.current[index] = el)}
                onChange={(e) => handleChange(index, "date", e.target.value)}
              />
            </div>

            <input
              className="achievement-description-input"
              type="text"
              placeholder="성과 설명 입력"
              value={achievement.description}
              onChange={(e) =>
                handleChange(index, "description", e.target.value)
              }
            />

            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              <img
                src="https://i.postimg.cc/1R8kdMXY/delete.png"
                alt="Delete"
                className="delete-button-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
