import React from "react";
import "./DetailBox.css";

export const DetailBox = ({ info }) => {
  if (!info) return null;

  return (
    <div className="detail-box">
      <p className="text-wrapper">{info.content}</p>
    </div>
  );
};
