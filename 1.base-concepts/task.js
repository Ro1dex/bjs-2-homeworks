"use strict"
function solveEquation(a, b, c) {
  const discriminant = b**2 - 4*a*c;
  if (discriminant < 0) {
    return []; 
  } else if (discriminant === 0) {
    const x = -b / (2*a);
    return [x]; 
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    return [x1, x2]; 
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1));
  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}
