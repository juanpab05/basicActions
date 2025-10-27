// --- Function 1 ---
function duplicatesMatrix(matrix) {
    if (!Array.isArray(matrix)) return false;
    const seen = new Set();
    for (const row of matrix) {
        if (!Array.isArray(row)) continue;
        for (const num of row) {
            if (seen.has(num)) return true;
            seen.add(num);
        }
    }
    return false;
}
// --- Function 2 ---
function logicCircuit(inputs, type) {
    if (!Array.isArray(inputs) || inputs.length === 0) return null;
    switch (type) {
        case 'AND':
            return inputs.every(Boolean); 
        case 'OR':
            return inputs.some(Boolean);  
        case 'XOR':
            return inputs.filter(Boolean).length % 2 === 1; 
        case 'NOT':
            return inputs.map(i => !i); 
        default:
            return null;
    }
}

// --- Function 3 ---
function validatePasswordScore(password) {
    if (typeof password !== 'string') return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;
    return score; 
}

module.exports = {duplicatesMatrix, logicCircuit, validatePasswordScore};