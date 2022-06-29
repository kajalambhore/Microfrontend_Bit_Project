import React from 'react';
import styles from './cart-page.module.scss';
import { Heading } from '@learn-bit-react/base-ui.ui.heading';



export function CartPage() {
  return (
    <>
      <div  className={styles.cart}>
        <div></div>
        <div className={styles.product}>
          <Heading element="h2" >Product Details</Heading>
        </div>
        <div className={styles.center}>
          <Heading element="h4">Quantity</Heading>
        </div>
        <div className={styles.center}>
          <Heading element="h4">Price</Heading>
        </div>
        <div></div>
      </div>
     
    </>
  );
}
