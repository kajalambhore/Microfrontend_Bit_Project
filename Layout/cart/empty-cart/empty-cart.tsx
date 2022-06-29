import React from 'react';
import styles from './empty-cart.module.scss';

export function EmptyCart() {
  return (
    <div className={styles.empty}>
      <h6>No products in Cart</h6>
    </div>
  )
}
