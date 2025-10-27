// --- Function 1 ---
function sumOfArrays(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) throw new Error('Both Inputs must be arrays');
    if (array1.length !== array2.length) throw new Error('Both inputs must have the same length');
    const array3 = array1.map((el, i) => {
        if (typeof el !== 'number' || typeof array2[i] !== 'number') throw new Error('All elements of both inputs must be numbers');
        return array2[i] + el;
    });
    return array3
}

// --- Function 2 ---
function FizzBuzz(n) {
    if (typeof n !== 'number') throw new Error('Input must be a number');
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}

// --- Function 3 ---
function vaidateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

module.exports = { sumOfArrays, FizzBuzz, vaidateEmail }