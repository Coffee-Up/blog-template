import React from "react";

import { Layout } from "../components"

const IndexPage = ({ pageContext }) => {

 return (
  <>
   <Layout pageContext={pageContext}>
    <h1>index</h1>
   </Layout>
  </>
  );
};

export default IndexPage;
