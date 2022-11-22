/* eslint-env mocha */
import { expect } from 'chai';
import { detectSums, calculateResult } from './utils';

describe('Detect sums', () => {
  it('should return an array', () => {
    const result = detectSums([]);
    expect(result).to.be.instanceof(Array);
  });

  it('should detect sums', () => {
    const result = detectSums([1, 2]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(0);
  });

  it('should detect sums in order', () => {
    const result = detectSums([1, 2, 3]);
    expect(result).to.be.instanceof(Array);
    expect(result).to.have.lengthOf(1);
    expect(result).to.deep.include({ pA: 0, pB: 1, sum: 2});
  });
});

describe('Calculate Result', () => {
  it('should fail if input is not a number array', () => {
    const result = calculateResult('1, 2, abc');
    expect(result).to.deep.include({ input: [1, 2, NaN], error: 'Input is not an number array'});
  });

  it('should fail if input is empty text', () => {
    const result = calculateResult('');
    expect(result).to.deep.include({ input: [NaN], error: 'Input is not an number array'});
  });

  it('should detect sums in order', () => {
    const result = calculateResult('1, 2, 3');
    expect(result).to.deep.include({ input: [1, 2, 3], error: null});
  });
});
