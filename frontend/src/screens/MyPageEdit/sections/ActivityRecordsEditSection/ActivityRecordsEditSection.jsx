import React, { useState, useRef } from "react";
import "./ActivityRecordsEditSection.css";

export const ActivityRecordsEditSection = () => {
  const [records, setRecords] = useState([
    { type: "language", date: "2022-07", description: "TOEIC 920점" },
    { type: "certification", date: "2023-05", description: "GTQ 포토샵 1급" },
    { type: "certification", date: "2022-09", description: "컴퓨터 활용 능력 1급" },
  ]);

  const monthRefs = useRef({});

  const handleAdd = (type) => {
    if (records.length >= 6) {
      alert("최대 6개까지 등록할 수 있습니다.");
      return;
    }
    setRecords([...records, { type, date: "", description: "" }]);
  };

  const handleDelete = (index) => {
    const updated = [...records];
    updated.splice(index, 1);
    setRecords(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...records];
    updated[index][field] = value;
    setRecords(updated);
  };

  const formatMonth = (value) => {
    if (!value) return "";
    const [year, month] = value.split("-");
    return `${year}.${month}`;
  };

  const focusMonthInput = (index) => {
    monthRefs.current[index]?.showPicker?.();
  };

  const renderRecords = (type) =>
    records
      .map((item, i) => ({ ...item, originalIndex: i }))
      .filter((r) => r.type === type)
      .map((item) => (
        <div key={item.originalIndex} className="record-edit-item">
          <div
            className="month-edit-display"
            onClick={() => focusMonthInput(item.originalIndex)}
          >
            {item.date ? formatMonth(item.date) : "날짜"}
            <input
              type="month"
              className="hidden-month"
              ref={(el) => (monthRefs.current[item.originalIndex] = el)}
              value={item.date}
              onChange={(e) =>
                handleChange(item.originalIndex, "date", e.target.value)
              }
            />
          </div>

          <input
            type="text"
            placeholder="내용 입력"
            className="record-edit-desc-input"
            value={item.description}
            onChange={(e) =>
              handleChange(item.originalIndex, "description", e.target.value)
            }
          />

          <button
            className="record-delete-btn"
            onClick={() => handleDelete(item.originalIndex)}
          >
            <img
              src="https://i.postimg.cc/1R8kdMXY/delete.png"
              alt="Delete"
              className="delete-button-icon"
            />
          </button>
        </div>
      ));

  return (
    <section className="activity-edit-section">
      <header className="activity-edit-header">
        <h2 className="activity-edit-title">자격증 / 어학</h2>
      </header>

      <div className="record-group">
        <div className="record-group-header">
          <h3 className="record-group-title">어학</h3>
          <button className="add-record-btn" onClick={() => handleAdd("language")}>
            <img
              src="https://i.postimg.cc/1zGsnX01/plus.png"
              alt="Add"
              className="add-button-icon"
            />
          </button>
        </div>
        {renderRecords("language")}
      </div>

      <div className="record-group certification-group">
        <div className="record-group-header">
          <h3 className="record-group-title">자격증</h3>
          <button className="add-record-btn" onClick={() => handleAdd("certification")}>
            <img
              src="https://i.postimg.cc/1zGsnX01/plus.png"
              alt="Add"
              className="add-button-icon"
            />
          </button>
        </div>
        {renderRecords("certification")}
      </div>

    </section>
  );
};
