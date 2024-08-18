function convertToRoman(num) {
  const romanNumerals = [
        ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
        ['C', 100], ['XC', 90], ['L', 50], ['XL', 40],
        ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ];

    let result = '';

    // Loop through each Roman numeral symbol
    for (let [symbol, value] of romanNumerals) {
        // While the number is greater than or equal to the value
        while (num >= value) {
            result += symbol; // Append the symbol to the result
            num -= value; // Subtract the value from the number
        }
    }

    return result;
}



// do not edit below this line
module.exports = convertToRoman
