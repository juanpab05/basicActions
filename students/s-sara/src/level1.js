
// --- Function 1 ---
function reverseString(str) {
    if (typeof str !== 'string'){
        return false;
    } 
    return str.split('').reverse().join('')
}

// --- Function 2 ---
function maxNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0){
        return null;
    }
    return Math.max(...arr);
}

// --- Function 3 ---
function countEvenNumbers(arr) {
    if (!Array.isArray(arr)) {
        return 0;
    }
    return arr.filter(n => typeof n === 'number' && n % 2 === 0).length;
}

module.exports = {reverseString, maxNumber, countEvenNumbers}