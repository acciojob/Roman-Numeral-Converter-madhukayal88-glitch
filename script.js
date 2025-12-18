function romanNumeral(num) {
    if (num === 0) return "";

    const symbols = [
        ['M',1000],
        ['D',500],
        ['C',100],
        ['L',50],
        ['X',10],
        ['V',5],
        ['I',1]
    ];

    let result = "";

    for (let i = 0; i < symbols.length; i++) {
        while (num >= symbols[i][1]) {
            result += symbols[i][0];
            num -= symbols[i][1];
        }
    }

    // Handle subtractive cases
    result = result
        .replace(/DCCCC/g, "CM")
        .replace(/CCCC/g, "CD")
        .replace(/LXXXX/g, "XC")
        .replace(/XXXX/g, "XL")
        .replace(/VIIII/g, "IX")
        .replace(/IIII/g, "IV");

    return result;
}
