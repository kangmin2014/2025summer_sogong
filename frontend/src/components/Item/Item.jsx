/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./Item.css";

export const Item = ({
  className,
  text = "01",
  text1 = "전자과 3학년 스펙 고민입니다",
  text2 = "(4)",
}) => {
  return (
    <div className={`item ${className}`}>
      <div className="element">{text}</div>

      <div className="frame-3">
        <div className="element-2">{text1}</div>

        <div className="comment-count">{text2}</div>
      </div>
    </div>
  );
};
