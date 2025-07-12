const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json()); 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MySQL 연결 설정
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // 사용자 이름 (환경에 맞게 변경)
  password: 'password',// 비밀번호 (환경에 맞게 변경)
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

// 이미지 업로드 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});
const upload = multer({ storage });

// 이미지 업로드 API
app.post('/api/upload-profile', upload.single('profile_img'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: '이미지가 첨부되지 않았습니다.' });
  }

  const fileUrl = `http://localhost:${port}/uploads/${req.file.filename}`;
  res.status(200).json({ success: true, url: fileUrl });
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

    // ✅ soft_skills 초기값 (score → skill 순서)
    const raw = [
    { score: 0.0, skill: "커뮤니케이션" },
    { score: 0.0, skill: "협업 태도" },
    { score: 0.0, skill: "적극성" },
    { score: 0.0, skill: "문제 해결력" },
    { score: 0.0, skill: "성실성" },
  ];

    const defaultSoftSkills = JSON.stringify(JSON.stringify(raw));

    const insertSql = `
      INSERT INTO users (username, password, nickname, soft_skills)
      VALUES (?, ?, ?, ?)
    `;
    db.query(insertSql, [username, password, nickname, defaultSoftSkills], (err, result) => {
      if (err) {
        console.error('DB 에러:', err);
        return res.status(500).json({ success: false, message: '회원가입 실패' });
      }

      return res.status(201).json({ success: true, message: '회원가입 완료!' });
    });
  });
});


function safeJsonParse(str, fallback = []) {
  try {
    return JSON.parse(str || "[]");
  } catch (e) {
    console.error("JSON 파싱 오류:", e);
    return fallback;
  }
}
//username으로 정보찾기
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

      return res.status(200).json({
        success: true,
        user: {
          username: user.username,
          nickname: user.nickname,
          profile_img: user.profile_img,
          participation_rate: user.participation_rate,
          trust_score: user.trust_score,
          interests: safeJsonParse(user.interests),
          certifications: safeJsonParse(user.certifications),
          language_tests: safeJsonParse(user.language_tests),
          activity_history: safeJsonParse(user.activity_history),
          soft_skills: safeJsonParse(user.soft_skills),
          project_achievements: safeJsonParse(user.project_achievements),
          tools: safeJsonParse(user.tools),
        }
      });
    } else {
      return res.status(404).json({ success: false, message: '사용자를 찾을 수 없습니다' });
    }
  });
});
//닉네임으로 합격후기 개인정보 업데이트
app.post('/api/update_success_case_score', (req, res) => {
  const { nickname } = req.body;

  if (!nickname) {
    return res.status(400).json({
      success: false,
      message: 'nickname이 필요합니다.'
    });
  }

  const getUserSql = `
    SELECT participation_rate, trust_score
    FROM users
    WHERE nickname = ?
  `;

  db.query(getUserSql, [nickname], (err, userResults) => {
    if (err) {
      console.error('DB 에러(users):', err);
      return res.status(500).json({ success: false, message: 'DB 오류(users)' });
    }

    if (userResults.length === 0) {
      return res.status(404).json({ success: false, message: '해당 닉네임의 유저가 없습니다.' });
    }

    const { participation_rate, trust_score } = userResults[0];

    const getActivitiesSql = `
      SELECT id, success_cases
      FROM activities
      WHERE JSON_CONTAINS(success_cases, JSON_OBJECT('nickname', ?))
    `;

    db.query(getActivitiesSql, [nickname], (err, activityResults) => {
      if (err) {
        console.error('DB 에러(activities select):', err);
        return res.status(500).json({ success: false, message: 'DB 오류(activities)' });
      }

      if (activityResults.length === 0) {
        return res.status(404).json({ success: false, message: 'success_cases에서 해당 nickname을 찾을 수 없습니다.' });
      }

      // 각 활동에 대해 success_cases 배열을 수정
      let updateCount = 0;

      const updatePromises = activityResults.map(({ id, success_cases }) => {
        let updated = false;

        const updatedCases = success_cases.map((item) => {
          if (item.nickname === nickname) {
            updated = true;
            return {
              ...item,
              user_participation_rate: participation_rate,
              trust_score: trust_score
            };
          }
          return item;
        });

        if (!updated) return Promise.resolve(); // 해당 활동엔 해당 nickname 없음

        const updateSql = `
          UPDATE activities
          SET success_cases = ?
          WHERE id = ?
        `;

        return new Promise((resolve, reject) => {
          db.query(updateSql, [JSON.stringify(updatedCases), id], (err) => {
            if (err) return reject(err);
            updateCount++;
            resolve();
          });
        });
      });

      Promise.all(updatePromises)
        .then(() => {
          return res.status(200).json({
            success: true,
            message: `${updateCount}개의 활동에서 success_cases 업데이트 완료`,
            updated_nickname: nickname,
            participation_rate,
            trust_score
          });
        })
        .catch((err) => {
          console.error('DB 에러(update):', err);
          return res.status(500).json({ success: false, message: 'DB 업데이트 중 오류 발생' });
        });
    });
  });
});


