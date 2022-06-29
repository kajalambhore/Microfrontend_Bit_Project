import React from 'react';
import { render } from '@testing-library/react';
import { BasicAddBookToCart } from './add-book-to-cart.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAddBookToCart />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
