import React from "react";
import "./TagGather.css";

export const TagGather = () => {
  return (
    <div className="tag-gather">
      <div className="div-wrapper">
        <div className="text-wrapper">보상/혜택</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper">스펙/이력서</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper">효율/가성비</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper">리스크 회피</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper">투명성/검증</div>
      </div>
    </div>
  );
};