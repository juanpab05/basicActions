function factorial(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('Input must be a valid number');
    }
    
    if (!Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    
    if (n < 0) {
        throw new Error('Input must be a non-negative integer');
    }
    
    if (n === 0 || n === 1) {
        return 1;
    }
    
    return n * factorial(n - 1);
}

module.exports = { factorial };
