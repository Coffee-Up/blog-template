import { ImageDataLike } from "gatsby-plugin-image"

export enum ThemeNames {
 Light                                  = "light", 
 Dark                                   =  "dark"
};

export enum LogoThemeSwitcher {
 MoonSun                                = "Moon / Sun",
 Text                                   = "Texte"
};

export class MainMenuUIPrismic {
 container_border__width                = "";
 container_border__color                = "";
 container_width                        = "";
 container_height                       = "";
 container_padding                      = "";

 logo_themes_switcher                   = LogoThemeSwitcher.MoonSun;
 theme_switcher_exist                   = false;

 light_container_background__color      = "";
 light_logo_theme_switcher_color        = "";

 dark_logo_theme_switcher_color         = "";
 dark_container_background__color       = "";
};

export interface ThemesUIPrismic {
 dark_background_color                  : string,
 dark_main_color                        : string,
 dark_secondary_color                   : string,
 dark_cards_color                       : string,
 dark_menu_color                        : string,
 light_background_color                 : string,
 light_cards_color                      : string,
 light_main_color                       : string,
 light_menu_color                       : string,
 light_secondary_color                  : string,
};

export interface GlobalSettingsPrismic {
 light_background__color                : string,
 dark_background__color                 : string,
};

export interface MainNavigation {
 title                                  : string,
 logo_main                              : PrismicImage,
};

export interface PrismicImage {
 alt                                    : string,
 copyright                              : string,
 gatsbyImageData                        : ImageDataLike,
}