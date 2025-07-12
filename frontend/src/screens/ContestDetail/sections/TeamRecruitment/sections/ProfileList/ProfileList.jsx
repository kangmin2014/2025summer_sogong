import React from "react";
import { Leader } from "./sections/Leader";
import { Team } from "./sections/Team";
import "./ProfileList.css";

export const ProfileList = ({ leader, members }) => {
  return (
    <div className="profile-list">
      {leader && <Leader profile={leader.profile} nickname={leader.nickname} />}
      {members.map((member, index) => (
        <Team key={index} profile={member.profile} nickname={member.nickname} />
      ))}
    </div>
  );
};
