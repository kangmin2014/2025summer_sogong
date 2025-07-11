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
  const [mainCategoryFilter, setMainCategoryFilter] = useState("전체"); // 최상단 카테고리 필터

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

  // mainCategoryFilter id -> DB ENUM 값 매핑
  const mainCategoryMap = {
    전체: null,
    개발: "개발, 프로그래밍",
    디자인: "디자인, 아트",
    기획: "기획, 경영, 마케팅",
    창업: "창업, 자기계발",
    경제: "경제, 금융",
    봉사: "봉사, 환경",
    행사: "행사, 페스티벌",
    기타: null, // 기타는 DB ENUM에 없으므로 필터 제외하거나 별도처리
  };

  // 필터나 정렬, 최상단 카테고리 변경 시 페이지 1로 초기화
  useEffect(() => {
    setCurrentPage(1);
  }, [JSON.stringify(filters), sortBy, mainCategoryFilter]);

  // 필터/정렬/페이지/최상단 카테고리 변경 시 데이터 요청
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        // mainCategoryFilter id를 DB ENUM 값으로 변환 후 filters에 추가
        const filtersToSend = { ...filters };
        const mappedCategory = mainCategoryMap[mainCategoryFilter];
        if (mappedCategory) {
          filtersToSend.main_category = mappedCategory;
        } else {
          // 전체 또는 기타(null)인 경우 필터에서 제외
          delete filtersToSend.main_category;
        }

        const res = await fetch("http://localhost:5000/api/filtered_activities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            filters: filtersToSend,
            sort_by: sortBy,
            page: currentPage,
            limit,
          }),
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
  }, [JSON.stringify(filters), sortBy, currentPage, mainCategoryFilter]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="external-wrapper">
      <Header />

      <div className="external-content">
        {/* 최상단 카테고리 필터 상태를 넘겨줌 */}
        <FilterComponentSection
          activeFilter={mainCategoryFilter}
          setActiveFilter={setMainCategoryFilter}
        />

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
