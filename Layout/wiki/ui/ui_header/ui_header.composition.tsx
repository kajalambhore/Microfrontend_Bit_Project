import React from 'react';
import { UiHeader } from './ui_header';

import { MemoryRouter } from 'react-router';

export const BasicUiHeader = () => {
  return (
    <MemoryRouter> 
    <UiHeader
      logoText="Bit Sports Store"
      src="https://static.bit.dev/bit-logo.svg"
      alt="Bit Logo"
    >
      add some links here
      
    </UiHeader>
   
    </MemoryRouter>
  );
}
