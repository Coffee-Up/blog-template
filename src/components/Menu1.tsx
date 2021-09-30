import React from "react";
import styled from 'styled-components';
import "../styles/Menu1.css";

import { MainMenuUIPrismic, ThemeNames } from "../models/UI";
import { ThemeToggleButton } from "./Buttons";
import { ThemeContext } from "./Layout";
import { devices } from '../devices';

interface IProps {
 mainMenuStyles: MainMenuUIPrismic
};

interface IHeaderProps {
 mainMenuStyles: MainMenuUIPrismic,
 currentTheme: ThemeNames
};

const Header= styled.header<IHeaderProps>`
height: ${(props) => props.mainMenuStyles.container_height};
background-color: ${(props) => props.mainMenuStyles[`${props.currentTheme}_container_background__color`]};
// Media Queries
@media ${devices.Laptop} {
 height: ${(props) => `calc(${props.mainMenuStyles.container_height} * 0.7)`} ;
}
`;

export default class Menu1 extends React.Component<IProps> {
 render() {  
  const { mainMenuStyles } = this.props;
  const logoThemeSwitcherType = mainMenuStyles.logo_themes_switcher;
  return (
   <ThemeContext.Consumer>
    { ({ currentTheme }) => {
     return (
     <Header currentTheme={currentTheme} mainMenuStyles={mainMenuStyles}>
     <ThemeToggleButton logoThemeSwitcherType={logoThemeSwitcherType}/>
     </Header>
     )}}
   </ThemeContext.Consumer>
  );
 }
};