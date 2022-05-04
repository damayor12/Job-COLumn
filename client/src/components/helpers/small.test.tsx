import '@testing-library/jest-dom';
import { filterer } from './small';

describe('small.tsx tests', () => {
  test('filterer test returns true boolean', () => {
    const item : string = 'hello';
    const result : boolean = filterer('hello', item);
    expect(result).toBe(true);
  });

  test('filterer test returns false boolean', () => {
    const item : string = 'hello';
    const result : boolean = filterer('start', item);
    expect(result).toBe(false);
  });

  test('filterer throws error if wrong type of arguments', () => {
    const item : number = 1;
    expect(() => {filterer('hello', item)}).toThrow(TypeError);
  });

});