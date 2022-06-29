import React from 'react';
import { render } from '@testing-library/react';
import { BasicAmountOfBookInCart } from './amount-of-book-in-cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAmountOfBookInCart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
