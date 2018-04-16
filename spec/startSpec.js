// function testing() {
  describe("multiplesOf3And5", function() {
    it("should find the sum of all numbers that are multiples of 3 and 5 up to 10", function() {
      expect(multiplesOf3And5(10)).toEqual(23);
    })
    it("should return 0 if num is less than or equal to 3", function() {
      expect(multiplesOf3And5(3)).toEqual(0);
    })
    it("should return 0 for negative numbers", function() {
      expect(multiplesOf3And5(-10)).toEqual(0);
    })
    it("should find the sum of all numbers that are multiples of 3 and 5 up to 1000", function() {
      expect(multiplesOf3And5(1000)).toEqual(233168);
    })
  })

  describe("sumEvenFib", function() {
    it("should sum all even fib numbers up to 10", function() {
      expect(sumEvenFib(10)).toEqual(10);
    })
    it("should return 0 if num is less than or equal to 1", function() {
      expect(sumEvenFib(1)).toEqual(0);
    })
    it("should return 0 for negative numbers", function() {
      expect(sumEvenFib(-10)).toEqual(0);
    })
    it("should sum all even fib numbers up to four million", function() {
      expect(sumEvenFib(4000000)).toEqual(4613732);
    })
  })

  describe("largestPrimeFactor", function() {
    it("should return the largest prime factor of 10", function() {
      expect(largestPrimeFactor(10)).toEqual(5);
    })
    it("should return 2 if num equals 2",  function() {
      expect(largestPrimeFactor(2)).toEqual(2);
    })
    it("should return 0 if num is less than 2", function() {
      expect(largestPrimeFactor(0)).toEqual(0);
    })
    it("should return 0 is num is equal to a negative number", function() {
      expect(largestPrimeFactor(-10)).toEqual(0);
    })
    it("should return 6857 if num is equal to 600851475143", function() {
      expect(largestPrimeFactor(600851475143)).toEqual(6857);
    })
  })

  describe("nthPrime", function() {
    it("should return 0 if n is less than 1", function() {
      expect(nthPrime(0)).toEqual(0);
    })
    it("should return 0 if n is negative", function() {
      expect(nthPrime(-10)).toEqual(0);
    })
    it("should return 2 if n equals 1", function() {
      expect(nthPrime(1)).toEqual(2);
    })
    it("should return 104743 if n equals 10001", function() {
      expect(nthPrime(10001)).toEqual(104743);
    })
  })

  describe("sumPrimes", function() {
    it("should return 0 if n is 2", function() {
      expect(sumPrimes(2) ).toEqual(0);
    })
    it("should return 2 if n is 3", function() {
      expect(sumPrimes(3)).toEqual(2);
    })
    it("should return 17 if n is equal to 10", function() {
      expect(sumPrimes(10)).toEqual(17);
    })
    it("should return 142913828922 if n is equal to two million", function() {
      expect(sumPrimes(2000000)).toEqual(142913828922);
    })
  })
//}

//module.exports = testing;
