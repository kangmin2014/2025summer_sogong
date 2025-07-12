import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ActivityRecordsSection.css";

export const ActivityRecordsSection = ({ certifications, language_tests }) => {
  const languageData = language_tests || [];
  const certificationData = certifications || [];

  return (
    <section className="activity-section">
      <header className="activity-header">
        <h2 className="activity-title">자격증 / 어학</h2>
      </header>

      <Card className="activity-card">
        <CardContent className="activity-card-content">
          <div className="record-group">
            <h3 className="record-group-title">어학</h3>
            {languageData.length > 0 ? (
              languageData.map((item, index) => (
                <div key={`language-${index}`} className="record-item">
                  <div className="record-date">{item.date}</div>
                  <div className="record-desc">{item.score || item.description}</div>
                </div>
              ))
            ) : (
              <div>등록된 어학 기록이 없습니다.</div>
            )}
          </div>

          <div className="record-group certification-group">
            <h3 className="record-group-title">자격증</h3>
            {certificationData.length > 0 ? (
              certificationData.map((item, index) => (
                <div key={`certification-${index}`} className="record-item">
                  <div className="record-date certification-date">{item.date}</div>
                  <div className="record-desc">{item.name || item.description}</div>
                </div>
              ))
            ) : (
              <div>등록된 자격증 기록이 없습니다.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
