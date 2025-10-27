// --- Function 1 ---
function reverseWords(sentence) {
  if (typeof sentence !== 'string') throw new Error('Input must be a string');
  return sentence.trim().split(/\s+/).reverse().join(' ');
}

// --- Function 2 ---
function multiplyArray(numbers, factor) {
  if (!Array.isArray(numbers)) throw new Error('First argument must be an array');
  if (typeof factor !== 'number') throw new Error('Factor must be a number');
  return numbers.map(n => n * factor);
}

// --- Function 3 ---
function capitalizeFirst(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  return text
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

// Export so Jest can use them
module.exports = { reverseWords, multiplyArray, capitalizeFirst };
