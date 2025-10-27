// --- Function 1 ---
function findLongestWord(sentence) {
  if (typeof sentence !== 'string') throw new Error('Input must be a string');
  const words = sentence.trim().split(/\s+/);
  if (words.length === 0) return '';
  return words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

// --- Function 2 ---
function hasUniqueChars(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  const clean = text.toLowerCase().replace(/\s+/g, '');
  const seen = new Set();
  for (const char of clean) {
    if (seen.has(char)) return false;
    seen.add(char);
  }
  return true;
}

// --- Function 3 ---
function countWords(sentence) {
  if (typeof sentence !== 'string') throw new Error('Input must be a string');
  const words = sentence.trim().split(/\s+/).filter(w => w.match(/[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ]/));
  return words.length;
}

// Export so Jest can use them
module.exports = { countWords, findLongestWord, hasUniqueChars };


