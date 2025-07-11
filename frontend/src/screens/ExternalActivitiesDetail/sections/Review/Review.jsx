// Review.jsx

import React, { useState } from "react";
import { ReviewBox } from "./sections/ReviewBox";
import { ReviewTitleBox } from "./sections/ReviewTitleBox";
import { PaginationSection } from "./sections/PaginationSection";
import "./Review.css";

export const Review = ({ reviews = [], setSelectedTab, setSelectedReview }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  const handleReviewClick = (review) => {
    setSelectedReview(review);
    setSelectedTab("ReviewMore");
  };

  return (
    <div className="external-activities-screen review">
      <div className="external-activities">
        <div className="overlap-group">
          <ReviewTitleBox totalCount={reviews.length} />

          {currentReviews.length > 0 ? (
            currentReviews.map((review, index) => (
              <ReviewBox
                key={index}
                review={review}
                onClick={() => handleReviewClick(review)}
              />
            ))
          ) : (
            <div className="no-reviews">아직 등록된 리뷰가 없습니다.</div>
          )}

          <div className="detail-pagination-wrapper">
            <PaginationSection
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
