export const formatNumbers = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
