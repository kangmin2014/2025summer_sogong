// AvailableToolsEditSection.jsx
import React, { useState } from "react";
import "./AvailableToolsEditSection.css";

export const AvailableToolsEditSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("pm");
  const [selectedTools, setSelectedTools] = useState([]);

  const toolCategories = {
    pm: Array.from({ length: 8 }, (_, i) => ({
      name: `P${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
    })),
    frontend: Array.from({ length: 8 }, (_, i) => ({
      name: `F${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
    })),
    backend: Array.from({ length: 8 }, (_, i) => ({
      name: `B${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
    })),
    design: Array.from({ length: 8 }, (_, i) => ({
      name: `D${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
    })),
    marketing: Array.from({ length: 8 }, (_, i) => ({
      name: `M${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
    })),
    startup: Array.from({ length: 8 }, (_, i) => ({
      name: `S${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
    })),
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleToolClick = (toolName) => {
    setSelectedTools((prev) =>
      prev.includes(toolName)
        ? prev.filter((t) => t !== toolName)
        : [...prev, toolName]
    );
  };

  return (
    <section className="tools-edit-section">
      <header className="tools-edit-header">
        <h2 className="tools-edit-title">사용 가능 툴</h2>
        <div style={{ position: "relative" }}>
          <select
            className="custom-edit-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="pm">기획</option>
            <option value="frontend">프론트엔드</option>
            <option value="backend">백엔드</option>
            <option value="design">디자인</option>
            <option value="marketing">마케팅</option>
            <option value="startup">창업</option>
          </select>
        </div>
      </header>

      <div className="tools-edit-grid">
        {toolCategories[selectedCategory].map((tool) => (
          <div key={tool.name} className="tool-edit-container">
            <button
              className={`tool-edit-button ${
                selectedTools.includes(tool.name) ? "selected" : ""
              }`}
              onClick={() => handleToolClick(tool.name)}
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="tool-icon-button"
              />
            </button>
            <div className="tool-edit-label">{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
