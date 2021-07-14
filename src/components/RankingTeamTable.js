// Load Table is long, we don't have control on it because it is from scorenco, we load all table then decide to show it or not depends on the use selection
import React, { useState } from "react";
import "../styles/RankingTeamTable.css";

import { IconArrow, IconCHR } from "../assets/icons";
import scorencoLinks from "../json/scorenco-links.json";

const RankingTeamTable = () => {
  const [isOpen, updateIsOpen] = useState(false);
  const [currentOption, updateCurrentOption] = useState(null);

  const onClickDropDown = () => {
    updateIsOpen(!isOpen);
  };

  const onSelectOption = ($event) => {
    updateCurrentOption($event.target.innerHTML);
    updateIsOpen(false);
  };

  return (
    <>
      <div>
        <div className="drop-down-container">
          <button className="drop-down-button" onClick={onClickDropDown}>
            {currentOption ? currentOption : "Choisissez Une Equipe"}
          </button>
          <IconArrow size="30" />
          <ul className={`button-drop-down-open-${isOpen}`}>
            {scorencoLinks.map((el) => (
              <li className={`button-drop-down-item-options`}>
                <button onClick={($event) => onSelectOption($event)}>
                  {el.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {scorencoLinks.map((el) => (
        <div
          className={`ranking-team-table-container g-show-${
            currentOption === el.label ? "true" : "false"
          }`}
        >
          <div className="ranking-table-title-container">
            <IconCHR width="80" />
            <h1>{el.label}</h1>
          </div>
          <div className="ranking-table-description-container">
            <h2>{el.description}</h2>
          </div>
          <iframe
            id="5f8c6fefe7b69a3d12a34bd9"
            className="ranking-team-table-widget"
            src={`https://scorenco.com/widget/${el.url}`}
          ></iframe>
        </div>
      ))}
    </>
  );
};

export default RankingTeamTable;
