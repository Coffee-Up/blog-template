import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import { GlobalSettingsPrismic, MainMenuUIPrismic } from "../models/UI";

interface CustomPageContext {
 mainMenuFromNode: MainMenuUIPrismic,
 globalSettingsFromNode: GlobalSettingsPrismic
}

export default function IndexPage (props: PageProps<{}, CustomPageContext, {}> ) {
  return (
  <>
   <Layout 
    globalSettingsFromNode={props.pageContext.globalSettingsFromNode}
    mainMenuFromNode={props.pageContext.mainMenuFromNode}>
    <h1>INDEX PAGE</h1>
   </Layout>
  </>
  );
};
