// AvailableToolsSection.jsx
import React, { useState } from "react";
import "./AvailableToolsSection.css";

export const AvailableToolsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("pm");

  const toolCategories = {
    pm: Array.from({ length: 8 }, (_, i) => ({
      name: `P${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
      alt: `P${i + 1}`,
    })),
    frontend: Array.from({ length: 8 }, (_, i) => ({
      name: `F${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
      alt: `F${i + 1}`,
    })),
    backend: Array.from({ length: 8 }, (_, i) => ({
      name: `B${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
      alt: `B${i + 1}`,
    })),
    design: Array.from({ length: 8 }, (_, i) => ({
      name: `D${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
      alt: `D${i + 1}`,
    })),
    marketing: Array.from({ length: 8 }, (_, i) => ({
      name: `M${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
      alt: `M${i + 1}`,
    })),
    startup: Array.from({ length: 8 }, (_, i) => ({
      name: `S${i + 1}`,
      icon: "https://c.animaapp.com/OhEHVw08/img/notion-7@2x.png",
      alt: `S${i + 1}`,
    })),
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <section className="tools-section">
      <header className="tools-header">
        <h2 className="tools-title">사용 가능 툴</h2>
        <div className="tool-select">
          <select className="custom-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="pm">기획</option>
            <option value="frontend">프론트엔드</option>
            <option value="backend">백엔드</option>
            <option value="design">디자인</option>
            <option value="marketing">마케팅</option>
            <option value="startup">창업</option>
          </select>
        </div>
      </header>

      <div className="tools-grid">
        {toolCategories[selectedCategory].map((tool, index) => (
          <div key={`tool-${index}`} className="tool-item">
            <div className="tool-card-wrapper">
              <div className="tool-card">
                <img className="tool-icon" alt={tool.alt} src={tool.icon} />
              </div>
            </div>
            <div className="tool-label">{tool.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
