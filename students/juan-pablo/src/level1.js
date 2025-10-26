//const unused = 42; // This variable is intentionally unused to demonstrate ESLint functionality

// --- Function 1 ---
function isEven(num) {
  if (typeof num !== 'number') throw new Error('Input must be a number');
  return num % 2 === 0;
}

// --- Function 2 ---
function minArray(nums) {
  if (!Array.isArray(nums)) throw new Error('Input must be an array');
  return Math.min(...nums);
}

// --- Function 3 ---
function pythagoras(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Inputs must be numbers');
  return Math.sqrt(a**2 + b**2);
}

// Export so Jest can use them
module.exports = { isEven, minArray, pythagoras };

