import React, { useState } from "react";
import "../styles/RankingTeamTable.css";

import { IconCHR } from "../assets/icons";
import { ActionButton } from ".";

const RankingTeamTable = ({ team }) => {
  const [currentTeam, updateCurrentTeam] = useState(team);

  const seniorsM1Url = "https://scorenco.com/widget/5f8c2fb7318adf3e99df3d6d";
  const seniorsM2Url = "https://scorenco.com/widget/5f8c62fc0450a43f9689ff65";

  const juniorsF1Url = "https://scorenco.com/widget/5f8c6fefe7b69a3d12a34bd9";
  const seniorsF1Url = "https://scorenco.com/widget/5f8c6f720450a43ce12e5db6/";

  const cadetsM1Url = "https://scorenco.com/widget/5f8c6d48cab48d3da5886b8e";
  const cadetsM2Url = "https://scorenco.com/widget/5f8c6e44a748730a207269a3";

  const juniorsM11Url = "https://scorenco.com/widget/5f8c65cee7b69a3c3ee4f3e2";
  const juniorsM2Url = "https://scorenco.com/widget/5f8c6626cab48d3bf94f0851";
  return (
    <>
      {currentTeam === "juniors 1" && (
        <div className="ranking-team-table-container">
          <div id="ranking-table-title-container">
            <IconCHR width="80" />
            <h1>Classement Juniors Equipe 1</h1>
          </div>
          <iframe
            id="5f8c6fefe7b69a3d12a34bd9"
            className="ranking-team-table-widget"
            src={juniorsF1Url}
          ></iframe>
        </div>
      )}
      {currentTeam === "feminines 1" && (
        <div className="ranking-team-table-container">
          <div id="ranking-table-title-container">
            <IconCHR width="80" />
            <h1>Classement Féminines Equipe 1</h1>
          </div>
          <iframe
            id="5f8c6fefe7b69a3d12a34bd9"
            className="ranking-team-table-widget"
            src={seniorsF1Url}
          ></iframe>
        </div>
      )}
      {currentTeam === "seniors 1" && (
        <div className="ranking-team-table-container">
          <div id="ranking-table-title-container">
            <IconCHR width="80" />
            <h1>Classement Seniors Equipe 1</h1>
            <ActionButton onClick={() => updateCurrentTeam("seniors 2")}>
              Equipe 2 Seniors
            </ActionButton>
          </div>
          <iframe
            id="5f8c6fefe7b69a3d12a34bd9"
            className="ranking-team-table-widget"
            src={seniorsM1Url}
          ></iframe>
        </div>
      )}
      {currentTeam === "seniors 2" && (
        <div className="ranking-team-table-container">
          <div id="ranking-table-title-container">
            <IconCHR width="80" />
            <h1>Classement Seniors Equipe 2</h1>
            <ActionButton onClick={() => updateCurrentTeam("seniors 1")}>
              Equipe 1 Seniors
            </ActionButton>
          </div>
          <iframe
            id="5f8c6fefe7b69a3d12a34bd9"
            className="ranking-team-table-widget"
            src={seniorsM2Url}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default RankingTeamTable;
