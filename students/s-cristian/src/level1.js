// --- Function 1 ---
function isPalindrome(word) {
  if (typeof word !== 'string') throw new Error('Input must be a string');
  const cleanWord = word.toLowerCase().replace(/[^a-záéíóúüñ]/g, '');
  return cleanWord === cleanWord.split('').reverse().join('');
}

// --- Function 2 ---
function sumArray(numbers) {
  if (!Array.isArray(numbers)) throw new Error('Input must be an array');
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, num) => {
    if (typeof num !== 'number') throw new Error('All elements must be numbers');
    return sum + num;
  }, 0);
}

// --- Function 3 ---
function countVowels(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  const vowels = text.toLowerCase().match(/[aeiouáéíóúü]/g);
  return vowels ? vowels.length : 0;
}

// --- Function 4 ---
function findLargest(numbers) {
  if (!Array.isArray(numbers)) throw new Error('Input must be an array');
  if (numbers.length === 0) throw new Error('Array cannot be empty');
  return Math.max(...numbers);
}

// Export so Jest can use them
module.exports = { isPalindrome, sumArray, countVowels, findLargest };
