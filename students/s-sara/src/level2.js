// --- Function 1 ---
function countVowels(str) {
    if (typeof str !== 'string') return 0;
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}

// --- Function 2 ---
function sumMatrix(matrix) {
    if (!Array.isArray(matrix)) return 0;
    let total = 0;
    for (let row of matrix) {
        if (!Array.isArray(row)) continue;
        for (let num of row) {
            if (typeof num === 'number') total += num;
        }
    }
    return total;
}

// --- Function 3 ---
function isIsogram(word) {
    if (typeof word !== 'string') return false; 
    const lowerWord = word.toLowerCase();  
    const letters = new Set(); 
    for (let char of lowerWord) {
        if (letters.has(char)) {
            return false; 
        }
        letters.add(char);
    }
    return true; 
}

module.exports = {countVowels, sumMatrix, isIsogram};