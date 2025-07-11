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

  // 날짜 포맷 변경: YYYY-MM → YYYY.MM
  const handleChange = (index, field, value) => {
    const updated = [...achievements];

    if (field === "date" && value.includes("-")) {
      const [year, month] = value.split("-");
      updated[index][field] = `${year}.${month}`;
    } else {
      updated[index][field] = value;
    }

    setAchievements(updated);
    setProjectAchievements && setProjectAchievements(updated);
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

  // 표시용 포맷 (이미 저장된 YYYY.MM 형식 그대로 출력)
  const formatFullMonth = (value) => {
    return value || "날짜";
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
              {formatFullMonth(achievement.date)}
              <input
                type="month"
                className="hidden-month"
                // input에는 다시 YYYY-MM 형식으로 변환해서 보여줌
                value={
                  achievement.date
                    ? achievement.date.replace(".", "-")
                    : ""
                }
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
