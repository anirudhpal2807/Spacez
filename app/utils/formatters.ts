// String formatters for offers page

export const formatCurrency = (amount: number): string => {
  return `₹${amount.toLocaleString('en-IN')}`;
};

export const formatDiscount = (value: number | string, type: 'percentage' | 'flat' | 'amount'): string => {
  if (type === 'percentage') {
    return `${value}% off`;
  } else if (type === 'flat') {
    return `Flat ${value}%`;
  } else {
    return `₹${value}`;
  }
};