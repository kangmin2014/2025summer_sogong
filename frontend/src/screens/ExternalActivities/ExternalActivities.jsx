// ExternalActivities.jsx

import React from "react";
import { FilterComponentSection } from "./sections/FilterComponentSection/FilterComponentSection";
import { FilterOptionsSection } from "./sections/FilterOptionsSection/FilterOptionsSection";
import { FilterSection } from "./sections/FilterSection";
import { ItemListSection } from "./sections/ItemListSection/ItemListSection";
import { ItemListWrapperSection } from "./sections/ItemListWrapperSection";
import { PaginationSection } from "./sections/PaginationSection";
import { SectionTitleSection } from "./sections/SectionTitleSection/SectionTitleSection";
import { Header } from "../Common/Header";
import "./ExternalActivities.css";

export const ExternalActivities = () => {
  return (
    <div className="external-wrapper" data-model-id="1:6">
      <div className="external-container">
        <div className="external-content">
          <FilterComponentSection />
          <SectionTitleSection />
          <div className="external-body">
            <FilterSection />
            <div className="external-main">

              <div className="item-list-wrapper-container">
                {[...Array(3)].map((_, idx) => (
                  <ItemListWrapperSection key={idx} />
                ))}
              </div>
              
              <PaginationSection />
            </div>
          </div>
          <Header />
        </div>
      </div>
    </div>
  );
};
