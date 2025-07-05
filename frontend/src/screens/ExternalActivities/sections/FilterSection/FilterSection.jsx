// FilterSection.jsx

import React from "react";
import { Checkbox } from "../../../../components/ui/mycheckbox";
import { Separator } from "../../../../components/ui/separator";
import "./FilterSection.css";

export const FilterSection = ({ filters, setFilters }) => {
  const filterCategories = [
    {
      title: "활동 유형",
      field: "activity_type",
      options: ["개인 활동", "팀 활동"],
    },
    {
      title: "주최 기관",
      field: "institution_tags",
      options: ["대기업", "중소기업", "스타트업", "공공기관/공기업", "비영리단체/협회"],
    },
    {
      title: "모임 형태",
      field: "recruit_tags",
      options: ["온라인", "오프라인"],
    },
    {
      title: "신뢰도 태그",
      field: "trust_tags",
      options: ["보상/혜택", "스펙/이력서", "효율/가성비", "리스크 회피", "투명성 검증"],
    },
  ];

  // 체크박스 체크 상태 변경 핸들러
  const handleCheckboxChange = (field, optionLabel, checked) => {
    const current = new Set(filters[field] || []);

    let valueToAdd = optionLabel;
    if (field === "activity_type") {
      if (optionLabel === "개인 활동") valueToAdd = "개인";
      else if (optionLabel === "팀 활동") valueToAdd = "팀";
    }

    if (checked) {
      current.add(valueToAdd);
    } else {
      current.delete(valueToAdd);
    }

    setFilters({
      ...filters,
      [field]: Array.from(current),
    });
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
          key={category.field}
          className={`filter-category ${
            categoryIndex === filterCategories.length - 1
              ? "filter-category-last"
              : ""
          }`}
        >
          <div className="filter-category-title">
            <h3>{category.title}</h3>
          </div>

          {category.options.map((optionLabel) => {
            // 체크 여부 판단 (activity_type 옵션은 내부 값과 다름)
            const isChecked =
              category.field === "activity_type"
                ? filters.activity_type?.includes(
                    optionLabel === "개인 활동"
                      ? "개인"
                      : optionLabel === "팀 활동"
                      ? "팀"
                      : ""
                  ) || false
                : filters[category.field]?.includes(optionLabel) || false;

            return (
              <div key={optionLabel} className="filter-option">
                <Checkbox
                  id={`${category.field}-${optionLabel}`}
                  checked={isChecked}
                  onCheckedChange={(checked) =>
                    handleCheckboxChange(category.field, optionLabel, checked)
                  }
                  className="filter-checkbox"
                />
                <label htmlFor={`${category.field}-${optionLabel}`} className="filter-label">
                  <span>{optionLabel}</span>
                </label>
              </div>
            );
          })}

          {categoryIndex < filterCategories.length - 1 && (
            <Separator style={{ height: "1px", backgroundColor: "#dfe5ed", width: "100%" }} />
          )}
        </div>
      ))}
    </div>
  );
};
