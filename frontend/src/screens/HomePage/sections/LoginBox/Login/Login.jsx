// components/Login.jsx
import React, { useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../../../../../components/ui/avatar";
import { Badge } from "../../../../../components/ui/badge";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";
import { useNavigate } from "react-router-dom";

import "./Login.css"; // 분리된 CSS 파일 불러오기

export const Login = ({ onLogout, data }) => {
  const navigate = useNavigate();

  const goToMyPage = () => {
    navigate("/MyPage");
  };

  const [nickname, setNickname] = useState("");
  const [profileimg, setProfileimg] = useState("https://c.animaapp.com/Wk1CLIAN/img/picture@2x.png");

  const getNickname = async () => {
    try {
      const loginID = localStorage.getItem("loginID");
      console.warn("loginID:", loginID);
      if (!loginID || loginID=="false") {
        console.warn("존재하지 않는 회원");
        return;
      }

      const response = await fetch("http://localhost:5000/api/get_user_info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username:loginID }), // backend가 username으로 받음
      });

      if (!response.ok) {
        console.error("Nickname fetch failed");
        return;
      }

      const data = await response.json();

      if (!data || !data.user || !data.user.nickname) {
        console.warn("No nickname found in response");
        return;
      }

      setNickname(data.user.nickname);

            if (data.user.profile_img) {
        setProfileimg(data.user.profile_img);
      }
      // }
    } catch (error) {
      console.error("Error fetching nickname:", error);
    }
  };

  useEffect(() => {
    getNickname();
  }, []);

  const menuItems = [
    { label: "쪽지", count: 0 },
    { label: "알림", count: 0 },
    { label: "보낸 요청", count: null },
    { label: "받은 요청", count: null },
  ];

  const bottomMenuItems = [
    { label: "스크랩한 활동" },
    { label: "작성한 게시글" },
  ];

  return (
    <Card className="login-card">
      <CardContent className="login-content">
        <div className="login-top-box">
          <div className="login-profile">
            <Avatar className="avatar">
              <AvatarImage src={profileimg} className="avatar-img" />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>

            <div className="login-user-info">
              <div className="loginnickname">{nickname || "닉네임 없음"}</div>
              <Button variant="link" className="profile-detail-btn" onClick={goToMyPage}>
                프로필 상세 정보
                <img
                  src="https://c.animaapp.com/Wk1CLIAN/img/arrow.svg"
                  alt="Arrow"
                  className="arrow-icon"
                />
              </Button>

            </div>
          </div>

          <Button onClick={onLogout} variant="outline" className="logout-btn">
            로그아웃
          </Button>
        </div>

        <div className="login-bottom-box">
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <Button variant="ghost" className="menu-button">
                  {item.label}
                  {item.count !== null && (
                    <Badge variant="destructive" className="menu-badge">
                      {item.count}
                    </Badge>
                  )}
                </Button>
                {index < menuItems.length - 1 && <span className="menu-divider">|</span>}
              </React.Fragment>
            ))}
          </div>

          <img
            src="https://c.animaapp.com/Wk1CLIAN/img/line-3.svg"
            alt="Divider"
            className="divider-line"
          />

          <div className="bottom-menu">
            {bottomMenuItems.map((item, index) => (
              <React.Fragment key={index}>
                <Button variant="ghost" className="menu-button">
                  {item.label}
                </Button>
                {index < bottomMenuItems.length - 1 && (
                  <span className="menu-divider">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
