import React, { useEffect, useRef, useState } from "react";
import "./ProjectAchievementsEditSection.css";

export const ProjectAchievementsEditSection = ({
  project_achievements = [],
  setProjectAchievements,
}) => {
  const [achievements, setAchievements] = useState(project_achievements);
  const monthRefs = useRef({});

  // props 값이 변경될 때 내부 상태도 동기화
  useEffect(() => {
    setAchievements(project_achievements);
  }, [project_achievements]);

  const handleChange = (index, field, value) => {
    const updated = [...achievements];
    updated[index][field] = value;
    setAchievements(updated);
    setProjectAchievements && setProjectAchievements(updated); // 상위 컴포넌트에 전달
  };

  const handleAdd = () => {
    if (achievements.length >= 7) {
      alert("최대 7개까지 등록할 수 있습니다.");
      return;
    }
    const updated = [...achievements, { date: "", description: "" }];
    setAchievements(updated);
    setProjectAchievements && setProjectAchievements(updated);
  };

  const handleDelete = (index) => {
    const updated = [...achievements];
    updated.splice(index, 1);
    setAchievements(updated);
    setProjectAchievements && setProjectAchievements(updated);
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
                onChange={(e) =>
                  handleChange(index, "date", e.target.value)
                }
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