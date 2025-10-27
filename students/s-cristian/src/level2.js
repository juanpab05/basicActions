// --- Function 1 ---
function toTitleCase(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// --- Function 2 ---
function fizzBuzz(n) {
  if (typeof n !== 'number') throw new Error('Input must be a number');
  if (n <= 0) throw new Error('Input must be a positive number');
  
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
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
function isIsogram(word) {
  if (typeof word !== 'string') throw new Error('Input must be a string');
  const cleanWord = word.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
  const uniqueChars = new Set(cleanWord);
  return uniqueChars.size === cleanWord.length;
}

// --- Function 4 ---
function findUniqueWords(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  const words = text
    .toLowerCase()
    .replace(/[^\wáéíóúüñ\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 0);
  
  return [...new Set(words)];
}

// --- Function 5 ---
function validateEmail(email) {
  if (typeof email !== 'string') throw new Error('Input must be a string');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Export so Jest can use them
module.exports = { toTitleCase, fizzBuzz, isIsogram, findUniqueWords, validateEmail };
