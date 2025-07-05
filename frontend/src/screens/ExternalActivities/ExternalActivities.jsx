import React, { useState, useEffect } from "react";
import { FilterComponentSection } from "./sections/FilterComponentSection/FilterComponentSection";
import { FilterSection } from "./sections/FilterSection";
import { ItemListWrapperSection } from "./sections/ItemListWrapperSection";
import { PaginationSection } from "./sections/PaginationSection";
import { SectionTitleSection } from "./sections/SectionTitleSection/SectionTitleSection";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

import "./ExternalActivities.css";

export const ExternalActivities = () => {
  const [filters, setFilters] = useState({
    activity_type: [],
    institution_tags: [],
    recruit_tags: [],
    trust_tags: [],
  });

  const [sortBy, setSortBy] = useState("view_count");
  const [activities, setActivities] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 10;

  // 필터나 정렬 변경 시 페이지 1로 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [JSON.stringify(filters), sortBy]);

  // 필터/정렬/페이지 변경 시 데이터 요청
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/filtered_activities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filters, sort_by: sortBy, page: currentPage, limit }),
        });

        const data = await res.json();
        if (data.success) {
          setActivities(data.activities);
          setTotalCount(data.total_count);
        } else {
          console.error("활동 가져오기 실패:", data.message);
          setActivities([]);
          setTotalCount(0);
        }
      } catch (e) {
        console.error("네트워크 오류:", e);
        setActivities([]);
        setTotalCount(0);
      }
    };

    fetchActivities();
  }, [JSON.stringify(filters), sortBy, currentPage]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="external-wrapper">
      <Header />

      <div className="external-content">
        <FilterComponentSection />
        <SectionTitleSection
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalCount={totalCount}
        />

        <div className="external-body">
          <FilterSection filters={filters} setFilters={setFilters} />

          <div className="external-main">
            <div className="item-list-wrapper-container">
              <ItemListWrapperSection activities={activities} />
            </div>

            <PaginationSection
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
