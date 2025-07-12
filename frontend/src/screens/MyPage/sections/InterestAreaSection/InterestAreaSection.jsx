// InterestAreaSection.jsx

import React from "react";
import "./InterestAreaSection.css";

export const InterestAreaSection = ({ interests = [] }) => {
  const interestColors = {
    기획: "green",
    프론트엔드: "red",
    백엔드: "blue",
    디자인: "pink",
    마케팅: "orange",
    창업: "yellow",
  };

  return (
    <section className="interest-section">
      <header className="interest-header">
        <h2 className="interest-title">관심 분야</h2>
      </header>

      <div className="interest-tags">
        {interests.map((tag, index) => (
          <div key={index} className="interest-tag">
            <div className={`interest-label ${interestColors[tag] || ""}`}>
              #{tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
