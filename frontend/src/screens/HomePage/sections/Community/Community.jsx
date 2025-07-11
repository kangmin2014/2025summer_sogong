import React from "react";
import { CommunityBox } from "../../../../components/CommunityBox";
import { Item } from "../../../../components/Item";
import { TabBox } from "../../../../components/TabBox";
import "./Community.css";

export const Community = () => {
  return (
    <div className="community">
      <div className="community-title">게시판</div>

      <div className="community-index">
        <CommunityBox
          className="community-box-instance"
          img="/img/line-2.svg"
          line="/img/line-1.svg"
          lineClassName="design-component-instance-node"
          lineClassNameOverride="community-box-2"
        />
        <TabBox className="design-component-instance-node-2" />
        <div className="list-box">
          <Item className="design-component-instance-node-2" />
          <Item
            className="design-component-instance-node-2"
            text="02"
            text1="문과 학점 3.4 괜찮을까요?"
            text2="(6)"
          />
          <Item
            className="design-component-instance-node-2"
            text="03"
            text1="인생에서 면접을 한번도 본적이 없어요"
            text2="(4)"
          />
          <Item
            className="design-component-instance-node-2"
            text="04"
            text1="컴학 학점 2점대 어떻게 해야할까요..."
            text2="(8)"
          />
          <Item
            className="design-component-instance-node-2"
            text="05"
            text1="중소/비슷한 직무 인턴 한 번 더"
            text2="(5)"
          />
          <Item
            className="design-component-instance-node-2"
            text="06"
            text1="무스펙인데 대외활동 찾는 법 있을까요"
            text2="(5)"
          />
          <Item
            className="design-component-instance-node-2"
            text="07"
            text1="회계팀 인턴중인데 어떤 기록을 해둬야할까요?"
            text2="(7)"
          />
          <Item
            className="design-component-instance-node-2"
            text="08"
            text1="인턴 복장 고민,,"
            text2="(6)"
          />
          <Item
            className="design-component-instance-node-2"
            text="09"
            text1="알바 면접에서 공백기 질문 들음 ㅋㅋㅋㅋㅋㅋ"
            text2="(8)"
          />
          <Item
            className="design-component-instance-node-2"
            text="10"
            text1=" 반도체 정비사 대외활동 프로그램"
            text2="(13)"
          />
        </div>

        <div className="community-button-frame">
          <div className="community-more-button">
            <div className="community-button-index">커뮤니티 더보기</div>

            <img
              className="arrow"
              alt="Arrow"
              src="https://c.animaapp.com/yAzWyJNS/img/arrow-2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
