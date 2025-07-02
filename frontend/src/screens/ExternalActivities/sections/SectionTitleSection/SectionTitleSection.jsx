import React, { useState } from "react";
import { Button } from "../../../../components/ui/button1";
import "./SectionTitleSection.css";

export const SectionTitleSection = () => {
  const [selectedSort, setSelectedSort] = useState("인기순");

  const sortOptions = [
    { id: "popular", label: "인기순" },
    { id: "views", label: "조회순" },
    { id: "rating", label: "높은평점순" },
    { id: "reviews", label: "리뷰많은순" },
  ];

  const handleSortChange = (option) => {
    setSelectedSort(option.label);
  };

  return (
    <section
      className="section-title"
      role="region"
      aria-label="검색 결과 헤더"
    >
      <header className="section-title-text">
        &apos;전체&apos; 검색 결과
      </header>

      <div className="section-controls">
        <div className="section-controls-inner">
          <div
            className="section-result-count"
            role="status"
            aria-label="검색 결과 수"
          >
            (2,414)
          </div>

          <nav
            className="section-sort-options"
            role="navigation"
            aria-label="정렬 옵션"
          >
            {sortOptions.map((option, index) => (
              <React.Fragment key={option.id}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`sort-button ${
                    selectedSort === option.label
                      ? "sort-button-active"
                      : "sort-button-inactive"
                  }`}
                  onClick={() => handleSortChange(option)}
                  aria-pressed={selectedSort === option.label}
                  role="button"
                >
                  {option.label}
                </Button>

                {index < sortOptions.length - 1 && (
                  <img
                    className="sort-divider"
                    alt=""
                    src={`/img/line-${6 + index}.svg`}
                    role="presentation"
                  />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};