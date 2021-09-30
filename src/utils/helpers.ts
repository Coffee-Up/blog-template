export function rien() {
 
}
// function capitalize(s): string {
//   if (typeof s !== 'string') return ''
//   return s.charAt(0).toUpperCase() + s.slice(1)
// }

// function toCamelCase(styleUnderscored: string): string {
//  const isTwoWordsCssRule = styleUnderscored.split('__').length === 2;
 
//  if(isTwoWordsCssRule) {
//   const first = styleUnderscored.split('__')[0].split('_')[styleUnderscored.split('__')[0].split('_').length - 1];
//   const second = capitalize(styleUnderscored.split('__')[1]);
//   return `${first}${second}`;  
//  } else {
//   return styleUnderscored.split('_')[(styleUnderscored.split('_').length) - 1];
//  }
// }

// function getPrismicStylesByComponent (themePrismicSettings: ThemesPrismicStyles, componentName: 'mainMenu'): MainMenuCss  {
//  let mainMenuPrismicStyles: MainMenuCssCreator = new MainMenuCssCreator();
//  const mainMenuPrismicSettings: MainMenuCss = Object.keys(mainMenuPrismicStyles);

//  mainMenuPrismicSettings.forEach((mainMenuPrismicSetting: MainMenuCss) => {
//   let propertyNeeded: string;

//   Object.keys(themePrismicSettings).forEach(function(property: string) {
//     if(mainMenuPrismicSetting === property) {
//      propertyNeeded = property;
//      break;
//     }
//    }
//    mainMenuPrismicStyles[`${mainMenuPrismicSetting}`] = themePrismicSettings[`${propertyNeeded}`]

//  })
//  for (const propertyName in theme)
//  {
//   let isStyleWanted: boolean = false;
//   isStyleWanted = propertyName.split('_')[0] === componentName;

//   if(isStyleWanted) {
//    styles[propertyName] = theme[propertyName];
//    if(theme[propertyName] === null) {
//     console.error(`${propertyName} n'est pas remplis sur le CMS Prismic`);
//    }
//   }
// }
//  return styles;
// }

// function hasDuplicates(array) {
//   return (new Set(array)).size !== array.length;
// }


// export function prismicToCssRules(theme: ThemesPrismicStyles, componentName: 'menu' ): object {
//  let styles: MainMenuCss;

//  const graphQlProperties = getPrismicStylesByComponent(theme, componentName);

//  for(const property in graphQlProperties)
//  {
  
//  }
 
//   return styles;
// };
