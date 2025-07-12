// PosterButton.jsx
import React from "react";
import { ApplyButton } from "./sections/ApplyButton";
import { Heart } from "./sections/Heart";
import { ReportButton } from "./sections/ReportButton";
import "./PosterButton.css";

export const PosterButton = ({ poster }) => {
  return (
    <div className="poster-button">
      <img className="poster" alt="Poster" src={poster} />

      <div className="button-box">
        <ApplyButton />
        <div className="heart-button">
          <Heart className="heart-instance" />
        </div>
        <ReportButton />
      </div>
    </div>
  );
};
