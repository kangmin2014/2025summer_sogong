import React from "react";
import { Link } from "react-router-dom";
// import frame61 from "./frame-61.svg";
import "./login.css";
// import vector from "./vector.svg";

export const LogInPage = () => {
    return (
        <div className="log-in-page">
            <div className="div">
                <p className="TEAMO">
                    <span className="text-wrapper">TEAM</span>

                    <span className="span">O</span>
                </p>

                <div className="login">
                    <div className="ID">
                        <div className="text-wrapper-2">아이디</div>

                        <div className="ID-box" />
                    </div>

                    <div className="password">
                        <div className="text-wrapper-2-1">비밀번호</div>

                        <div className="password-box" />

                        <div className="did-you-forget-pw">비밀번호를 잊어버리셨나요?</div>
                    </div>

                    <div className="login-button">
                        <div className="login-text">로그인</div>
                    </div>

                    <div className="member-check">
                        <div className="check-text">아직 TEAMO가 아니신가요?</div>

                        <div className="register-button">회원가입</div>
                    </div>
                </div>

                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-company-name">회사이름</div>

                        <div className="footer-info-row">
                        <div className="footer-text">서울특별시 동작구 사당로 50</div>
                        <div className="footer-divider">|</div>
                        <div className="footer-text">사업자등록번호. 108-82-00391</div>
                        <div className="footer-divider">|</div>
                        <div className="footer-text">TEAMO 문의하기</div>
                        </div>

                        <div className="footer-info-row">
                        <div className="footer-text">이용약관</div>
                        <div className="footer-divider">|</div>
                        <div className="footer-text">개인정보처리방침</div>
                        <div className="footer-divider">|</div>
                        <div className="footer-text">커뮤니티이용규칙</div>
                        <div className="footer-divider">|</div>
                        <div className="footer-text">공지사항</div>
                        </div>

                        <img
                        className="footer-line"
                        alt="Line"
                        src="https://c.animaapp.com/cj8sj9GB/img/line.svg"
                        />
                    </div>

                    <p className="footer-copyright">
                        © 2025 By TEAMO Inc. All Rights Reserved.
                    </p>
                    </div>

                <header className="header">
                    <div className="frame">
                        <div className="TEAMO-wrapper">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <p className="p">
                                    <span className="text-wrapper">TEAM</span>
                                    <span className="span">O</span>
                                </p>
                            </Link>
                        </div>

                        {/* <img className="img" alt="Frame" src={frame61} /> */}
                    </div>

                    <div className="frame-2">
                        <div className="navbar">
                            <div className="text-wrapper-3">홈</div>

                            <div className="text-wrapper-3">대외활동</div>

                            <div className="text-wrapper-3">공모전</div>

                            <div className="text-wrapper-3">스터디</div>

                            <div className="text-wrapper-3">게시판</div>
                        </div>

                        <div className="frame-3">
                            <div className="text-wrapper-4">검색어를 입력해주세요...</div>

                            {/* <img className="vector" alt="Vector" src={vector} /> */}
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};
