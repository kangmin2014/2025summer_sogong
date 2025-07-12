import React from "react";
import eyeIcon from "./img/eye_icon.svg";
import bubbleIcon from "./img/bubble_icon.svg";
import line from "./img/line.svg";
import "./Basic.css";

export const Basic = () => {
  return (
    <div className="main-content">
      {/* ───────── 제목 & 조회수/댓글 ───────── */}
      <div className="title-box">
        <div className="title">
          <div className="textbox-text">신한은행 대학생 홍보대사</div>
        </div>

        <div className="serve-information">
          <div className="view-box">
            <img className="eye-icon" alt="조회수" src={eyeIcon} />
            <div className="text-wrapper">23,608</div>
          </div>
          <div className="comment-box">
            <img className="bubble-icon" alt="댓글" src={bubbleIcon} />
            <div className="text-wrapper">68</div>
          </div>
        </div>
      </div>

      {/* ───────── 기본 정보 ───────── */}
      <div className="basicinformationbox">
        <div className="basic-information">
          {/* FirstDetail 구조 */}
          <div className="first-detail">
            <div className="div">
              <div className="text-wrapper">주최기관</div>
              <div className="text-wrapper-2">주식회사 신한은행</div>
            </div>

            <div className="div-2">
              <div className="text-wrapper">접수기간</div>
              <div className="receipt-detail">
                <div className="div-3">
                  <div className="text-wrapper-2">시작일</div>
                  <img className="line" alt="Line" src={line} />
                  <div className="text-wrapper-2">2025.06.23</div>
                </div>
                <div className="div-3">
                  <div className="text-wrapper-2">마감일</div>
                  <img className="line" alt="Line" src={line} />
                  <div className="text-wrapper-2">2025.07.07</div>
                </div>
              </div>
            </div>

            <div className="div">
              <div className="text-wrapper">모집인원</div>
              <div className="recruitment-detail">
                <div className="text-wrapper-2">00</div>
                <div className="text-wrapper-2">명</div>
              </div>
            </div>

            <div className="div-2">
              <div className="text-wrapper">우대역량</div>
              <p className="preference-detail">
                외국인 유학생 포함, 콘텐츠 기획/제작 경험, 사진/영상 툴 활용 등
              </p>
            </div>

            <div className="div">
              <div className="text-wrapper">활동혜택</div>
              <div className="text-wrapper-2">활동비 지급, 포상, 해외연수</div>
            </div>

            <div className="div">
              <div className="text-wrapper">활동분야</div>
              <div className="text-wrapper-2">기획, 마케팅</div>
            </div>
          </div>

          {/* SecondDetail 구조 */}
          <div className="second-detail">
            <div className="div">
              <div className="text-wrapper">활동유형</div>
              <div className="text-wrapper-2">대외활동</div>
            </div>

            <div className="target-box">
              <div className="text-wrapper">참여대상</div>
              <div className="text-wrapper-2">대학생</div>
            </div>

            <div className="div">
              <div className="text-wrapper">활동기간</div>
              <div className="period-detail">
                <div className="text-wrapper-2">2025.08</div>
                <div className="and">~</div>
                <div className="text-wrapper-2">2025.12</div>
              </div>
            </div>

            <div className="form-box">
              <div className="text-wrapper">모임형태</div>
              <div className="text-wrapper-2">오프라인</div>
            </div>

            <div className="homepage-box">
              <div className="text-wrapper">홈페이지</div>
              <div className="text-wrapper-2">
                <a href="https://www.s20.co.kr" target="_blank" rel="noreferrer">
                  www.s20.co.kr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───────── 활동 정보 태그 ───────── */}
      <div className="title-wrapper">
        <div className="title-2">
          <div className="contest-text-7">활동 정보 태그</div>
        </div>
      </div>

      <div className="information-tag-box">
        <div className="tag-row">
          <div className="basic-text-wrapper-3">공신력</div>
          <div className="tag">#정부기관주체</div>
          <div className="tag">#공공기관후원</div>
          <div className="tag">#대기업주관</div>
          <div className="tag">#학교공식연계</div>
        </div>
        <div className="tag-row">
          <div className="basic-text-wrapper-3">특전 있음</div>
          <div className="tag">#인턴기회제공</div>
          <div className="tag">#입사우대혜택</div>
          <div className="tag">#성과사업화연계</div>
        </div>
        <div className="tag-row">
          <div className="basic-text-wrapper-3">취업 연계</div>
          <div className="tag">#채용연계기회</div>
          <div className="tag">#직무역량인정</div>
          <div className="tag">#기업과제참여</div>
        </div>
        <div className="tag-row">
          <div className="basic-text-wrapper-3">포트폴리오</div>
          <div className="tag">#기획서제출</div>
          <div className="tag">#UXUI작품제작</div>
          <div className="tag">#결과물활용가능</div>
          <div className="tag">#실제서비스기획</div>
        </div>
        <div className="tag-row">
          <div className="basic-text-wrapper-3">투명성 검증</div>
          <div className="tag">#평가기준공유</div>
          <div className="tag">#운영방식공개</div>
          <div className="tag">#산정기준공개</div>
        </div>
      </div>

      {/* ───────── 상세 내용 ───────── */}
      <div className="overlap">
        <div className="title-box-2">
          <div className="contest-text-6">상세 내용</div>
        </div>
      </div>

      <div className="detail-information">
        <p className="element">
          ■ 선발인원 : 00명
          <br /><br />
          ■ 지원자격 : 대학생 누구나(외국인 유학생 포함)
          <br /><br />
          (단, 활동기간 중 4학년 2학기 제외 / 타 금융권 홍보대사, 서포터즈 중복 활동 불가)
          <br /><br />
          ※ 구체적인 사항 홈페이지 참조
          <br /><br />
          ■ 모집기간 : 2025년 6월 23일(월) ~ 2025년 7월 07일(월) 18시 까지
          <br /><br />
          ■ 지원 방법 : 신한은행 대학생 홍보대사 홈페이지(www.s20.co.kr)에서 회원가입 후 지원서 작성
          <br /><br />
          ■ 활동기간 : 5개월(2025년 8월~12월)
          <br /><br />
          ■ 대외활동 내용
          <br />
          - 신한은행 브랜드 가치 제고활동
          <br />- 대학생 시각의 브랜드·마케팅 인사이트 발굴 및 실무형 아이디어 제안
          <br />- 트렌드를 반영한 온/오프라인 콘텐츠 기획 및 제작
          <br /><br />
          ■ 활동혜택
          <br />- 최우수활동팀 해외연수 / 우수활동팀 포상
          <br />- 실무 협업 기회 및 신한은행 관련 다양한 경험
          <br />- 매월 활동비 지급
          <br /><br />
          ■ 선발일정
          <br /><br />
          - 1차 서류 합격자 발표 : 2025년 7월 25일(금)
          <br /><br />
          ※ 1차 합격자에 한해 자신을 표현할 수 있는 43초 자기소개 영상 제출(예정)
          <br /><br />
          ※ 2차 온라인 면접 전형 : 추후 안내
          <br /><br />
          - 최종합격자 발표 : 2025년 8월 14일(목)
          <br /><br />
          ※ 발대식 및 오리엔테이션 : 추후 안내
          <br /><br />
          ※ 지역별 면접일자는 상이하며, 자세한 일정은 서류합격자 발표시 공지합니다.
          <br /><br />
          ※ 전형별 합격자는 신한은행 대학생 홍보대사 홈페이지에서 발표합니다.
          <br /><br />
          ※ 상기 일정은 사정에 따라 변경될 수 있습니다.
          <br /><br />
          ※ 인스타그램 공식 계정: @shindaehong_official
        </p>
      </div>
    </div>
  );
};
