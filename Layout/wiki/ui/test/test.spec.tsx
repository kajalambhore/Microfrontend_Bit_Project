import React from 'react';
import { render } from '@testing-library/react';
import { BasicTest } from './test.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicTest />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
