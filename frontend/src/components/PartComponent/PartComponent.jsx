/* PartComponent.jsx */

import React from "react";
import "./PartComponent.css";

export const PartComponent = ({ tags }) => {
  const tagStyles = {
    "기획": { className: "detail", label: "#기획" },
    "프론트엔드": { className: "text-wrapper", label: "#프론트엔드" },
    "백엔드": { className: "div", label: "#백엔드" },
    "디자인": { className: "detail-2", label: "#디자인" },
    "마케팅": { className: "detail-3", label: "#마케팅" },
    "창업": { className: "detail-4", label: "#창업" },
  };

  return (
    <div className="part-component">
      {tags.map((tag) => {
        const style = tagStyles[tag];
        if (!style) return null;

        return (
          <div key={tag} className="div-wrapper">
            <div className={style.className}>{style.label}</div>
          </div>
        );
      })}
    </div>
  );
};
