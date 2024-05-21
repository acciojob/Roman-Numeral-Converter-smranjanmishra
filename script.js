function convertToRoman(num) {
  const symbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = '';

  for (let i = 0; i < symbols.length; i++) {
    const [symbol, value] = symbols[i];
    while (num >= value) {
      result += symbol;
      num -= value;
    }
    // Check for subtraction cases (e.g., IV for 4, IX for 9)
    const nextIndex = Math.floor((i + 1) / 2) * 2; // Find the next symbol index for subtraction
    const [nextSymbol, nextValue] = symbols[nextIndex];
    if (i % 2 === 0 && num >= value - nextValue) {
      result += nextSymbol + symbol;
      num -= (value - nextValue);
    }
  }

  return result;
}



// do not edit below this line
module.exports = convertToRoman
