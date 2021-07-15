import React from "react";
import "../styles/ClassementPage.css";

import { Layout, Sidebar } from "../components";

const ClassementPage = () => {
  return (
    <Layout>
      <Sidebar side="left" />
      <div id="ranking-page-container"></div>
      <Sidebar side="right" />
    </Layout>
  );
};

export default ClassementPage;
