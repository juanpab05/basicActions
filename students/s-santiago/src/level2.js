// --- Function 1 ---
function mergeAlternate(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2))
        throw new Error('Both inputs must be arrays');
    
    const maxLength = Math.max(array1.length, array2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        if (i < array1.length) result.push(array1[i]);
        if (i < array2.length) result.push(array2[i]);
    }

    return result;
}

// --- Function 2 ---
function evenOddLabels(numbers) {
    if (!Array.isArray(numbers)) throw new Error('Input must be an array');
    return numbers.map(num => {
        if (typeof num !== 'number') throw new Error('All elements must be numbers');
        return num % 2 === 0 ? `${num}-even` : `${num}-odd`;
    });
}

// --- Function 3 ---
function validatePassword(password) {
    if (typeof password !== 'string') throw new Error('Password must be a string');
    if (password.length < 8) return false;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);
    return hasUpper && hasLower && hasDigit && hasSymbol;
}

module.exports = { mergeAlternate, evenOddLabels, validatePassword };