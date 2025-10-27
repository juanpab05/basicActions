// --- Function 1 ---
function miniCalculator(a, b, operation) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both operands must be numbers');
  }
  
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error('Division by zero is not allowed');
      return a / b;
    case 'power':
      return Math.pow(a, b);
    case 'modulo':
      if (b === 0) throw new Error('Modulo by zero is not allowed');
      return a % b;
    default:
      throw new Error('Invalid operation. Supported: add, subtract, multiply, divide, power, modulo');
  }
}

// --- Function 2 ---
function validatePasswordStrength(password) {
  if (typeof password !== 'string') throw new Error('Input must be a string');
  
  const criteria = {
    length: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  };
  
  const score = Object.values(criteria).filter(Boolean).length;
  
  if (score === 5) return { strength: 'Very Strong', score: 5, criteria };
  if (score === 4) return { strength: 'Strong', score: 4, criteria };
  if (score === 3) return { strength: 'Medium', score: 3, criteria };
  if (score === 2) return { strength: 'Weak', score: 2, criteria };
  return { strength: 'Very Weak', score: 1, criteria };
}

// --- Function 3 ---
function factorialRecursive(n) {
  if (typeof n !== 'number') throw new Error('Input must be a number');
  if (n < 0) throw new Error('Factorial is not defined for negative numbers');
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

// --- Function 4 ---
function detectDuplicatesAndStats(numbers) {
  if (!Array.isArray(numbers)) throw new Error('Input must be an array');
  if (numbers.length === 0) throw new Error('Array cannot be empty');
  
  const frequency = {};
  const duplicates = [];
  
  numbers.forEach(num => {
    if (typeof num !== 'number') throw new Error('All elements must be numbers');
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] === 2) duplicates.push(num);
  });
  
  const uniqueNumbers = Object.keys(frequency).map(Number);
  const stats = {
    total: numbers.length,
    unique: uniqueNumbers.length,
    duplicates: duplicates,
    duplicatesCount: duplicates.length,
    mostFrequent: Object.keys(frequency).reduce((a, b) => 
      frequency[a] > frequency[b] ? a : b
    ),
    average: numbers.reduce((sum, num) => sum + num, 0) / numbers.length,
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
  
  return stats;
}

// Export so Jest can use them
module.exports = { miniCalculator, validatePasswordStrength, factorialRecursive, detectDuplicatesAndStats };
