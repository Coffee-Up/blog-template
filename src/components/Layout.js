import React from "react";

import "../styles/core/reset.css";
import "../styles/core/animations.css";

import { Footer,  Menu1 } from ".";

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
  } else if (supportsDarkMode()) {
   this.setState({ currentTheme: 'dark' })
  }
 };

 render() {
  const { children } = this.props;
  const { themes } = this.props.pageContext;
  const { currentTheme } = this.state;
  const toggleDark = this.toggleDark;
 

  return (
   <ThemeContext.Provider 
    value={{ currentTheme, themes, toggleDark }}
   >
    <div style={{backgroundColor: themes[currentTheme].background_color}}>
     <Menu1 />
     <main> {children} </main>
     <Footer />
    </div>
   </ThemeContext.Provider>
  );};
}

export default Layout;
export { ThemeContext };