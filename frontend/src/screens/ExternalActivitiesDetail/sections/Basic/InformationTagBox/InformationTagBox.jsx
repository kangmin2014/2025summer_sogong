import React from "react";
import { NoriskTag } from "./sections/Tag/NoriskTag";
import { SpecTag } from "./sections/Tag/SpecTag";
import { TransparencyTag } from "./sections/Tag/TransparencyTag";
import { EfficiencyTag } from "./sections/Tag/EfficiencyTag";
import { RewardTag } from "./sections/Tag/RewardTag";

import "./InformationTagBox.css";

export const InformationTagBox = () => {
  return (
    <div className="information-tag-box">
      <div className="reward-box">
        <div className="text-wrapper-3">보상/혜택</div>

        <RewardTag className="design-component-instance-node" />
      </div>

      <div className="div-3">
        <div className="text-wrapper-3">스펙/이력서</div>

        <SpecTag className="design-component-instance-node" />
      </div>

      <div className="div-3">
        <div className="text-wrapper-3">효율/가성비</div>

        <EfficiencyTag className="design-component-instance-node" />
      </div>

      <div className="div-4">
        <div className="text-wrapper-3">리스크 회피</div>

        <NoriskTag className="design-component-instance-node" />
      </div>

      <div className="div-4">
        <div className="text-wrapper-3">투명성 검증</div>

        <TransparencyTag className="design-component-instance-node" />
      </div>
    </div>
  );
};