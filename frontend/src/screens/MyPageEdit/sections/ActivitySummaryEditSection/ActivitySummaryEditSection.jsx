import React, { useState, useEffect, useRef } from "react";
import "./ActivitySummaryEditSection.css";

export const ActivitySummaryEditSection = ({ activity_history = [], setActivityHistory }) => {
  const [activities, setActivities] = useState(activity_history);
  const monthRefs = useRef({});

  useEffect(() => {
    setActivities(activity_history);
  }, [activity_history]);

  const handleAdd = () => {
    if (activities.length >= 7) {
      alert("최대 7개까지 등록할 수 있습니다.");
      return;
    }
    const updated = [...activities, { startDate: "", endDate: "", description: "" }];
    setActivities(updated);
    setActivityHistory && setActivityHistory(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...activities];
    updated[index][field] = value;
    setActivities(updated);
    setActivityHistory && setActivityHistory(updated);
  };

  const handleDelete = (index) => {
    const updated = [...activities];
    updated.splice(index, 1);
    setActivities(updated);
    setActivityHistory && setActivityHistory(updated);
  };

  const formatMonth = (value) => {
    if (!value) return "";
    const [year, month] = value.split("-");
    return `${year.slice(2)}.${month}`;
  };

  const focusMonthInput = (index, field) => {
    const ref = monthRefs.current[`${index}-${field}`];
    ref?.showPicker?.();
  };

  return (
    <div className="activity-summary-edit-wrapper">
      <div className="activity-summary-edit-header">
        <h2 className="activity-summary-edit-title">활동 이력 요약</h2>
        <button className="add-button" onClick={handleAdd}>
          <img
            src="https://i.postimg.cc/1zGsnX01/plus.png"
            alt="Add"
            className="add-button-icon"
          />
        </button>
      </div>

      <div className="activity-summary-edit-content">
        {activities.map((activity, index) => (
          <div key={index} className="activity-summary-edit-item">
            <div
              className="month-display"
              onClick={() => focusMonthInput(index, "startDate")}
            >
              {activity.startDate ? formatMonth(activity.startDate) : "시작"}
              <input
                type="month"
                className="hidden-month"
                ref={(el) => {
                  monthRefs.current[`${index}-startDate`] = el;
                }}
                value={activity.startDate || ""}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
              />
            </div>

            <span className="tilde">~</span>

            <div
              className="month-display"
              onClick={() => focusMonthInput(index, "endDate")}
            >
              {activity.endDate ? formatMonth(activity.endDate) : "끝"}
              <input
                type="month"
                className="hidden-month"
                ref={(el) => {
                  monthRefs.current[`${index}-endDate`] = el;
                }}
                value={activity.endDate || ""}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </div>

            <input
              className="activity-input description"
              type="text"
              placeholder="활동 설명 입력"
              value={activity.description || ""}
              onChange={(e) => handleChange(index, "description", e.target.value)}
            />

            <button className="delete-button" onClick={() => handleDelete(index)}>
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
