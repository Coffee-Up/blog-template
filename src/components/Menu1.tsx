import React from "react";
import styled from 'styled-components';
import "../styles/Menu1.css";

import { MainMenuUIPrismic, MainNavigation, ThemeNames } from "../models/UI";
import { ThemeToggleButton } from "./Buttons";
import { ThemeContext } from "./Layout";
import { devices } from '../devices';
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface IProps {
 mainMenuStyles: MainMenuUIPrismic,
 mainNavigationFromNode: MainNavigation
};

interface IHeaderProps {
 mainMenuStyles: MainMenuUIPrismic,
 currentTheme: ThemeNames
};

const Header= styled.header<IHeaderProps>`
 display: flex;
 padding: ${(props) => props.mainMenuStyles.container_padding};
 height: ${(props) => props.mainMenuStyles.container_height};
 background-color: ${(props) => props.mainMenuStyles[`${props.currentTheme}_container_background__color`]};
 // Media Queries
 @media ${devices.Laptop} {
  height: ${(props) => `calc(${props.mainMenuStyles.container_height} * 0.7)`} ;
 }
`;

export default class Menu1 extends React.Component<IProps> {
 render() {  
  const { mainMenuStyles, mainNavigationFromNode } = this.props;
  const mainLogoMenu: IGatsbyImageData | undefined = getImage(mainNavigationFromNode.logo_main?.gatsbyImageData);

  return (
   <ThemeContext.Consumer>
    { ({currentTheme}) => {
     return (
     <Header currentTheme={currentTheme} mainMenuStyles={mainMenuStyles}>
      {mainLogoMenu && 
        <GatsbyImage objectFit="contain" loading="eager" draggable={false} image={mainLogoMenu} alt={mainNavigationFromNode.logo_main.alt} />
      }
      {
        mainMenuStyles.theme_switcher_exist &&
         <ThemeToggleButton darkColor={mainMenuStyles.dark_logo_theme_switcher_color} lightColor={mainMenuStyles.light_logo_theme_switcher_color} logoThemeSwitcherType={mainMenuStyles.logo_themes_switcher}/>
      }
     </Header>
     )}}
   </ThemeContext.Consumer>
  );
 }
};