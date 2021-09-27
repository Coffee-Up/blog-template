function getPrismicStylesByComponent (theme: object, componentName: string):object  {
 // Theme Custom Type in Prismic is formated like : component_element_type_?nocssrule_name
 let styles: object = {};

 for (const propertyName in theme) 
 {
  let isStyleWanted: boolean = false;
  isStyleWanted = propertyName.split('_')[0] === componentName;

  if(isStyleWanted) {
   styles[propertyName] = theme[propertyName];
   if(theme[propertyName] === null) {
    console.error(`${propertyName} n'est pas remplis sur le CMS Prismic`);
   }
  }
}
 return styles;
}

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

export function prismicToCssRules(theme: object, componentName: string ): object {
 let styles: object = {};
 let propertiesCreated = [];

 const graphQlProperties = getPrismicStylesByComponent(theme, componentName);

 for(const property in graphQlProperties)
 {
   const isTwoWordsCssRule = property.split('__').length === 2;
   
   if(isTwoWordsCssRule) {
     const camelCaseCssRule = `${property.split('__')[0].split('_')}${property.split('_')[1]}`;
     styles[camelCaseCssRule] = theme[property];
     propertiesCreated.push(camelCaseCssRule);     
  } else {
   const ruleExtracted = property.split('_')[(property.split('_').length) - 1];
   styles[ruleExtracted] = theme[property];
   propertiesCreated.push(ruleExtracted);
  }
     
 }
 
 if(hasDuplicates(propertiesCreated))
  console.error('Une propriete a ete surement ecrasee');

  return styles;
}
