// --- Function 1 ---
function isAnagram(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string')
    throw new Error('Inputs must be strings');

  const normalize = s => s.toLowerCase().replace(/[^a-záéíóúüñ]/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}


// --- Function 2 ---
function wordFrequency(text) {
  if (typeof text !== 'string') throw new Error('Input must be a string');
  const words = text
    .toLowerCase()
    .replace(/[^\wáéíóúüñ\s]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0);

  const freq = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }
  return freq;
}


// --- Function 3 ---
function matrixDiagonalSum(matrix) {
  if (!Array.isArray(matrix)) throw new Error('Input must be an array');
  const n = matrix.length;
  if (n === 0 || !matrix.every(row => Array.isArray(row) && row.length === n))
    throw new Error('Matrix must be square');

  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (typeof matrix[i][i] !== 'number') throw new Error('Matrix must contain only numbers');
    sum += matrix[i][i];
  }
  return sum;
}


// Export so Jest can use them
module.exports = { isAnagram, wordFrequency, matrixDiagonalSum };


