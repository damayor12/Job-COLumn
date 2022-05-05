import '@testing-library/jest-dom'
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
  const disc : string = "Select your";
  render(<PrivacyDisclosure/>)
  expect(screen.getByText(disc, {exact: false})).toBeInTheDocument();
})
