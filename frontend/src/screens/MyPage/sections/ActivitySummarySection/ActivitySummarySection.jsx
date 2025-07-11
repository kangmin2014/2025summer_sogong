import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ActivitySummarySection.css";

export const ActivitySummarySection = ({ activity_history }) => {
  const activities = activity_history || [];

  // 출력용 변환 함수 (이미 '25.06 ~ 26.05' 형태라면 그대로 출력해도 됨)
  const formatDisplayDate = (dateString) => {
    if (!dateString) return "";
    // 만약 DB가 '2025.06 ~ 2026.05' 형식이면 그대로 쓰고,
    // 아니면 간단히 그대로 출력해도 무방
    return dateString;
  };

  return (
    <Card className="activity-summary-card">
      <div className="activity-summary-header">
        <h2 className="activity-summary-title">활동 이력 요약</h2>
      </div>

      <CardContent className="activity-summary-content">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div key={index} className="activity-summary-item">
              <div className="activity-period">
                {formatDisplayDate(activity.date)}
              </div>
              <div className="activity-description">{activity.description}</div>
            </div>
          ))
        ) : (
          <div className="activity-summary-empty">등록된 활동 이력이 없습니다.</div>
        )}
      </CardContent>
    </Card>
  );
};
