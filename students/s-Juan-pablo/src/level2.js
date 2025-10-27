//const unused = 42; // This variable is intentionally unused to demonstrate ESLint functionality

// --- Function 1 ---
function isPrime(num) {
  if (typeof num !== 'number') throw new Error('Input must be a number');
  for (let i = 2; i < num; i++){
    if (num % i === 0) return false;
  }
  return true;
}

// --- Function 2 ---
function insertionSort(nums) {
  var key = 0;
  if (!Array.isArray(nums)) throw new Error('Input must be an array');
  if (nums.length == 0) throw new Error('Array must not bet empty');
  for (let i = 1; i < nums.length; i++){
    for (let y=0; y<i; y++){
      if (nums[i]<nums[y]) {
        key = nums[i];
        nums[i] = nums[y];
        nums[y] = key;
      }   
    }
  }
  return nums;
}

// --- Function 3 ---
function repeatedNumbers(nums) {
  var repeated = []
  if (!Array.isArray(nums)) throw new Error('Input must be an array');
  if (nums.length < 2) throw new Error('Array must have at least 2 numbers');
  for (let i = 0; i < (nums.length-1); i++){
    for (let j = i+1; j < nums.length; j++){
      if ((nums[i] == nums[j]) && !repeated.includes(nums[i], 0)){
        repeated.push(nums[j])
      }
    }
  }
  return repeated;
}

// Export so Jest can use them
module.exports = { isPrime, insertionSort, repeatedNumbers };

