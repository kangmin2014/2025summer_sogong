import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ActivityRecordsSection.css";

export const ActivityRecordsSection = () => {
  const languageData = [
    { date: "2022.07", description: "TOEIC 920점" },
  ];

  const certificationData = [
    { date: "2023.05", description: "GTQ 포토샵 1급" },
    { date: "2022.09", description: "컴퓨터 활용 능력 1급" },
    { date: "", description: "" },
    { date: "", description: "" },
  ];

  return (
    <section className="activity-section">
      <header className="activity-header">
        <h2 className="activity-title">자격증 / 어학</h2>
      </header>

      <Card className="activity-card">
        <CardContent className="activity-card-content">
          <div className="record-group">
            <h3 className="record-group-title">어학</h3>
            {languageData.map((item, index) => (
              <div key={`language-${index}`} className="record-item">
                <div className="record-date">{item.date}</div>
                <div className="record-desc">{item.description}</div>
              </div>
            ))}
          </div>

          <div className="record-group certification-group">
            <h3 className="record-group-title">자격증</h3>
            {certificationData.map((item, index) => (
              <div key={`certification-${index}`} className="record-item">
                <div className="record-date certification-date">{item.date}</div>
                <div className="record-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
