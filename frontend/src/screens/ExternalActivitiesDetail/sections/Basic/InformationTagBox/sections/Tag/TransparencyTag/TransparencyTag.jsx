import React from "react";
import "./TransparencyTag.css";

export const TransparencyTag = () => {
  return (
    <div className="transparency-tag">
      <div className="div-wrapper">
        <div className="text-wrapper">#심사기준공개</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper">#실제운영인증</div>
      </div>

      <div className="div-wrapper">
        <div className="text-wrapper">#산정기준공개</div>
      </div>
    </div>
  );
};