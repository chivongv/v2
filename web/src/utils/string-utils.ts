export const toCapitalize = (str: String | null | undefined) => {
  if (!str) return null;

  return str[0].toUpperCase() + str.slice(1);
};
