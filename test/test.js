/* eslint-env mocha */
import { square, double, add } from '../src/algorithm'
import chai from 'chai'
let expect = chai.expect
// let it = Mocha.TestFunction

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return value when the value is present', function () {
      expect([1, 2, 3].indexOf(2)).to.be.equal(1)
    })
    it('should return -1 when the value is not present', function () {
      expect([1, 2, 3].indexOf(4)).to.be.equal(-1)
    })
  })
})

describe('Number', function () {
  describe('#square()', function () {
    it('should return squared value when value is a number', function () {
      expect(square(2)).to.be.equal(4)
    })
    it('should return error when value is not number', function () {
      expect(square('a')).to.be.NaN // eslint-disable-line
    })
  })
  describe('#double()', function () {
    it('should return double value when value is a number', function () {
      expect(double(2)).to.be.equal(4)
    })
    it('should return error when value is not number', function () {
      expect(double('a')).to.be.NaN // eslint-disable-line
    })
  })
  describe('#add()', function () {
    it('should return add value when value is a number', function () {
      expect(add(2, 3)).to.be.equal(5)
    })
  })
})
