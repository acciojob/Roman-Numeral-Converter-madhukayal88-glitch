/**
 * Converts a given number into an uppercase Roman numeral string.
 * @param {number} num The number to convert (range 0 <= x <= 100000).
 * @returns {string} The Roman numeral representation.
 */
function convertToRoman(num) {
    // Handle input outside the typical 1-3999 range if required by function constraints,
    // though the provided range up to 100000 might require extended notation 
    // (e.g., using overbars not easily represented in plain text).
    // For standard plain-text Roman numerals within the basic range, we use the following:
    if (num < 1) {
        return ""; // Roman numerals do not traditionally have a zero or negative
    }

    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            result += numeral.symbol;
            num -= numeral.value;
        }
    }

    return result;
}

// Example usage and testing:
console.log(`Input 14 output: ${convertToRoman(14)}`); // Expected: XIV
console.log(`Input 798 output: ${convertToRoman(798)}`); // Expected: DCCXCVIII
console.log(`Input 3999 output: ${convertToRoman(3999)}`); // Expected: MMMCMXCIX
console.log(`Input 0 output: ${convertToRoman(0)}`); // Expected: ""
// console.log(`Input 100000 output: ${convertToRoman(100000)}`); // For numbers > 3999, results are limited to standard representation
