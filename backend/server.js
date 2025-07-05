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
  password: '3412',// 비밀번호 (환경에 맞게 변경)
  database: 'teamo_db'    // 수정된 데이터베이스 이름
});
// DB 연결 성공했는지 알림
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
// 사용자 정보 전체 조회 (확장 버전)
app.post('/api/get_user_info', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ success: false, message: 'username이 필요합니다.' });
  }

  const sql = `
    SELECT 
      username, nickname, profile_img,
      participation_rate, trust_score,
      interests, certifications, language_tests,
      activity_history, soft_skills, 
      project_achievements, tools
    FROM users 
    WHERE username = ?
  `;

  db.query(sql, [username], (err, results) => {
    if (err) {
      console.error('DB 에러:', err);
      return res.status(500).json({ success: false, message: 'DB 오류' });
    }

    if (results.length > 0) {
      const user = results[0];

      return res.status(200).json({  //리턴하는 json에는 success와 user 항목이 있고, user 안에는 DB collumn이 있음
        success: true,
        user: {
          username: user.username,
          nickname: user.nickname,
          profile_img: user.profile_img,
          participation_rate: user.participation_rate,
          trust_score: user.trust_score,
          interests: JSON.parse(user.interests || "[]"),
          certifications: JSON.parse(user.certifications || "[]"),
          language_tests: JSON.parse(user.language_tests || "[]"),
          activity_history: JSON.parse(user.activity_history || "[]"),
          soft_skills: JSON.parse(user.soft_skills || "[]"),
          project_achievements: JSON.parse(user.project_achievements || "[]"),
          tools: JSON.parse(user.tools || "[]")
        }
      });
    } else {
      return res.status(404).json({ success: false, message: '사용자를 찾을 수 없습니다' });
    }
  });
});


//사용자 정보 수정

app.patch('/api/update_user_info', (req, res) => {
  const { username, ...fieldsToUpdate } = req.body;

  // username이 반드시 있어야 함
  if (!username) {
    return res.status(400).json({ success: false, message: 'username이 필요합니다.' });
  }

  // 수정할 필드가 하나도 없으면 거절
  const keys = Object.keys(fieldsToUpdate);
  if (keys.length === 0) {
    return res.status(400).json({ success: false, message: '수정할 필드가 없습니다.' });
  }

  // SET 구문 생성: key = ? 형태로 조합
  const setClause = keys.map(key => `${key} = ?`).join(', ');
  const values = keys.map(key => {
    const value = fieldsToUpdate[key];
    // JSON 필드는 문자열로 저장
    const jsonFields = [
      "interests", "certifications", "language_tests",
      "activity_history", "soft_skills", "project_achievements", "tools"
    ];
    return jsonFields.includes(key) ? JSON.stringify(value) : value;
  });

  const sql = `UPDATE users SET ${setClause} WHERE username = ?`;

  db.query(sql, [...values, username], (err, result) => {
    if (err) {
      console.error("DB 수정 에러:", err);
      return res.status(500).json({ success: false, message: 'DB 수정 실패' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: '해당 사용자를 찾을 수 없습니다.' });
    }

    return res.status(200).json({ success: true, message: '사용자 정보가 성공적으로 수정되었습니다.' });
  });
});


//필터에 따라서 대외활동 전달
app.post('/api/filtered_activities', (req, res) => {
  console.log('filtered_activities 라우터 호출됨');
  const { filters, sort_by, page = 1, limit = 10 } = req.body;
  const offset = (page - 1) * limit;

  const whereConditions = [];

  if (filters.activity_type && filters.activity_type.length > 0) {
    const types = filters.activity_type.map(type => `'${type}'`).join(',');
    whereConditions.push(`activity_type IN (${types})`);
  }

  if (filters.institution_tags && filters.institution_tags.length > 0) {
    const inst = filters.institution_tags
      .map(tag => `FIND_IN_SET('${tag}', institution_tags) > 0`)
      .join(' OR ');
    whereConditions.push(`(${inst})`);
  }

  if (filters.recruit_tags && filters.recruit_tags.length > 0) {
    const recruit = filters.recruit_tags
      .map(tag => `FIND_IN_SET('${tag}', recruit_tags) > 0`)
      .join(' OR ');
    whereConditions.push(`(${recruit})`);
  }

  if (filters.trust_tags && filters.trust_tags.length > 0) {
    const trust = filters.trust_tags
      .map(tag => `FIND_IN_SET('${tag}', trust_tags) > 0`)
      .join(' OR ');
    whereConditions.push(`(${trust})`);
  }

  const whereClause = whereConditions.length > 0 ? 'WHERE ' + whereConditions.join(' AND ') : '';
  const validSorts = ['view_count', 'rating', 'rating_count'];
  const orderBy = validSorts.includes(sort_by) ? `ORDER BY ${sort_by} DESC` : 'ORDER BY created_at DESC';

  // 1) 전체 개수 조회 쿼리
  const countSql = `SELECT COUNT(*) AS total_count FROM activities ${whereClause}`;

  db.query(countSql, (countErr, countResults) => {
    if (countErr) {
      console.error('COUNT 에러:', countErr);
      return res.status(500).json({ success: false, message: 'DB count 오류' });
    }

    const totalCount = countResults[0].total_count;

    // 2) 데이터 조회 쿼리
    const dataSql = `
      SELECT
        id,
        main_category,
        title,
        company,
        view_count,
        comment_count,
        rating,
        rating_count,
        DATE_FORMAT(deadline, '%Y-%m-%d') AS deadline,
        created_at,
        activity_type,
        institution_tags,
        recruit_tags,
        trust_tags,
        thumbnail,
        status
      FROM activities
      ${whereClause}
      ${orderBy}
      LIMIT ? OFFSET ?
    `;

    db.query(dataSql, [parseInt(limit), parseInt(offset)], (dataErr, results) => {
      if (dataErr) {
        console.error('DB 에러:', dataErr);
        return res.status(500).json({ success: false, message: 'DB 오류' });
      }

      return res.status(200).json({
        success: true,
        activities: results,
        total_count: totalCount,
      });
    });
  });
});



app.listen(port, () => {
  console.log(`🚀 Backend listening at http://localhost:${port}`);
});
