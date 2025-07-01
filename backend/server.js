const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json()); 

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // 사용자 이름 (환경에 맞게 변경)
  password: 'password',// 비밀번호 (환경에 맞게 변경)
  database: 'teamo_db'    // 수정된 데이터베이스 이름
});

db.connect(err => {
  if (err) {
    console.error('MySQL 연결 실패:', err);
    process.exit(1);
  } else {
    console.log('✅ MySQL 연결 성공');
  }
});

// 로그인 처리
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('DB 에러:', err);
      return res.status(500).json({ success: false, message: '서버 오류' });
    }

    if (results.length > 0) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// 회원가입
app.post('/api/register', (req, res) => {
  const { username, password, nickname } = req.body;

  if (!username || !password || !nickname) {
    return res.status(400).json({ success: false, message: '아이디, 비밀번호, 닉네임을 모두 입력하세요.' });
  }

  const checkSql = 'SELECT * FROM users WHERE username = ?';
  db.query(checkSql, [username], (err, results) => {
    if (err) {
      console.error('DB 에러:', err);
      return res.status(500).json({ success: false, message: '서버 오류' });
    }

    if (results.length > 0) {
      return res.status(409).json({ success: false, message: '이미 존재하는 아이디입니다.' });
    }

    const insertSql = 'INSERT INTO users (username, password, nickname) VALUES (?, ?, ?)';
    db.query(insertSql, [username, password, nickname], (err, result) => {
      if (err) {
        console.error('DB 에러:', err);
        return res.status(500).json({ success: false, message: '회원가입 실패' });
      }

      return res.status(201).json({ success: true, message: '회원가입 완료!' });
    });
  });
});
//사용자 정보 조회
app.post('/api/get_user_info', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ success: false, message: 'username이 필요합니다.' });
  }

  const sql = 'SELECT username, nickname FROM users WHERE username = ?';
  db.query(sql, [username], (err, results) => {
    if (err) {
      console.error('DB 에러:', err);
      return res.status(500).json({ success: false, message: 'DB 오류' });
    }

    if (results.length > 0) {
      const user = results[0];
      return res.status(200).json({
        success: true,
        user: {
          username: user.username,
          nickname: user.nickname,
        }
      });
    } else {
      return res.status(404).json({ success: false, message: '사용자를 찾을 수 없습니다' });
    }
  });
});




app.listen(port, () => {
  console.log(`🚀 Backend listening at http://localhost:${port}`);
});
