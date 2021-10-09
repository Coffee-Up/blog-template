import React from "react";
import styled from 'styled-components';
import "../styles/Menu1.css";

import { MainMenuUIPrismic, MainNavigation, MegaMenu, ThemeNames } from "../models/UI";
import { ThemeToggleButton } from "./Buttons";
import { ThemeContext } from "./Layout";
import { devices } from '../devices';
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface IHeaderProps {
 mainMenuStyles        : MainMenuUIPrismic,
 currentTheme          : ThemeNames
};

interface IProps {
 mainMenuStyles        : MainMenuUIPrismic,
 mainNavigationFromNode: MainNavigation,
};

const Header= styled.header<IHeaderProps>`
 display: flex;
 align-items: center;
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
  const mainLogoMenu: IGatsbyImageData | undefined = 
   getImage(this.props.mainNavigationFromNode.logo_main?.gatsbyImageData);

  return (
   <ThemeContext.Consumer>
    { ({currentTheme}) => {
     return (
     <Header 
      currentTheme={currentTheme} 
      mainMenuStyles={this.props.mainMenuStyles}
     >
      {
       mainLogoMenu && this.props.mainNavigationFromNode &&
       <GatsbyImage 
        style={{width: this.props.mainNavigationFromNode.logo_width, height: this.props.mainNavigationFromNode.logo_height}} 
        as="div" 
        loading="eager" 
        draggable={false} 
        image={mainLogoMenu} 
        alt={this.props.mainNavigationFromNode.logo_main.alt} 
       />
      }
      {
        this.props.mainMenuStyles.theme_switcher_exist &&
         <ThemeToggleButton 
          darkColor={this.props.mainMenuStyles.dark_logo_theme_switcher_color} 
          lightColor={this.props.mainMenuStyles.light_logo_theme_switcher_color} 
          logoThemeSwitcherType={this.props.mainMenuStyles.logo_themes_switcher}
         />
      }
     </Header>
     )}}
   </ThemeContext.Consumer>
  );
 }
};