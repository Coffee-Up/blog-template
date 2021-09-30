import React from "react";
import "../styles/globals/reset.css";

import Footer from "./Footer";
import Menu1 from "./Menu1";

import { GlobalSettingsPrismic, MainMenuUIPrismic, ThemeNames } from "../models/UI";

interface IProps {
 mainMenuFromNode: MainMenuUIPrismic,
 globalSettingsFromNode: GlobalSettingsPrismic
};

interface IState {
 currentTheme: ThemeNames
};

const ThemeContext = React.createContext({
 currentTheme: ThemeNames.Light,
 toggleDark: () => {},
 mainMenuFromNode: {},
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
  const { children, mainMenuFromNode, globalSettingsFromNode } = this.props;
  const { currentTheme } = this.state;

  return (
   <ThemeContext.Provider 
    value={{ currentTheme, toggleDark: this.toggleDark, mainMenuFromNode }}
   >
    <div style={{ backgroundColor: globalSettingsFromNode[`${currentTheme}_background__color`] }}>
     <Menu1 mainMenuStyles={mainMenuFromNode} />
     <main> {children} </main>
     <Footer />
    </div>
   </ThemeContext.Provider>
  );};
}

export default Layout;
export { ThemeContext };