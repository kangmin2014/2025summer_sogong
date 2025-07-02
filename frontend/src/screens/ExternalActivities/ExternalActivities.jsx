// ExternalActivities.jsx

import React from "react";
import { FilterComponentSection } from "./sections/FilterComponentSection/FilterComponentSection";
import { FilterSection } from "./sections/FilterSection";
import { ItemListWrapperSection } from "./sections/ItemListWrapperSection";
import { PaginationSection } from "./sections/PaginationSection";
import { SectionTitleSection } from "./sections/SectionTitleSection/SectionTitleSection";
import { Header } from "../Common/Header";
import { Footer } from "../Common/Footer";

import "./ExternalActivities.css";

export const ExternalActivities = () => {
  return (
    <div className="external-wrapper">
      <Header />

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
      </div>

      {/* <Footer /> */}
    </div>
  );
};
