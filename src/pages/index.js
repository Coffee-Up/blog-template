import React from "react";

import Layout from "../components/Layout"
import { DumbCard } from "../components/Cards"

const IndexPage = ({ pageContext }) => {

  return (
  <>
   <Layout themes={pageContext.themes}>
    <h1>INDEX PAGE</h1>
    <DumbCard>Je Suis Une DumbCard</DumbCard>
   </Layout>
  </>
  );
};

 
export default IndexPage;
