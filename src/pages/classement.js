import React from "react";
import "../styles/ClassementPage.css";

import { Layout, RankingTeamTable, Sidebar } from "../components";

const ClassementPage = () => {
  return (
    <Layout>
      <Sidebar side="left" />
      <div id="ranking-page-container">
        <RankingTeamTable team="seniors 1" />
      </div>
      <Sidebar side="right" />
    </Layout>
  );
};

export default ClassementPage;
