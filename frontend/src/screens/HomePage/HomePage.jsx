// HomePage.jsx

import React from "react";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";

import { BoxTitle } from "../../components/BoxTitle";
import { ReviewBox } from "../../components/ReviewBox";
import { NotLogin } from "./sections/LoginBox/NotLogin";
import { Login } from "./sections/LoginBox/Login";

import { Community } from "./sections/Community";
import { HotRecruitPosts } from "./sections/HotRecruitPosts";
import { Popularprogram } from "./sections/Popularprogram";
import "./HomePage.css";

export const HomePage = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    window.location.reload();
  };

  return (
    <div className="home-logout" data-model-id="1:3">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="center-group">
            <Popularprogram />
            <Community />
            <HotRecruitPosts />
            
            <div className="banner-login">
              <div className="banner">
                <img
                  className="swiper-slide"
                  alt="Swiper slide"
                  src="https://c.animaapp.com/yAzWyJNS/img/swiper-slide.png"
                />
              </div>

              {isLoggedIn ? <Login onLogout={handleLogout} /> : <NotLogin />}
            </div>

            <div className="best-review">
              <BoxTitle
                className="design-component-instance-node-3"
                text="Best 후기"
              />
              <ReviewBox
                className="design-component-instance-node-3"
                img="https://c.animaapp.com/yAzWyJNS/img/star-2-3.svg"
                imgClassName="review-box-instance"
                imgClassNameOverride="review-box-instance"
                star="https://c.animaapp.com/yAzWyJNS/img/star-1-3.svg"
                star1="https://c.animaapp.com/yAzWyJNS/img/star-3-3.svg"
                star10="https://c.animaapp.com/yAzWyJNS/img/star-2-5.svg"
                star11="https://c.animaapp.com/yAzWyJNS/img/star-3-5.svg"
                star12="https://c.animaapp.com/yAzWyJNS/img/star-4-5.svg"
                star13="https://c.animaapp.com/yAzWyJNS/img/star-5-5.svg"
                star2="https://c.animaapp.com/yAzWyJNS/img/star-4-3.svg"
                star3="https://c.animaapp.com/yAzWyJNS/img/star-5-3.svg"
                star4="https://c.animaapp.com/yAzWyJNS/img/star-1-4.svg"
                star5="https://c.animaapp.com/yAzWyJNS/img/star-2-4.svg"
                star6="https://c.animaapp.com/yAzWyJNS/img/star-3-4.svg"
                star7="https://c.animaapp.com/yAzWyJNS/img/star-4-4.svg"
                star8="https://c.animaapp.com/yAzWyJNS/img/star-5-4.svg"
                star9="https://c.animaapp.com/yAzWyJNS/img/star-1-5.svg"
                starClassName="review-box-instance"
                starClassName1="review-box-instance"
                starClassName10="review-box-instance"
                starClassName11="review-box-instance"
                starClassName2="review-box-instance"
                starClassName3="review-box-instance"
                starClassName4="review-box-instance"
                starClassName5="review-box-instance"
                starClassName6="review-box-instance"
                starClassName7="review-box-instance"
                starClassName8="review-box-instance"
                starClassName9="review-box-instance"
                starClassNameOverride="review-box-instance"
              />
            </div>
          </div>
          <Header />
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};
