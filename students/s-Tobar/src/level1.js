// students/s-tuNombre/src/level1.js
function isPalindrome(word) {
    if (typeof word !== 'string') {
        throw new Error('Input must be a string');
    }
    
    if (word.trim() === '') {
        throw new Error('Input cannot be empty');
    }
    
    const cleaned = word.toLowerCase().replace(/\s+/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = { isPalindrome };
