import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import {WelcomeMessage} from './welcomeMessage';

test('Shows the welcome message', () => {
  const msg : string = 'Hello and welcome to';
  render(<WelcomeMessage />);
  expect(screen.getByText(msg, {exact: false})).toBeInTheDocument();
})