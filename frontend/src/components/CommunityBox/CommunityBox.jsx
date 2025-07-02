/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./CommunityBox.css";

export const CommunityBox = ({
  className,
  lineClassName,
  line = "https://c.animaapp.com/yAzWyJNS/img/line-1.svg",
  lineClassNameOverride,
  img = "https://c.animaapp.com/yAzWyJNS/img/line-2.svg",
}) => {
  return (
    <div className={`community-box ${className}`}>
      <div className="community-2">
        <div className="frame-2">
          <div className="text-wrapper-5">자유 게시판</div>
        </div>

        <img className={`line ${lineClassName}`} alt="Line" src={line} />
      </div>

      <div className="community-2">
        <div className="frame-2">
          <div className="text-wrapper-6">정보 게시판</div>
        </div>

        <img
          className={`line-2 ${lineClassNameOverride}`}
          alt="Line"
          src={img}
        />
      </div>
    </div>
  );
};
