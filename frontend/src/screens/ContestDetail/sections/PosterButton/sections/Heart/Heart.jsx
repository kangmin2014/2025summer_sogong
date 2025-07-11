import React, { useState } from "react";
import "./Heart.css";

export const Heart = ({ className = "" }) => {
  const [liked, setLiked] = useState(false);

  const toggleHeart = () => setLiked(!liked);

  return (
    <div
      className={`heart-icon ${liked ? "on" : "off"} ${className}`}
      onClick={toggleHeart}
    />
  );
};
