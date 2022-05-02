import '@testing-library/jest-dom';
import { MenuItem } from '@blueprintjs/core';
import { ItemRenderer } from '@blueprintjs/select/lib/esm/common/itemRenderer';
import { IItemModifiers } from '@blueprintjs/select'; 

import userEvent from '@testing-library/user-event';

import * as React from 'react';
import {screen} from '@testing-library/dom'

import { MouseEventHandler} from 'react' 
import { filterer, renderer } from './small';


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

  // test('renderer renders MenuItem', () => {
  //   const item : Object = { name: 'foo',}
  //   const handleClick : MouseEventHandler<HTMLElement> = jest.fn();
  //   const modifiers : IItemModifiers = { active: true, disabled: false, matchesPredicate: true};

  //   const container = renderer(item, {handleClick, modifiers, handleFocus: function (): void {
  //       throw new Error('Function not implemented.');
  //     },query: ''
  //   });

  //   userEvent.click(screen.getByTestId('small-test'));

  //   expect(handleClick).toHaveBeenCalledTimes(1);


  // });

});