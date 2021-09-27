import React from "react";

import "../styles/globals/reset.css";

import Footer from "./Footer.js";
import Menu1 from "./Menu1";

import { prismicToCssRules } from "../utils/helpers"

const ThemeContext = React.createContext({
   currentTheme: 'light',
   toggleDark: () => {} 
 });

const supportsDarkMode = () => {
 return window.matchMedia("(prefers-color-scheme: dark)").matches === true;
};


class Layout extends React.Component { 
 state = {
  currentTheme: 'light',
 };
 
 toggleDark = () => {
  const nextTheme = this.state.currentTheme === 'light' ? 'dark' : 'light'
  localStorage.setItem("currentTheme", JSON.stringify(nextTheme));
  this.setState({currentTheme: nextTheme});
 };

 componentDidMount() {

  const lsCurrentTheme = JSON.parse(localStorage.getItem("currentTheme"))

  if (lsCurrentTheme === 'dark') {
   this.setState({ currentTheme: 'dark' })
  } else if(lsCurrentTheme === 'light') {
    this.setState({ currentTheme : 'light'});
  } else if (supportsDarkMode()) {
   this.setState({ currentTheme: 'dark' });
  } 
 };

 render() {
  const { children } = this.props;
  const { themes } = this.props;
  const { currentTheme } = this.state;
  const toggleDark = this.toggleDark;

  const mainMenuStyles = prismicToCssRules(themes, "menu");
  
  const currentThemeStyles = { 
    backgroundColor: themes[`${currentTheme}_background_color`], 
  }
 

  return (
   <ThemeContext.Provider 
    value={{ currentTheme, themes, toggleDark }}
   >
    <div style={currentThemeStyles}>
     <Menu1 menuPrismicStyles={mainMenuStyles} />
     <main> {children} </main>
     <Footer />
    </div>
   </ThemeContext.Provider>
  );};
}

export default Layout;
export { ThemeContext };