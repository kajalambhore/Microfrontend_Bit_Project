import React from 'react';
import { render } from '@testing-library/react';
import { BasicEmptyCart } from './empty-cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicEmptyCart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
