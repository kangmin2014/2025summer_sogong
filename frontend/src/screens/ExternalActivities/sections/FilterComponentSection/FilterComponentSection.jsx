import React, { useState } from "react";
import { Button } from "../../../../components/ui/button1";
import { Separator } from "../../../../components/ui/separator";
import './FilterComponentSection.css';

export const FilterComponentSection = () => {
  const [activeFilter, setActiveFilter] = useState("전체");

  const filterCategories = [
    {
      id: "전체",
      label: "전체",
      icon: "https://c.animaapp.com/JL2GbBWa/img/all-icon.svg",
    },
    {
      id: "개발",
      label: "개발, 프로그래밍",
      icon: "https://c.animaapp.com/JL2GbBWa/img/development-icon.png",
    },
    {
      id: "디자인",
      label: "디자인, 아트",
      icon: "https://c.animaapp.com/JL2GbBWa/img/design-icon.svg",
    },
    {
      id: "기획",
      label: "기획, 경영, 마케팅",
      icon: "https://c.animaapp.com/JL2GbBWa/img/pm-icon.svg",
    },
    {
      id: "창업",
      label: "창업, 자기계발",
      icon: "https://c.animaapp.com/JL2GbBWa/img/startup-icon.svg",
    },
    {
      id: "경제",
      label: "경제, 금융",
      icon: "https://c.animaapp.com/JL2GbBWa/img/bank-icon.svg",
    },
    {
      id: "봉사",
      label: "봉사, 환경",
      icon: "https://c.animaapp.com/JL2GbBWa/img/life-icon.svg",
    },
    {
      id: "행사",
      label: "행사, 페스티벌",
      icon: "https://c.animaapp.com/JL2GbBWa/img/festival-icon.svg",
    },
    {
      id: "기타",
      label: "기타",
      icon: "https://c.animaapp.com/JL2GbBWa/img/another-icon.svg",
    },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <nav className="nav" role="navigation" aria-label="Activity category filters">
      <Button variant="ghost" className="search-button" aria-label="Search activities">
        <img className="search-icon" alt="" src="https://c.animaapp.com/JL2GbBWa/img/search-icon.svg" />
        <span className="search-label">검색</span>
      </Button>

      <Separator orientation="vertical" className="separator" />

      <div className="category-wrapper" role="tablist">
        {filterCategories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className={`category-button ${activeFilter === category.id ? "active" : ""}`}
            onClick={() => handleFilterClick(category.id)}
            role="tab"
            aria-selected={activeFilter === category.id}
            aria-label={`Filter by ${category.label}`}
          >
            <img className="category-icon" alt="" src={category.icon} />
            <span className={`category-label ${activeFilter === category.id ? "active-label" : ""}`}>
              {category.label}
            </span>
          </Button>
        ))}
      </div>
    </nav>
  );
};
