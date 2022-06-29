import React from 'react';
import { render } from '@testing-library/react';
import { BasicUiHeader } from './ui_header.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicUiHeader />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
