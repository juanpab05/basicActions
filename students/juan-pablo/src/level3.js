//const unused = 42; // This variable is intentionally unused to demonstrate ESLint functionality

// --- Function 1 ---
function primesBefore(num) {
  var primos = [];
  var esPrimo
  if (typeof num !== 'number') throw new Error('Input must be a number');
  if (num<2) return primos;
  primos.push(2);
  for (let i = 3; i <= num; i++){
    esPrimo = true;
    for (let j = 2; j<i; j++){
      if (i % j === 0){
        esPrimo=false;
        break
      }      
    }
    if (esPrimo==true) primos.push(i);
  }
  return primos
}

// --- Function 2 ---
function factorial(num) {
  if (typeof num !== 'number') throw new Error('Input must be a number');
  if (num > 1) {
    return num * factorial(num - 1);
  }
  else {
    return 1;
  };
};

// --- Function 3 ---
function geomCalc(op, unit, a) {
  var resultado;
  if (typeof a !== 'number') throw new Error('Third parameter must be a number');
  if (unit==="deg") a=a*(Math.PI/180) 
    else{
      if (unit!="rad") throw new Error('Second parameter must be deg or rad')
    }
  switch(op){
    case "sin": resultado = Math.round(Math.sin(a)*100)/100; break
    case "cos": resultado = Math.round(Math.cos(a)*100)/100; break
    case "tan": resultado = Math.round(Math.tan(a)*100)/100; break
    case "sec": resultado = Math.round(100/Math.cos(a))/100; break
    case "csc": resultado = Math.round(100/Math.sin(a))/100; break
    case "cot": resultado = Math.round(100/Math.tan(a))/100; break
    default: throw new Error('Operation must be a trigonometrical relation')
  }
  return resultado
}


// Export so Jest can use them
module.exports = { primesBefore, factorial, geomCalc };

