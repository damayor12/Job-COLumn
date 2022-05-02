import '@testing-library/jest-dom'

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Introduction, Functionality, PrivacyDisclosure } from './welcomeText';

test('Shows the title when rendering', () => {
  const title : string = 'Job COLumn';

  render(<Introduction/>);
  expect(screen.getByText(title)).toBeInTheDocument();

})

test('Shows the functionality text', () => {
  const text : string = 'You can also sort by any of:';
  render(<Functionality/>);
  expect(screen.getByText(text)).toBeInTheDocument();
})

test('Shows the privacy disclosure', () => {
  const disc : string = "Now obviously I'll need some information from you to make this app work.";
  render(<PrivacyDisclosure/>)
  expect(screen.getByText(disc)).toBeInTheDocument();
})

test('Should have this content in p tag', () => {
 
  render(<PrivacyDisclosure/>)
  const Ptag = screen.getByRole("privacy")
  expect(Ptag).toHaveTextContent('Testing a div')
})