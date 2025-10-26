// --- Function 1 ---
function miniCalc(number1, number2, operation) {
        switch (operation) {
            case 'add':
                return number1 + number2;
            case 'subtract':
                return number1 - number2;
            case 'multiply':
                return number1 * number2;
            case 'divide':
                return number2 !== 0 ? number1 / number2 : 'Division by zero error';
            default:
                return 'Invalid operation';
        }
    }

// --- Function 2 ---
function checkPasswordStrength(password) {
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const isStrongPassword = lengthCriteria && uppercaseCriteria && lowercaseCriteria && numberCriteria && specialCharCriteria;

    return isStrongPassword ? 'Strong password' : 'Weak password';
}

// --- Function 3 ---
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
}

module.exports = { miniCalc, checkPasswordStrength, fibonacci }