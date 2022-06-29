import React from 'react';
import { Button } from '@learn-bit-react/base-ui.ui.button';


export type AddShoeToCartProps = {
  /**
   * item to be added to the cart
   */
  // item: book;
  /**
   * quantity of item to be added to the cart
   */
  quantity: number;
};

export function AddBookToCart() {
  const addProductToCart = () => {
    alert('Button is clicked');
  };
  return (
    <Button primary onClick={() => addProductToCart()}>
      Add to Cart
    </Button>
  );
}
