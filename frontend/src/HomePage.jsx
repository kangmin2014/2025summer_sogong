import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';


const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleMemRegClick = () => {
    navigate('/memreg');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>홈 화면입니다</h1>
      <button onClick={handleLoginClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        로그인
      </button>
      <button onClick={handleMemRegClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        회원가입
      </button>
    </div>
  );
};

export default HomePage;
