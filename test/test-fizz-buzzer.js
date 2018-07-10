//import chai, declare expect variable
const expect = require('chai').expect;

//import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

//unit tests
describe('fizzBuzzer', function() {

  // test normal cases
  it('should divide number by 15, get 0 remainder, return fizz-buzz', function() {
    // range of normal inputs
    const normalCases = [
      {num: 30, expected: 'fizz-buzz'},
      {num: -45, expected: 'fizz-buzz'},
      {num: 75, expected: 'fizz-buzz'}
    ];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should divide number by 5, get 0 remainder, return buzz', function() {
    // range of normal inputs
    const normalCases = [
      {num: 5, expected: 'buzz'},
      {num: -10, expected: 'buzz'},
      {num: 20, expected: 'buzz'}
    ];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should divide number by 3, get 0 remainder, return fizz', function() {
    // range of normal inputs
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: -6, expected: 'fizz'},
      {num: 9, expected: 'fizz'}
    ];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return number if not multiple of 15, 5, or 3', function() {
    // range of normal inputs
    const normalCases = [
      {num: 1},
      {num: 4},
      {num: -7}
    ];
    // for each input, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.num);
    });
  });

  it('should raise error if arg not a number', function() {
    // range of bad inputs where not a number
    const badInput = [
      'a',
      '1',
	  false
    ];
    // prove that an error is raised for bad inputs
    badInput.forEach(function(input) {
      expect(function() {
        fizzBuzzer([0, 1, 2]);
      }).to.throw(Error);
    });
  });
});