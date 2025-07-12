import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ActivitySummarySection.css";

export const ActivitySummarySection = ({ activity_history }) => {
  const activities = activity_history || [];
  console.log("activity_history props:", activity_history);

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
                {activity.startDate && activity.endDate
                  ? `${activity.startDate} ~ ${activity.endDate}`
                  : activity.date}
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
