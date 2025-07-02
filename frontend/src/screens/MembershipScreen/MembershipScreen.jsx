// MembershipScreen.jsx
import React from "react";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import { Membership } from "./sections/Membership/Membership";
import "./MembershipScreen.css";

export const MembershipScreen = () => {
  return (
    <div className="membership-page">
      <div className="membership-wrapper">
        <div className="membership-inner">
          <div className="membership-background" />

          <div className="membership-title">회원가입</div>

          <Footer />
          <Membership />
          <Header />
        </div>
      </div>
    </div>
  );
};
