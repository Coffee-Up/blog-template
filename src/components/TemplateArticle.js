import * as React from "react";
import { graphql } from "gatsby";
import "../styles/TemplateArticle.css";

import { Layout, Sidebar } from "../components";

const TemplateArticle = ({ data }) => {
  return (
    <Layout bannerImage={data.file.childImageSharp}>
      <Sidebar side="left" />
      <div id="index-page-container">Hello</div>
      <Sidebar side="right" />
    </Layout>
  );
};

export default TemplateArticle;
