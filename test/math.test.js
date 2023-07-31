import {
  addNumber,
  subtractNumber,
  multiplyNumber,
  divideNumber,
  moduloNumber,
} from '../src/math';

describe('Math Operations', () => {
  it('Test Add Numbers', () => {
    expect(addNumber(1, 2)).toBe(3);
    expect(addNumber(1, 2)).not.toBe(4);
    expect(addNumber(-3, -5)).toBe(-8);
    expect(addNumber(-3, -5)).not.toBe(-2);
    expect(addNumber(7, -3)).toBe(4);
    expect(addNumber(7, -3)).not.toBe(10);
    expect(addNumber(0, 0)).toBe(0);
    expect(addNumber(0, 0)).not.toBe(1);
  });

  it('Test Subtract Numbers', () => {
    expect(subtractNumber(1, 2)).toBe(-1);
    expect(subtractNumber(1, 2)).not.toBe(1);
    expect(subtractNumber(-3, -5)).toBe(2);
    expect(subtractNumber(-3, -5)).not.toBe(-8);
    expect(subtractNumber(7, -3)).toBe(10);
    expect(subtractNumber(7, -3)).not.toBe(4);
    expect(subtractNumber(0, 0)).toBe(0);
    expect(subtractNumber(0, 0)).not.toBe(1);
  });

  it('Test Multiply Numbers', () => {
    expect(multiplyNumber(1, 2)).toBe(2);
    expect(multiplyNumber(1, 2)).not.toBe(1);
    expect(multiplyNumber(-3, -5)).toBe(15);
    expect(multiplyNumber(-3, -5)).not.toBe(-15);
    expect(multiplyNumber(7, -3)).toBe(-21);
    expect(multiplyNumber(7, -3)).not.toBe(21);
    expect(multiplyNumber(0, 0)).toBe(0);
    expect(multiplyNumber(0, 0)).not.toBe(1);
  });

  it('Test Divide Numbers', () => {
    expect(divideNumber(1, 2)).toBe(0.5);
    expect(divideNumber(1, 2)).not.toBe(1);
    expect(divideNumber(-3, -5)).toBe(0.6);
    expect(divideNumber(-3, -5)).not.toBe(-0.6);
    expect(divideNumber(7, -3)).toBe(-2.3333333333333335);
    expect(divideNumber(7, -3)).not.toBe(2.3333333333333335);
  });

  it('Test Modulo Numbers', () => {
    expect(moduloNumber(1, 2)).toBe(1);
    expect(moduloNumber(1, 2)).not.toBe(0);
    expect(moduloNumber(-3, -5)).toBe(-3);
    expect(moduloNumber(-3, -5)).not.toBe(3);
    expect(moduloNumber(7, -3)).toBe(1);
    expect(moduloNumber(7, -3)).not.toBe(-1);
  });
});
