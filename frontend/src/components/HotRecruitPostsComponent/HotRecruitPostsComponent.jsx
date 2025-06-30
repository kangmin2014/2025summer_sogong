/* HotRecruitPostsComponent.jsx */

import React from "react";
import "./HotRecruitPostsComponent.css";
import { PartComponent } from "../PartComponent";

export const HotRecruitPostsComponent = ({ className }) => {
    const tags = ["기획", "프론트엔드", "디자인", "창업"]; // DB에서 받아오는 배열

    return (
        <div className={`hot-recruit-posts ${className || ""}`}>
            <div className="content">
                <div className="dday-component">
                    <div className="text-wrapper">D-5</div>
                </div>

                <p className="content-title">[모집] IT 공모전 기획자를 구합니다!</p>

                <p className="content-detail">
                    - 주 2회 회의 / 협업 툴 사용 가능자
                    <br />- 창업 아이디어 함께할 분
                </p>
            </div>

            <div className="information">
                <div className="label">
                    <div className="div">개굴냥굴님</div>

                    <div className="dot">{""}</div>

                    <div className="div">06.24</div>
                </div>

                <PartComponent tags={tags} />
            </div>
        </div>
    )
}