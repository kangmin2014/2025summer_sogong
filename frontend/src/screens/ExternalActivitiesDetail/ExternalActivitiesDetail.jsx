import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { FirstInformation } from "./sections/FirstInformation";
import { PosterButton } from "./sections/PosterButton";
import { ExternalActivitiesBar } from "./sections/ExternalActivitiesBar";
import { Basic } from "./sections/Basic";
import { Review } from "./sections/Review";
import { Pass } from "./sections/Pass";
import { Team } from "./sections/Team";
import { ReviewMore } from "./sections/ReviewMore";
import { TeamRecruitment } from "./sections/TeamRecruitment";
import { PassComment } from "./sections/PassComment";

import { Header } from "../Common/Header";

import "./ExternalActivitiesDetail.css";

export const ExternalActivitiesDetail = () => {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState("기본 정보");
  const [activityData, setActivityData] = useState(null);

  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedRecruitment, setSelectedRecruitment] = useState(null);
  const [selectedPassComment, setSelectedPassComment] = useState(null);

  const getThumbnailUrl = (thumbnail) => {
    if (!thumbnail) return null;
    if (thumbnail.startsWith("./")) {
      return thumbnail.replace("./", "/");
    }
    return thumbnail;
  };

  useEffect(() => {
    const fetchActivityDetail = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/activity_detail/${id}`);
        const data = await res.json();

        if (data.success) {
          setActivityData(data.activity);
        } else {
          console.error("활동 정보 로딩 실패:", data.message);
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
      }
    };

    fetchActivityDetail();
  }, [id]);

  const renderMainContent = () => {
    if (!activityData) return <div>로딩 중...</div>;

    switch (selectedTab) {
      case "기본 정보":
        return <Basic activity={activityData} />;

      case "리뷰 모음":
        return (
          <Review
            reviews={activityData.reviews}
            setSelectedTab={setSelectedTab}
            setSelectedReview={setSelectedReview}
          />
        );

      case "합격 사례":
        return (
          <Pass
            cases={activityData.success_cases}
            setSelectedTab={setSelectedTab}
            setSelectedPassComment={setSelectedPassComment}
          />
        );

      case "팀원 모집":
        // recruitmentData 생성 시 thumbnail 기본값 처리 포함
        const recruitmentData = (activityData.team_recruitment_posts || []).map(post => ({
          ...post,
          total: post.capacity,
          picture: post.picture || "/default-picture.png",
          profile: post.profile || "/default-profile.png",
          thumbnail: post.thumbnail || "/img/poster.png",  // 기본 썸네일 경로 설정
        }));

        return (
          <Team
            recruitmentData={recruitmentData}
            setSelectedTab={setSelectedTab}
            setSelectedRecruitment={setSelectedRecruitment}
            thumbnail={getThumbnailUrl(activityData.thumbnail)}
          />
        );

      case "ReviewMore":
        return selectedReview ? <ReviewMore {...selectedReview} /> : null;

      case "TeamRecruitment":
        return selectedRecruitment ? <TeamRecruitment {...selectedRecruitment} /> : null;

      case "PassComment":
        return selectedPassComment ? <PassComment {...selectedPassComment} /> : null;

      default:
        return null;
    }
  };

  return (
    <div className="external-activities-screen">
      <div className="external-activities">
        <div className="overlap-group">
          <Header />

          {activityData && (
            <FirstInformation
              main_category={activityData.main_category}
              title={activityData.title}
              rating={activityData.rating}
              rating_count={activityData.rating_count}
              company={activityData.company}
              trust_tags={activityData.trust_tags}
              video_url={activityData.video_url}
              homepage_url={activityData.homepage_url}
              thumbnail={getThumbnailUrl(activityData.thumbnail)}
            />
          )}

          <ExternalActivitiesBar selectedTab={selectedTab} onTabChange={setSelectedTab} />

          <div className="content-row">
            {renderMainContent()}
            <PosterButton poster={getThumbnailUrl(activityData?.thumbnail)} />
          </div>
        </div>
      </div>
    </div>
  );
};
