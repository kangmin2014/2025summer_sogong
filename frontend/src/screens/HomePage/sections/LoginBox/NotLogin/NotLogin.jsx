// components/NotLogin.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import "./NotLogin.css";

export const NotLogin = () => {
  const navigate = useNavigate();

  return (
    <Card className="not-login-card">
      <CardContent className="not-login-content">
        <div className="not-login-top">
          <img
            className="not-login-img"
            alt="Notloginimg"
            src="https://c.animaapp.com/Wk1CLIAN/img/notloginimg.svg"
          />
          <div className="not-login-text">
            로그인하고 팀원을 찾아보세요!
          </div>
        </div>

        <Button
          onClick={() => navigate("/login")}
          className="not-login-btn login"
        >
          로그인
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate("/memreg")}
          className="not-login-btn signup"
        >
          회원가입
        </Button>
      </CardContent>
    </Card>
  );
};
