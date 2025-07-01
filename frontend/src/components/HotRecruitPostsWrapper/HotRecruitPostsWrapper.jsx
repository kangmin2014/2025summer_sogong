// HotRecruitPostsWrapper.jsx

import React from "react";
import "./HotRecruitPostsWrapper.css";
import { PartComponent } from "../PartComponent";

export const HotRecruitPostsWrapper = () => {
  const post = {
    title: "[모집] IT 공모전 기획자를 구합니다!",
    description: "- 주 2회 회의 / 협업 툴 사용 가능자\n- 창업 아이디어 함께할 분",
    author: "개굴냥굴"+"님",
    date: "06.24",
    tags: ["기획", "마케팅", "창업", "디자인"],
    dday: "D-5",
  };

  return (
    <div className="hot-recruit-posts-wrapper">
      <div className="content-2">
        <div className="dday-component">
          <div className="text-wrapper-7">{post.dday}</div>
        </div>

        <p className="p">{post.title}</p>

        <p className="content-detail-2">
          {post.description.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>

      <div className="information">
        <div className="label-2">
          <div className="text-wrapper-8">{post.author}</div>
          <div className="dot-2">{""}</div>
          <div className="text-wrapper-8">{post.date}</div>
        </div>

        <PartComponent tags={post.tags} />
      </div>
    </div>
  );
};