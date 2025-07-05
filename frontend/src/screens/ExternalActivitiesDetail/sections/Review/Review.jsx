// Review.jsx

import React, { useState } from "react";
import { ReviewBox } from "./sections/ReviewBox";
import { ReviewTitleBox } from "./sections/ReviewTitleBox";
import { PaginationSection } from "./sections/PaginationSection";
import pictureImage from "../../img/picture.png";
import "./Review.css";

export const Review = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 9;

  const reviews = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    nickname: `사용자${i + 1}`,
    date: "2025.07.01.",
    title: `신한은행 홍보대사 후기 ${i + 1}`,
    content:
      i % 3 === 0
        ? "홍보대사 활동이라고 해서 단순히 브랜드 홍보만 하는 줄 알았는데, 생각보다 훨씬 체계적이고 배울 게 많았습니다. 특히 금융 콘텐츠를 직접 기획하고 제작하는 과정에서 실무적인 감각을 많이 익힐 수 있었어요. 저는 주로 카드뉴스 제작, SNS 운영, 오프라인 행사 참여 위주로 활동했는데, 금융 관련 지식을 쉽게 풀어 쓰는..."
        : "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
    likes: 30 + i * 5,
    comments: 3 + i,
    rating: (i % 5) + 1,
    img: pictureImage,
  }));

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, endIndex);

  return (
    <div className="external-activities-screen review">
      <div className="external-activities">
        <div className="overlap-group">
          <ReviewTitleBox totalCount={reviews.length} />

          {currentReviews.map((review) => (
            <ReviewBox key={review.id} review={review} />
          ))}

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
