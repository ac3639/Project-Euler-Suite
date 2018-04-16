// PE 1
function multiplesOf3And5(num) {
  if (num <= 3) return 0;
  arr = [];
  for (var i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return sum(arr);
}

function sum(arr) {
  return arr.reduce(function(acc, num) {
    return acc + num;
  });
}

// PE 2
function sumEvenFib(num) {
  if (num <= 1) return 0;
  let num1 = 1;
  let num2 = 2;
  let newNum = 0;
  let sum = 2;
  while (num2 < num) {
    newNum = num1 + num2;
    if (newNum % 2 === 0) {
      sum += newNum;
    }
    num1 = num2;
    num2 = newNum;
  }
  return sum;
}

// PE 3
function largestPrimeFactor(num) {
  // let num = 600851475143;
  if (num < 2) return 0;
  let result = 2;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (isPrime(i)) {
      	if (i > result) {
      	  result = i;
      	}
      }
      if (isPrime(num / i)) {
      	if ((num / i) > result) {
      	  result = num / i;
      	}
      }
    }
  }
  return result;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
  	if (n % i === 0) {
  	  return false;
  	}
  }
  return true;
}

//PE 7

function nthPrime(n) {
  if (n < 1) return 0;
  var count = 0;
  i = 2
  while (count <= n) {
    if (isPrime(i)) {
      count += 1;
      if (count === n) {
        return i;
      }
    }
    i += 1;
  }
}

function isPrime(x) {
  if (x === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

// PE 10
function sumPrimes(n) {
  var sum = 0;
  i = 2;
  while (i < n) {
    if (isPrime(i)) {
      sum += i;
    }
    i += 1;
  }
  return sum;
}

function isPrime(x) {
  if (x === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}
