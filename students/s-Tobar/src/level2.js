function fizzBuzz(n) {
    if (typeof n !== 'number' || isNaN(n)) {
        throw new Error('Input must be a valid number');
    }
    
    if (!Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    
    if (n % 15 === 0) return 'FizzBuzz';
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n.toString();
}

module.exports = { fizzBuzz };