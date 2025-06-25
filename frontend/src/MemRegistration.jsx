import React from "react";
import "./MemRegistration.css";

export const MemRegistration = () => {
    return (
        <div className="Membership-Registration">
                <div className="div">
                    <div className="Reg">
                        <div className="Reg-text">회원가입</div>
                    </div>

                <div className="register">
                    <div className="ID">
                        <div className="text-wrapper-2">아이디</div>

                        <div className="ID-box" />
                    </div>

                    <div className="password">
                        <div className="text-wrapper-2-1">비밀번호</div>

                        <div className="password-box" />

                    </div>

                    <div className="passwordcheck">
                        <div className="text-wrapper-2">비밀번호 확인</div>

                        <div className="passwordcheck-box" />

                    </div>

                    <div className="nickname">
                        <div className="text-wrapper-2">닉네임</div>

                        <div className="nickname-box" />

                    </div>

                    <div className="register-button">
                        <div className="register-text">회원가입</div>
                    </div>
                </div>


                <header className="header">
                    <div className="frame">
                        <div className="TEAMO-wrapper">
                            <p className="p">
                                <span className="text-wrapper">TEAM</span>

                                <span className="span">O</span>
                            </p>
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
