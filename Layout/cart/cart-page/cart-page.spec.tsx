import React from 'react';
import { render } from '@testing-library/react';
import { BasicCartPage } from './cart-page.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicCartPage />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
