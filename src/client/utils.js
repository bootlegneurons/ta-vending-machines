export const formatCurrency = (value, showSign = false) => {
  const sign = value > 0 ? '+' : '-';
  return `${showSign ? sign : ''}$${Math.abs(value).toFixed(2)}`;
};

export const getFlexAttr = columns => ({
  flex: `0 1 ${(100.0 * (columns / 24)).toFixed(3)}%`,
});
