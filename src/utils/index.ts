export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getInitials = (string: string) => {
  const splittedString = string.split(" ");
  return `${splittedString[0].charAt(0)}${splittedString[1].charAt(0)}`;
};

export const handleError = (error: any) => {
  if (error instanceof Error) {
    throw new Error(error.message);
  } else {
    throw new Error(error.message);
  }
};
