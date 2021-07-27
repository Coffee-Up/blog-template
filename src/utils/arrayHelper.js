export function retrieveUniqueKeys(items) {
  // Display the list of array objects

  // Declare a new array
  let newArray = [];
  // Declare an empty object
  let uniqueObject = {};
  // Loop for the array elements
  for (let i in items) {
    // Extract the title
    let category = items[i]["sous_menu_categorie_nom"];
    // Use the title as the index
    uniqueObject[category] = items[i]["sous_menu_categorie_nom"];
  }

  // Loop to push unique object into array
  for (let i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }
  return newArray;
}
