import React from "react";

import "../styles/globals/reset.css";

import Footer from "./Footer.js";
import Menu1 from "./Menu1";

import { prismicToCssRules } from "../utils/helpers"
import { ThemesListName, ThemesPrismicStyles } from "../models/Theme";

type LayoutStates = {
 currentTheme: ThemesListName
}
const ThemeContext = React.createContext({
   currentTheme: ThemesListName.light,
   toggleDark: () => {} 
 });

const supportsDarkMode = () => {
 return window.matchMedia("(prefers-color-scheme: dark)").matches === true;
};


class Layout extends React.Component<{ themesStyles: ThemesPrismicStyles },{ currentTheme: ThemesListName}> { 
 state: LayoutStates = {
  currentTheme: ThemesListName.light,
 };
 
 toggleDark = () => {
  const nextTheme = this.state.currentTheme === ThemesListName.light ? ThemesListName.dark : ThemesListName.light
  localStorage.setItem("currentTheme", JSON.stringify(nextTheme));
  this.setState({currentTheme: nextTheme});
 };

 componentDidMount() {

  const lsCurrentTheme = JSON.parse(localStorage.getItem("currentTheme"))

  if (lsCurrentTheme === 'dark') {
   this.setState({ currentTheme: ThemesListName.dark })
  } else if(lsCurrentTheme === ThemesListName.light) {
    this.setState({ currentTheme : ThemesListName.light});
  } else if (supportsDarkMode()) {
   this.setState({ currentTheme: ThemesListName.dark });
  } 
 };

 render() {
  const { children } = this.props;
  const { themesStyles } = this.props;
  const { currentTheme } = this.state;
  const toggleDark = this.toggleDark;

  const mainMenuStyles = prismicToCssRules(themesStyles, "menu");
  
  const currentThemeStyles = { 
    backgroundColor: themesStyles[`${currentTheme}_background_color`], 
  }
 

  return (
   <ThemeContext.Provider 
    value={{ currentTheme, themesStyles, toggleDark }}
   >
    <div style={currentThemeStyles}>
     <Menu1 mainMenuPrismicStyles={mainMenuStyles} />
     <main> {children} </main>
     <Footer />
    </div>
   </ThemeContext.Provider>
  );};
}

export default Layout;
export { ThemeContext };