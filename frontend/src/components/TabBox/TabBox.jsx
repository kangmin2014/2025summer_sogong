/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./TabBox.css";

export const TabBox = ({ className }) => {
  return (
    <div className={`tab-box ${className}`}>
      <div className="tab">실시간</div>

      <div className="tab-2">주간</div>

      <div className="tab-2">월간</div>

      <div className="tab-2">댓글순</div>

      <div className="tab-2">추천순</div>
    </div>
  );
};