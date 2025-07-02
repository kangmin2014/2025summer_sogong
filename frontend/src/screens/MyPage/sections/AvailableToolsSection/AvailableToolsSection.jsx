// AvailableToolsSection.jsx
import React from "react";
import "./AvailableToolsSection.css";

export const AvailableToolsSection = () => {
  const tools = Array(8).fill({
    name: "Tool Name",
    icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
    alt: "Notion",
  });

  return (
    <section className="tools-section">
      <header className="tools-header">
        <h2 className="tools-title">사용 가능 툴</h2>
      </header>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={`tool-${index}`} className="tool-item">
            <div className="tool-card-wrapper">
              <div className="tool-card">
                <img
                  className="tool-icon"
                  alt={tool.alt}
                  src={tool.icon}
                />
              </div>
            </div>
            <div className="tool-label">{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
