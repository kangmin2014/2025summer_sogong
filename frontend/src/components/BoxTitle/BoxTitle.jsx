/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./BoxTitle.css";

export const BoxTitle = ({ className, text = "요즘 뜨는 모집글" }) => {
  return (
    <div className={`box-title ${className}`}>
      <div className="text-wrapper-3">{text}</div>

      <div className="more-button-2">
        <div className="text">더보기</div>

        <img
          className="img"
          alt="Arrow"
          src="https://c.animaapp.com/yAzWyJNS/img/arrow-4.svg"
        />
      </div>
    </div>
  );
};
