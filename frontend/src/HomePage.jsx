import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';


const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>홈 화면입니다</h1>
      <button onClick={handleLoginClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        로그인
      </button>
    </div>
  );
};

export default HomePage;
