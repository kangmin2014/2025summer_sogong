import React from "react";
import "./InterestAreaSection.css";

export const InterestAreaSection = () => {
  const interestAreas = [
    { id: 1, label: "#기획", color: "green" },
    { id: 2, label: "#디자인", color: "pink" },
    { id: 3, label: "#마케팅", color: "orange" },
  ];

  return (
    <section className="interest-section">
      <header className="interest-header">
        <h2 className="interest-title">관심 분야</h2>
      </header>

      <div className="interest-tags">
        {interestAreas.map((area) => (
          <div key={area.id} className="interest-tag">
            <div className={`interest-label ${area.color}`}>{area.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
