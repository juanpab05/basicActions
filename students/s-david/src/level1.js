// --- Function 1 ---
function countWordsArray(array) {
    if (!Array.isArray(array)) throw new Error('Input must be an array');
    const words = array.filter((element) => typeof element === "string");
    return words.length
}

// --- Function 2 ---
function invertArray(array) {
    if (!Array.isArray(array)) throw new Error('Input must be an array');
    const reversed_array = array.reverse();
    return reversed_array
}

// --- Function 3 ---
function avgArray(array) {
    if (!Array.isArray(array)) throw new Error('Input must be an array');
    const numbers = array.filter((element) => typeof element === "number");
    const size = numbers.length;
    return numbers.reduce((a, b) => a + b, 0) / size;
}

module.exports = { invertArray, countWordsArray, avgArray }
