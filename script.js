function convertToRoman(num) {
    if (num === 0) return "";

    var values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    var symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    var result = "";
    var i = 0;

    while (num > 0) {
        while (num >= values[i]) {
            num -= values[i];
            result += symbols[i];
        }
        i++;
    }

    return result;
}

module.exports = convertToRoman;
