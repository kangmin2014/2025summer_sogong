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
      activeicon: "https://c.animaapp.com/JL2GbBWa/img/all-icon.svg",
      inactiveicon: "https://i.postimg.cc/T3Sjk1X5/all-icon2.png",
    },
    {
      id: "개발",
      label: "개발, 프로그래밍",
      activeicon: "https://i.postimg.cc/HkJsts2N/development-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/development-icon.png",
    },
    {
      id: "디자인",
      label: "디자인, 아트",
      activeicon: "https://i.postimg.cc/dtV0L9Tw/design-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/design-icon.svg",
    },
    {
      id: "기획",
      label: "기획, 경영, 마케팅",
      activeicon: "https://i.postimg.cc/PxSBc1fQ/pm-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/pm-icon.svg",
    },
    {
      id: "창업",
      label: "창업, 자기계발",
      activeicon: "https://i.postimg.cc/0Nf3M7S1/startup-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/startup-icon.svg",
    },
    {
      id: "경제",
      label: "경제, 금융",
      activeicon: "https://i.postimg.cc/Y9L6KHMD/bank-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/bank-icon.svg",
    },
    {
      id: "봉사",
      label: "봉사, 환경",
      activeicon: "https://i.postimg.cc/zD0zZR2M/life-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/life-icon.svg",
    },
    {
      id: "행사",
      label: "행사, 페스티벌",
      activeicon: "https://i.postimg.cc/cHcsJKxv/festival-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/festival-icon.svg",
    },
    {
      id: "기타",
      label: "기타",
      activeicon: "https://i.postimg.cc/vmHhKk4C/another-icon.png",
      inactiveicon: "https://c.animaapp.com/JL2GbBWa/img/another-icon.svg",
    },
  ];

  const searchIcon = {
    active: "https://i.postimg.cc/Jzm5D0Wb/search-icon.png",  // 원하는 아이콘으로 교체
    inactive: "https://c.animaapp.com/JL2GbBWa/img/search-icon.svg",
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <nav className="nav" role="navigation" aria-label="Activity category filters">
      <Button
        variant="ghost"
        className={`search-button ${activeFilter === "검색" ? "active" : ""}`}
        onClick={() => handleFilterClick("검색")}
        aria-label="Search activities"
      >
        <img
          className="search-icon"
          alt=""
          src={activeFilter === "검색" ? searchIcon.active : searchIcon.inactive}
        />
        <span className={`search-label ${activeFilter === "검색" ? "active-label" : ""}`}>검색</span>
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
          <img
            className="category-icon"
            alt=""
            src={activeFilter === category.id ? category.activeicon : category.inactiveicon}
          />
            <span className={`category-label ${activeFilter === category.id ? "active-label" : ""}`}>
              {category.label}
            </span>
          </Button>
        ))}
      </div>
    </nav>
  );
};
