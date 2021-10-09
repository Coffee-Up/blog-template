import React from "react";
import "../styles/globals/reset.css";

import Footer from "./Footer";
import Menu1 from "./Menu1";

import { GlobalSettingsPrismic, MainMenuUIPrismic, MainNavigation, MegaMenu, ThemeNames } from "../models/UI";

interface IProps {
 mainMenuFromNode: MainMenuUIPrismic,
 globalSettingsFromNode: GlobalSettingsPrismic,
 mainNavigationFromNode: MainNavigation,
};

interface IState {currentTheme: ThemeNames};

interface ThemeContextType {
 currentTheme:           ThemeNames,
 toggleDark:             () => void,
 mainMenuFromNode:       MainMenuUIPrismic,
};

const ThemeContext = React.createContext<ThemeContextType>({
 currentTheme: ThemeNames.Light,
 toggleDark: () => {},
 mainMenuFromNode: new MainMenuUIPrismic(),
});

const supportsDarkMode = () => {
 return window.matchMedia("(prefers-color-scheme: dark)").matches === true;
};

class Layout extends React.Component<IProps, IState> {
 state = {
  currentTheme: ThemeNames.Light,
 };
 
 toggleDark = (): void => {
  const nextTheme = this.state.currentTheme === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light
  localStorage.setItem("currentTheme", JSON.stringify(nextTheme));
  this.setState({currentTheme: nextTheme});
 };

 componentDidMount() {

  const lsCurrentTheme: ThemeNames = JSON.parse(localStorage.getItem("currentTheme") || "")

  if (lsCurrentTheme === 'dark') {
   this.setState({ currentTheme: ThemeNames.Dark })
  } else if(lsCurrentTheme === ThemeNames.Light) {
    this.setState({ currentTheme : ThemeNames.Light});
  } else if (supportsDarkMode()) {
   this.setState({ currentTheme: ThemeNames.Dark });
  } 
 };

 render() {
  const { 
   children, 
   mainMenuFromNode, 
   globalSettingsFromNode, 
   mainNavigationFromNode,
 } = this.props;
  const { currentTheme } = this.state;
  const globalStyles = {
   backgroundColor: globalSettingsFromNode[`${currentTheme}_background__color`],
   color: currentTheme === 'light' ? "black" : "white"
  };

  return (
   <ThemeContext.Provider 
    value={{ currentTheme, toggleDark: this.toggleDark, mainMenuFromNode }}
   >
    <div style={globalStyles}>
     <Menu1 
      mainNavigationFromNode={mainNavigationFromNode} 
      mainMenuStyles={mainMenuFromNode} 
     />
     <main>{children}</main>
     <Footer />
    </div>
   </ThemeContext.Provider>
  );};
}

export default Layout;
export { ThemeContext };