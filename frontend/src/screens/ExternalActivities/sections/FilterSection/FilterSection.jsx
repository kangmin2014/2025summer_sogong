// FilterSection.jsx

import React, { useState } from "react";
import { Checkbox } from "../../../../components/ui/mycheckbox";
import { Separator } from "../../../../components/ui/separator";
import "./FilterSection.css";

export const FilterSection = () => {
  const filterCategories = [
    {
      title: "활동 유형",
      options: [
        { label: "개인 활동", count: 123, defaultChecked: false },
        { label: "팀 활동", count: 123, defaultChecked: false },
      ],
    },
    {
      title: "주최 기관",
      options: [
        { label: "대기업", count: 123, defaultChecked: false },
        { label: "중소기업", count: 123, defaultChecked: false },
        { label: "스타트업", count: 123, defaultChecked: false },
        { label: "공공기관/공기업", count: 123, defaultChecked: false },
        { label: "비영리단체/협회", count: 123, defaultChecked: false },
      ],
    },
    {
      title: "모임 형태",
      options: [
        { label: "온라인", count: 123, defaultChecked: false },
        { label: "오프라인", count: 123, defaultChecked: false },
      ],
    },
    {
      title: "신뢰도 태그",
      options: [
        { label: "보상/혜택", count: 123, defaultChecked: false },
        { label: "스펙/이력서", count: 123, defaultChecked: false },
        { label: "효율/가성비", count: 123, defaultChecked: false },
        { label: "리스크 회피", count: 123, defaultChecked: false },
        { label: "투명성 검증", count: 123, defaultChecked: false },
      ],
    },
  ];

  const [checkedOptions, setCheckedOptions] = useState(() => {
    const initialState = {};
    filterCategories.forEach((category) => {
      category.options.forEach((option) => {
        initialState[`${category.title}-${option.label}`] =
          option.defaultChecked;
      });
    });
    return initialState;
  });

  const handleCheckboxChange = (categoryTitle, optionLabel, checked) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [`${categoryTitle}-${optionLabel}`]: checked,
    }));
  };

  return (
    <div className="filter-wrapper">
      <div className="filter-header">
        <div className="filter-header-title">
          <h2>상세 필터</h2>
        </div>
        <Separator style={{ height: "1px", backgroundColor: "#dfe5ed", width: "100%" }} />
      </div>

      {filterCategories.map((category, categoryIndex) => (
        <div
          key={`category-${categoryIndex}`}
          className={`filter-category ${
            categoryIndex === filterCategories.length - 1
              ? "filter-category-last"
              : ""
          }`}
        >
          <div className="filter-category-title">
            <h3>{category.title}</h3>
          </div>

          {category.options.map((option, optionIndex) => (
            <div key={`option-${categoryIndex}-${optionIndex}`} className="filter-option">
              <Checkbox
                id={`${category.title}-${option.label}`}
                checked={checkedOptions[`${category.title}-${option.label}`]}
                onCheckedChange={(checked) =>
                  handleCheckboxChange(category.title, option.label, checked)
                }
                className={`filter-checkbox ${
                  option.defaultChecked ? "" : "unchecked"
                }`}
              />
              <label htmlFor={`${category.title}-${option.label}`} className="filter-label">
                <span>{option.label}</span>
                <span>({option.count})</span>
              </label>
            </div>
          ))}

          {categoryIndex < filterCategories.length - 1 && (
            <Separator style={{ height: "1px", backgroundColor: "#dfe5ed", width: "100%" }} />
          )}
        </div>
      ))}
    </div>
  );
};
