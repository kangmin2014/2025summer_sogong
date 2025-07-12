import React from "react";
import "./ParnassusBox.css";

export const ParnassusBox = ({ title, content }) => {
  return (
    <div className="parnassus-box">
      <div className="parnassus-title-box">
        <div className="rectangle" />
        <div className="parnassus-title">{title}</div>
      </div>
      <div className="parnassus-text-box">
        <p className="parnassus-text">{content}</p>
      </div>
    </div>
  );
};