//사용자 정보 수정 권장 api
app.patch('/api/update_user_info', (req, res) => {
  const { username, ...fieldsToUpdate } = req.body;

  if (!username) {
    return res.status(400).json({ success: false, message: 'username이 필요합니다.' });
  }

  const allowedFields = [
    "nickname", "profile_img", "participation_rate", "trust_score",
    "interests", "certifications", "language_tests",
    "activity_history", "soft_skills", "project_achievements", "tools"
  ];

  const jsonFields = [
    "interests", "certifications", "language_tests",
    "activity_history", "soft_skills", "project_achievements", "tools"
  ];

  const keys = Object.keys(fieldsToUpdate).filter(key => allowedFields.includes(key));
  if (keys.length === 0) {
    return res.status(400).json({ success: false, message: '수정할 필드가 없습니다.' });
  }

  const setClause = keys.map(key => `${key} = ?`).join(', ');
  const values = keys.map(key => {
    const value = fieldsToUpdate[key];
    return jsonFields.includes(key)
      ? (value === null ? null : JSON.stringify(value))
      : value;
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

app.post('/api/filtered_activities', (req, res) => {
  console.log('filtered_activities 라우터 호출됨');
  const { filters = {}, sort_by, page = 1, limit = 10 } = req.body;
  const offset = (page - 1) * limit;

  const whereConditions = [];

  // main_category 필터 추가
  if (filters.main_category) {
    if (Array.isArray(filters.main_category)) {
      const cats = filters.main_category.filter(cat => cat && cat !== "전체");
      if (cats.length > 0) {
        const escapedCats = cats.map(cat => `'${cat.replace(/'/g, "''")}'`); // 간단한 escape
        whereConditions.push(`main_category IN (${escapedCats.join(",")})`);
      }
      // 빈 배열이면 필터 안 걸음
    } else if (typeof filters.main_category === "string") {
      if (filters.main_category !== "전체" && filters.main_category.trim() !== "") {
        const catEscaped = filters.main_category.replace(/'/g, "''");
        whereConditions.push(`main_category = '${catEscaped}'`);
      }
      // "전체" 또는 빈 문자열이면 필터 안 걸음
    }
  }

  // activity_type 필터
  if (Array.isArray(filters.activity_type) && filters.activity_type.length > 0) {
    const types = filters.activity_type.map(type => `'${type.replace(/'/g, "''")}'`);
    whereConditions.push(`activity_type IN (${types.join(",")})`);
  }

  // institution_tags 필터
  if (Array.isArray(filters.institution_tags) && filters.institution_tags.length > 0) {
    const instTags = filters.institution_tags.map(tag => `'${tag.replace(/'/g, "''")}'`);
    whereConditions.push(`institution_tags IN (${instTags.join(",")})`);
  }

  // recruit_tags 필터 (SET 타입)
  if (Array.isArray(filters.recruit_tags) && filters.recruit_tags.length > 0) {
    const recruit = filters.recruit_tags
      .map(tag => `FIND_IN_SET('${tag.replace(/'/g, "''")}', recruit_tags) > 0`)
      .join(' OR ');
    whereConditions.push(`(${recruit})`);
  }

  // trust_tags 필터 (SET 타입)
  if (Array.isArray(filters.trust_tags) && filters.trust_tags.length > 0) {
    const trust = filters.trust_tags
      .map(tag => `FIND_IN_SET('${tag.replace(/'/g, "''")}', trust_tags) > 0`)
      .join(' OR ');
    whereConditions.push(`(${trust})`);
  }

  const whereClause = whereConditions.length > 0 ? 'WHERE ' + whereConditions.join(' AND ') : '';
  const validSorts = ['view_count', 'rating', 'rating_count'];
  const orderBy = validSorts.includes(sort_by) ? `ORDER BY ${sort_by} DESC` : 'ORDER BY created_at DESC';

  const countSql = `SELECT COUNT(*) AS total_count FROM activities ${whereClause}`;

  db.query(countSql, (countErr, countResults) => {
    if (countErr) {
      console.error('COUNT 에러:', countErr);
      return res.status(500).json({ success: false, message: 'DB count 오류' });
    }

    const totalCount = countResults[0].total_count;

    const dataSql = `
      SELECT
        id,
        main_category,
        title,
        company,
        view_count,
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

    console.log('WHERE 조건:', whereClause);
    console.log('ORDER BY:', orderBy);
    console.log('LIMIT:', limit, 'OFFSET:', offset);

    db.query(dataSql, [parseInt(limit), parseInt(offset)], (dataErr, results) => {
      if (dataErr) {
        console.error('DATA 조회 에러:', dataErr);
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


//대외활동 세부페이지 정보 전달 api
 app.get('/api/activity_detail/:id', (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT *
    FROM activities
    WHERE id = ?
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("DB 오류:", err);
      return res.status(500).json({ success: false, message: "DB 오류" });
    }

    if (results.length === 0) {
      return res.status(404).json({ success: false, message: "해당 활동 없음" });
    }

    const activity = results[0];

    // JSON 파싱이 필요한 필드 목록
    const jsonFields = [
      "info_tags",
      "reviews",
      "success_cases",
      "team_recruitment_posts"
    ];

    jsonFields.forEach(field => {
      if (typeof activity[field] === "string") {
        try {
          activity[field] = JSON.parse(activity[field]);
        } catch (e) {
          console.warn(`JSON 파싱 오류(${field}):`, e);
          activity[field] = []; // 기본값 지정
        }
      }
    });

    // application_start, application_end을 YYYY-MM-DD 형식으로 변환
    if (activity.application_start instanceof Date) {
      activity.application_start = activity.application_start.toISOString().slice(0, 10);
    } else if (typeof activity.application_start === "string") {
      activity.application_start = activity.application_start.slice(0, 10);
    }

    if (activity.application_end instanceof Date) {
      activity.application_end = activity.application_end.toISOString().slice(0, 10);
    } else if (typeof activity.application_end === "string") {
      activity.application_end = activity.application_end.slice(0, 10);
    }

    return res.status(200).json({ success: true, activity });
  });
});




app.listen(port, () => {
  console.log(`🚀 Backend listening at http://localhost:${port}`);
});
