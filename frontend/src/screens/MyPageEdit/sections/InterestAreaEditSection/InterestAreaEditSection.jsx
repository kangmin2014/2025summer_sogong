// InterestAreaEditSection.jsx
import React, { useState } from "react";
import "./InterestAreaEditSection.css";

export const InterestAreaEditSection = () => {
  const [visibleTags, setVisibleTags] = useState({
    기획: true,
    프론트엔드: true,
    백엔드: true,
    디자인: true,
    마케팅: true,
    창업: true,
  });

  const [showDropdown, setShowDropdown] = useState(false);

  const interestAreas = [
    { label: "#기획", key: "기획", color: "green", deleteIcon: "https://i.postimg.cc/ZKZ5X9kv/deletePM.png" },
    { label: "#프론트엔드", key: "프론트엔드", color: "red", deleteIcon: "https://i.postimg.cc/hjdGRTPT/delete-Frontend.png" },
    { label: "#백엔드", key: "백엔드", color: "blue", deleteIcon: "https://i.postimg.cc/fLGJV5g8/delete-Backend.png" },
    { label: "#디자인", key: "디자인", color: "pink", deleteIcon: "https://i.postimg.cc/K80jPmHk/delete-Design.png" },
    { label: "#마케팅", key: "마케팅", color: "orange", deleteIcon: "https://i.postimg.cc/7h1Yf4zL/delete-Marketing.png" },
    { label: "#창업", key: "창업", color: "yellow", deleteIcon: "https://i.postimg.cc/02fyv8xW/delete-Startup.png" },
  ];

  const handleDelete = (key) => {
    setVisibleTags((prev) => ({ ...prev, [key]: false }));
  };

  const handleAddTag = (key) => {
    setVisibleTags((prev) => ({ ...prev, [key]: true }));
    setShowDropdown(false);
  };

  const hiddenTags = interestAreas.filter(area => !visibleTags[area.key]);

  return (
    <section className="interest-edit-section">
      <header className="interest-edit-header">
        <h2 className="interest-edit-title">관심 분야</h2>
        <div className="tag-add-container">
          <button className="tag-plus-button" onClick={() => setShowDropdown(prev => !prev)}>
            태그 추가 +
          </button>

          {showDropdown && hiddenTags.length > 0 && (
            <div className="tag-dropdown">
              {hiddenTags.map(tag => (
                <div
                  key={tag.key}
                  className="tag-dropdown-item"
                  onClick={() => handleAddTag(tag.key)}
                >
                  {tag.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="tag-list">
        {interestAreas.map(
          (area) =>
            visibleTags[area.key] && (
              <div className="tag-item" key={area.key}>
                <div className={`tag-label ${area.color}`}>{area.label}</div>
                <img
                  className="tag-delete-icon"
                  src={area.deleteIcon}
                  alt={`Delete ${area.label}`}
                  onClick={() => handleDelete(area.key)}
                />
              </div>
            )
        )}
      </div>
    </section>
  );
};
