// const simplifyDateObject = (rawDate) => {
//   const dateSliced = rawDate
//     .split("-")
//     .slice(0, 10)
//     .join("")
//     .split("T")
//     .slice(0, 1)
//     .join("");

//   const year = dateSliced.split("").slice(0, 4).join("");
//   const month = dateSliced.split("").slice(4, 6).join("");
//   const day = dateSliced.split("").slice(6, 8).join("");
//   return { day, month, year };
// };

const mainTagFromUrl = (pathUrlString, delimiterString) => {
  const arrayStrings = pathUrlString.split(delimiterString);
  return arrayStrings[0];
};
export { mainTagFromUrl };
