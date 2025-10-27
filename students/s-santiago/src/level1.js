// --- Function 1 ---
function longestWord(sentence) {
  if (typeof sentence !== 'string') throw new Error('Input must be a string');
  const words = sentence.trim().split(/\s+/);
  return words.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  , '');
}

// --- Function 2 ---
function sumEven(numbers) {
  if (!Array.isArray(numbers)) throw new Error('Input must be an array');
  return numbers
    .filter(n => typeof n === 'number' && n % 2 === 0)
    .reduce((a, n) => a + n, 0);
}

// --- Function 3 ---
function reverseEachWord(sentence) {
  if (typeof sentence !== 'string') throw new Error('Input must be a string');
  return sentence
    .trim()               
    .split(/\s+/)          
    .map(w => w.split('').reverse().join(''))
    .join(' ');
}

// Export so Jest can use them
module.exports = { longestWord, sumEven, reverseEachWord };
