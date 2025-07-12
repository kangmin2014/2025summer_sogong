import React, { useEffect, useRef, useState } from "react";
import "./ActivityRecordsEditSection.css";

export const ActivityRecordsEditSection = ({
  certifications = [],
  language_tests = [],
  setCertifications,
  setLanguageTests,
}) => {
  const [records, setRecords] = useState([
    ...language_tests.map((item) => ({ ...item, type: "language" })),
    ...certifications.map((item) => ({ ...item, type: "certification" })),
  ]);

  const monthRefs = useRef({});

  useEffect(() => {
    const combined = [
      ...language_tests.map((item) => ({ ...item, type: "language" })),
      ...certifications.map((item) => ({ ...item, type: "certification" })),
    ];
    setRecords(combined);
  }, [language_tests, certifications]);

  const handleAdd = (type) => {
    if (records.length >= 6) {
      alert("최대 6개까지 등록할 수 있습니다.");
      return;
    }
    const updated = [...records, { type, date: "", description: "" }];
    setRecords(updated);
    updateParent(updated);
  };

  const handleDelete = (index) => {
    const updated = [...records];
    updated.splice(index, 1);
    setRecords(updated);
    updateParent(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...records];
    updated[index][field] = value;
    setRecords(updated);
    updateParent(updated);
  };

  const updateParent = (updated) => {
    const langs = updated
      .filter((r) => r.type === "language")
      .map(({ type, ...rest }) => rest);
    const certs = updated
      .filter((r) => r.type === "certification")
      .map(({ type, ...rest }) => rest);
    setLanguageTests && setLanguageTests(langs);
    setCertifications && setCertifications(certs);
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
