import React, { useContext } from "react";

import { ThemeContext } from "./Layout";

const DumbCard = ({ children }  ) => {
 const contextValue = useContext(ThemeContext);
 const {themes, currentTheme} = contextValue;
 
const dumbCardStyles = {
 backgroundColor: themes[`${currentTheme}_background_color`],
 
}

 return (<div style={dumbCardStyles}>{children}</div>)
}

export { DumbCard };