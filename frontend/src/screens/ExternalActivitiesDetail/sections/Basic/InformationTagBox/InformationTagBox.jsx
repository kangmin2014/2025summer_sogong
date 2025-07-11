import React from "react";
import { NoriskTag } from "./sections/Tag/NoriskTag";
import { SpecTag } from "./sections/Tag/SpecTag";
import { TransparencyTag } from "./sections/Tag/TransparencyTag";
import { EfficiencyTag } from "./sections/Tag/EfficiencyTag";
import { RewardTag } from "./sections/Tag/RewardTag";

import "./InformationTagBox.css";

export const InformationTagBox = ({ infoTags }) => {
  // 혹시 infoTags가 undefined/null일 때 대비
  const reward = infoTags?.["보상/혜택"] || [];
  const spec = infoTags?.["스펙/이력서"] || [];
  const efficiency = infoTags?.["효율/가성비"] || [];
  const norisk = infoTags?.["리스크 회피"] || [];
  const transparency = infoTags?.["투명성 검증"] || [];

  return (
    <div className="information-tag-box">
      <div className="reward-box">
        <div className="text-wrapper-3">보상/혜택</div>
        <RewardTag tags={reward} className="design-component-instance-node" />
      </div>

      <div className="div-3">
        <div className="text-wrapper-3">스펙/이력서</div>
        <SpecTag tags={spec} className="design-component-instance-node" />
      </div>

      <div className="div-3">
        <div className="text-wrapper-3">효율/가성비</div>
        <EfficiencyTag tags={efficiency} className="design-component-instance-node" />
      </div>

      <div className="div-4">
        <div className="text-wrapper-3">리스크 회피</div>
        <NoriskTag tags={norisk} className="design-component-instance-node" />
      </div>

      <div className="div-4">
        <div className="text-wrapper-3">투명성 검증</div>
        <TransparencyTag tags={transparency} className="design-component-instance-node" />
      </div>
    </div>
  );
};
