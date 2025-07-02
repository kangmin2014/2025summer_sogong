import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ActivitySummarySection.css";

export const ActivitySummarySection = () => {
  const activities = [
    { period: "25.01 ~ 25.02", description: "AI학습법 아이디어톤" },
    { period: "24.04 ~ 24.05", description: "숭실대학교 Wish 해커톤 프론트엔드" },
    { period: "23.06 ~ 23.09", description: "SSU 소프트웨어 공모전 서브 PM" },
    { period: "23.03 ~ 23.12", description: "SSU 소셜이노베이션랩 학부 연구원" },
    { period: "23.01 ~ 23.02", description: "제5회 전국 대학생 아이디어 공모전" },
    { period: "22.09 ~ 22.10", description: "제21회 청소년 해커톤 UX 설계" },
    { period: "22.09 ~ 22.10", description: "제21회 청소년 해커톤 UX 설계" },
  ];

  return (
    <Card className="activity-summary-card">
      <div className="activity-summary-header">
        <h2 className="activity-summary-title">활동 이력 요약</h2>
      </div>

      <CardContent className="activity-summary-content">
        {activities.map((activity, index) => (
          <div key={index} className="activity-summary-item">
            <div className="activity-period">{activity.period}</div>
            <div className="activity-description">{activity.description}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
