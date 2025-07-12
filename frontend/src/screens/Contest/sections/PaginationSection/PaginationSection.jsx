// PaginationSection.jsx

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";
import "./PaginationSection.css";

export const PaginationSection = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-wrapper">
      <Pagination className="pagination-container">
        <PaginationPrevious
          onClick={handlePrevious}
          className="pagination-prev"
          aria-label="Go to previous page"
          disabled={currentPage === 1}
        >
          <img
            className="pagination-prev-icon"
            alt="Previous page"
            src="https://c.animaapp.com/JL2GbBWa/img/next-button.svg"
          />
        </PaginationPrevious>

        <PaginationContent className="pagination-content">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page} className="pagination-item">
              <PaginationLink
                onClick={() => handlePageChange(page)}
                isActive={currentPage === page}
                className={`pagination-link ${
                  currentPage === page
                    ? "pagination-link-active"
                    : "pagination-link-inactive"
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>

        <PaginationNext
          onClick={handleNext}
          className="pagination-next"
          aria-label="Go to next page"
          disabled={currentPage === totalPages}
        >
          <img
            className="pagination-next-icon"
            alt="Next page"
            src="https://c.animaapp.com/JL2GbBWa/img/arrow.svg"
          />
        </PaginationNext>
      </Pagination>
    </div>
  );
};
