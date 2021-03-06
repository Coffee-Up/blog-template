import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import { GlobalSettingsPrismic, MainMenuUIPrismic, MainNavigation, MegaMenu } from "../models/UI";

interface CustomPageContext {
 mainMenuFromNode      : MainMenuUIPrismic,
 globalSettingsFromNode: GlobalSettingsPrismic,
 mainNavigationFromNode: MainNavigation,
 megaMenusFromNode     : MegaMenu[]
}

export default function IndexPage (props: PageProps<{}, CustomPageContext, {}> ) {
  return (
  <>
   <Layout 
    globalSettingsFromNode={props.pageContext.globalSettingsFromNode}
    mainMenuFromNode={props.pageContext.mainMenuFromNode}
    mainNavigationFromNode={props.pageContext.mainNavigationFromNode}
    megaMenusFromNode={props.pageContext.megaMenusFromNode}>
    <h1>INDEX PAGE</h1>
   </Layout>
  </>
  );
};
