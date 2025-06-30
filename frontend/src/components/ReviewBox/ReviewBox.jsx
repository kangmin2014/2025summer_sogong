/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./ReviewBox.css";

export const ReviewBox = ({
  className,
  starClassName,
  star = "https://c.animaapp.com/yAzWyJNS/img/star-1.svg",
  starClassNameOverride,
  img = "https://c.animaapp.com/yAzWyJNS/img/star-2.svg",
  imgClassName,
  star1 = "https://c.animaapp.com/yAzWyJNS/img/star-3.svg",
  imgClassNameOverride,
  star2 = "https://c.animaapp.com/yAzWyJNS/img/star-4.svg",
  starClassName1,
  star3 = "https://c.animaapp.com/yAzWyJNS/img/star-5.svg",
  starClassName2,
  star4 = "https://c.animaapp.com/yAzWyJNS/img/star-1-1.svg",
  starClassName3,
  star5 = "https://c.animaapp.com/yAzWyJNS/img/star-2-1.svg",
  starClassName4,
  star6 = "https://c.animaapp.com/yAzWyJNS/img/star-3-1.svg",
  starClassName5,
  star7 = "https://c.animaapp.com/yAzWyJNS/img/star-4-1.svg",
  starClassName6,
  star8 = "https://c.animaapp.com/yAzWyJNS/img/star-5-1.svg",
  starClassName7,
  star9 = "https://c.animaapp.com/yAzWyJNS/img/star-1-2.svg",
  starClassName8,
  star10 = "https://c.animaapp.com/yAzWyJNS/img/star-2-2.svg",
  starClassName9,
  star11 = "https://c.animaapp.com/yAzWyJNS/img/star-3-2.svg",
  starClassName10,
  star12 = "https://c.animaapp.com/yAzWyJNS/img/star-4-2.svg",
  starClassName11,
  star13 = "https://c.animaapp.com/yAzWyJNS/img/star-5-2.svg",
}) => {
  return (
    <div className={`review-box ${className}`}>
      <div className="review-list">
        <div className="review-star">
          <img className={`star ${starClassName}`} alt="Star" src={star} />

          <img
            className={`star ${starClassNameOverride}`}
            alt="Star"
            src={img}
          />

          <img className={`star ${imgClassName}`} alt="Star" src={star1} />

          <img
            className={`star ${imgClassNameOverride}`}
            alt="Star"
            src={star2}
          />

          <img className={`star ${starClassName1}`} alt="Star" src={star3} />
        </div>

        <p className="review-title">SK Careers Editor 21기 : SK그룹</p>

        <p className="review-detail">
          자유롭게 근무할 수 있는 환경이 너무 좋았어요!
        </p>
      </div>

      <div className="review-list-2">
        <div className="review-star">
          <img className={`star ${starClassName2}`} alt="Star" src={star4} />

          <img className={`star ${starClassName3}`} alt="Star" src={star5} />

          <img className={`star ${starClassName4}`} alt="Star" src={star6} />

          <img className={`star ${starClassName5}`} alt="Star" src={star7} />

          <img className={`star ${starClassName6}`} alt="Star" src={star8} />
        </div>

        <p className="review-title">SK Careers Editor 21기 : SK그룹</p>

        <p className="review-detail">
          자유롭게 근무할 수 있는 환경이 너무 좋았어요!
        </p>
      </div>

      <div className="review-list-3">
        <div className="review-star">
          <img className={`star ${starClassName7}`} alt="Star" src={star9} />

          <img className={`star ${starClassName8}`} alt="Star" src={star10} />

          <img className={`star ${starClassName9}`} alt="Star" src={star11} />

          <img className={`star ${starClassName10}`} alt="Star" src={star12} />

          <img className={`star ${starClassName11}`} alt="Star" src={star13} />
        </div>

        <p className="review-title">SK Careers Editor 21기 : SK그룹</p>

        <p className="review-detail">
          자유롭게 근무할 수 있는 환경이 너무 좋았어요!
        </p>
      </div>
    </div>
  );
};
