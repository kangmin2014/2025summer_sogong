// ExternalActivities.jsx

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

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/filtered_activities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filters, sort_by: sortBy }),
        });

        const data = await response.json();
        if (data.success) {
          setActivities(data.activities);
        } else {
          console.error("활동 가져오기 실패:", data.message);
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
      }
    };

    fetchActivities();
  }, [filters, sortBy]);

  return (
    <div className="external-wrapper">
      <Header />

      <div className="external-content">
        <FilterComponentSection />
        <SectionTitleSection sortBy={sortBy} setSortBy={setSortBy} />

        <div className="external-body">
          <FilterSection filters={filters} setFilters={setFilters} />

          <div className="external-main">
            <div className="item-list-wrapper-container">
              <ItemListWrapperSection activities={activities} />
            </div>
            <PaginationSection />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

