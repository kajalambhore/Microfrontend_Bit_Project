import React, { ReactNode } from 'react';
import styles from './amount-of-book-in-cart.module.scss';

export type AmountOfBookInCartProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AmountOfBookInCart() {
  return (
    <>
    <div className={styles.cartAmount}>
    $ 99
    </div>
    
    </>
  );
}
