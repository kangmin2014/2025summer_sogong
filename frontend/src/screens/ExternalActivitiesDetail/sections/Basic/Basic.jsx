// Basic.jsx

import React from "react";
import { TitleBox } from "./TitleBox";
import { BasicInformationBox } from "./BasicInformationBox";
import { InformationTagBox } from "./InformationTagBox";

import "./Basic.css";

export const Basic = () => {
  return (
    <div className="main-content">
      <TitleBox />
      <BasicInformationBox />

      <div className="title-wrapper">
        <div className="title-2">
          <div className="text-7">활동 정보 태그</div>
        </div>
      </div>

      <InformationTagBox />

      <div className="overlap">
        <div className="title-box-2">
          <div className="text-6">상세 내용</div>
        </div>
      </div>

      <div className="detail-information">
        <p className="element">
          ■ 선발인원 : 00명
          <br /> <br />
          ■ 지원자격 : 대학생 누구나(외국인 유학생 포함)
          <br /> <br />
          (단, 활동기간 중 4학년 2학기 제외 / 타 금융권 홍보대사, 서포터즈 중복 활동 불가)
          <br /> <br />
          ※ 구체적인 사항 홈페이지 참조
          <br /> <br />
          ■ 모집기간 : 2025년 6월 23일(월) ~ 2025년 7월 07일(월) 18시 까지
          <br /> <br />
          ■ 지원 방법 : 신한은행 대학생 홍보대사 홈페이지(www.s20.co.kr)에서 회원가입 후 지원서 작성
          <br /> <br />
          ■ 활동기간 : 5개월(2025년 8월~12월)
          <br /> <br />
          ■ 대외활동 내용
          <br />
          - 신한은행 브랜드 가치 제고활동
          <br />- 대학생 시각의 브랜드·마케팅 인사이트 발굴 및 실무형 아이디어 제안
          <br />- 트렌드를 반영한 온/오프라인 컨텐츠 기획 및 제작
          <br /> <br />
          ■ 활동혜택
          <br />- 최우수활동팀 해외연수 / 우수활동팀 포상
          <br />- 실무 협업 기회 및 신한은행 관련 다양한 경험
          <br />- 매월 활동비 지급
          <br /> <br />
          ■ 선발일정
          <br /> <br />
          - 1차 서류 합격자 발표 : 2025년 7월 25일(금)
          <br /> <br />
          ※ 1차 합격자에 한해 자신을 표현할 수 있는 43초 자기소개 영상 제출(예정)
          <br /> <br />
          ※ 2차 온라인 면접 전형 : 추후 안내
          <br /> <br />
          - 최종합격자 발표 : 2025년 8월 14일(목)
          <br /> <br />
          ※ 발대식 및 오리엔테이션 : 추후 안내
          <br /> <br />
          ※ 지역별 면접일자는 상이하며, 자세한 일정은 서류합격자 발표시 공지합니다.
          <br /> <br />
          ※ 전형별 합격자는 신한은행 대학생 홍보대사 홈페이지에서 발표합니다.
          <br /> <br />
          ※ 상기 일정은 사정에 따라 변경될 수 있습니다.
          <br /> <br />
          ※ 인스타그램 공식 계정: @shindaehong_official
        </p>
      </div>
    </div>
  );
};
