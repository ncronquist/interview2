const largestTotal = require('./largestTotal');
const assert = require('assert');

describe('Largest Total', () => {
  describe('calculate', () => {
    it('should return the total sum when all numbers are positive', () => {
      const arr = [1, 2, 3]; // 6
      const actual = largestTotal.calculate(arr);
      assert.equal(6, actual);
    })
    it('should return the total sum when all numbers are positive', () => {
      const arr = [1, 2, -3, 4]; // 4
      const actual = largestTotal.calculate(arr);
      assert.equal(4, actual);
    })
    it('should return the max sum of consecutive numbers', () => {
      const arr = [1, 2, -4, 4]; // 4
      const actual = largestTotal.calculate(arr);
      assert.equal(4, actual);
    })
    it('should return the max sum of consecutive numbers', () => {
      const arr = [1, 2, -2, -3, 4]; // 4
      const actual = largestTotal.calculate(arr);
      assert.equal(4, actual);
    })
    it('should return the max sum of consecutive numbers', () => {
      const arr = [1, 5, -2, -3, 4]; // 4
      const actual = largestTotal.calculate(arr);
      assert.equal(6, actual);
    })
  })
})
