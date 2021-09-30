export enum ThemeNames {Light = "light", Dark = "dark"};

export interface MainMenuUIPrismic {
 container_border__width           : string,
 container_border__color           : string,
 container_width                   : string,
 container_height                  : string,
 light_container_background__color : string,
 dark_container_background__color  : string,
 logo_themes_switcher              : LogoThemeSwitcher
};

export interface ThemesUIPrismic {
 dark_background_color    : string,
 dark_main_color          : string,
 dark_secondary_color     : string,
 dark_cards_color         : string,
 dark_menu_color          : string,
 light_background_color   : string,
 light_cards_color        : string,
 light_main_color         : string,
 light_menu_color         : string,
 light_secondary_color    : string,
};

export interface GlobalSettingsPrismic {
 light_background__color  : string,
 dark_background__color   : string,
};

export enum LogoThemeSwitcher {
 MoonSun = "Moon / Sun",
 OrangeApple =  "Orange / Apple"
};


