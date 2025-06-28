// LogIn.jsx
import React from "react";
import { Footer } from "../Common/Footer";
import { Header } from "../Common/Header";
import { Login } from "./sections/Login";
import "./LogIn.css";

export const LogIn = () => {
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-background">
          <div className="login-blank" />

          <p className="login-logo">
            <span className="logo-green">TEAM</span>
            <span className="logo-yellow">O</span>
          </p>

          <Login />
          <Header />
        </div>

        <Footer />
      </div>
    </div>
  );
};
