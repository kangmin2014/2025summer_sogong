import React from "react";
import { Button } from "../../../../components/ui/button1";
import "./SectionTitleSection.css";

export const SectionTitleSection = ({ sortBy, setSortBy }) => {
  const sortOptions = [
    { id: "view_count", label: "조회순" },
    { id: "rating", label: "높은평점순" },
    { id: "rating_count", label: "리뷰많은순" },
  ];

  const handleSortChange = (option) => {
    setSortBy(option.id);
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
                    sortBy === option.id
                      ? "sort-button-active"
                      : "sort-button-inactive"
                  }`}
                  onClick={() => handleSortChange(option)}
                  aria-pressed={sortBy === option.id}
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
