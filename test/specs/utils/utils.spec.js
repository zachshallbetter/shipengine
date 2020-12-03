const { expect } = require('chai');
const { exists, assertExists } = require('../../../cjs/utils');

describe('exists', () => {
  it('should check if arg exists', () => {
    expect(exists(null)).to.be.false;
    expect(exists(0)).to.be.true;
    expect(exists('hello')).to.be.true;
  });
});

describe('assertExists', () => {
  it('should throw', () => {
    expect(() => assertExists(null, 'hello')).to.throw(/hello/);
    expect(() => assertExists(undefined)).to.throw();
    expect(() => assertExists({})).not.to.throw();
  });
});
