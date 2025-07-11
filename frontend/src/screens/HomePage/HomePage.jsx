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
    localStorage.setItem("loginID", "false");
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
              <ReviewBox className="design-component-instance-node-3" />
            </div>
          </div>
          <Header />
        </div>

        {/* <Footer /> */}
      </div>
    </div>
  );
};
