const GetRootFolderName = (pathUrlString) => {
  const arrayStrings = pathUrlString.split("/");
  return arrayStrings[0];
};

export { GetRootFolderName };
