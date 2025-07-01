import React from "react";
import { BoxTitle } from "../../../../components/BoxTitle";
import { HotRecruitPostsWrapper } from "../../../../components/HotRecruitPostsWrapper";
import "./HotRecruitPosts.css";

export const HotRecruitPosts = () => {
  return (
    <div className="hot-recruit-posts">
      <BoxTitle className="box-title-2" text="요즘 뜨는 모집글" />
      <div className="div">
        <HotRecruitPostsWrapper />
        <HotRecruitPostsWrapper />
        <HotRecruitPostsWrapper />
      </div>
    </div>
  );
};
