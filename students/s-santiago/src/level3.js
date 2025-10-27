// --- Function 1 ---
function smartCalculator(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number') 
        throw new Error('Inputs must be numbers');

    switch (operation) {
        case 'power':
            return Math.pow(a, b);
        case 'mod':
            return b !== 0 ? a % b : 'Modulo by zero error';
        case 'average':
            return (a + b) / 2;
        case 'max':
            return Math.max(a, b);
        default:
            return 'Invalid operation';
    }
}

// --- Function 2 ---
function passwordLevel(password) {
    if (typeof password !== 'string') throw new Error('Password must be a string');
    
    const length = password.length >= 10;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    const score = [length, hasUpper, hasLower, hasDigit, hasSymbol].filter(Boolean).length;

    if (score === 5) return 'Very Strong';
    if (score >= 3) return 'Medium';
    return 'Weak';
}

// --- Function 3 ---
function factorial(n) {
    if (typeof n !== 'number' || n < 0) throw new Error('Input must be a positive number');
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

module.exports = { smartCalculator, passwordLevel, factorial };
