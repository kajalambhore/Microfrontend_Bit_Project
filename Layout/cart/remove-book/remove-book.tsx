import React, { ReactNode } from 'react';
import styles from './remove-book.module.scss';
import { Button } from '@learn-bit-react/base-ui.ui.button';

export type RemoveBookProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function RemoveBook() {
  return (
    <>
     <Button
     className={styles.remove}
     
      onClick={() => alert('button clicked')}
      aria-label="Remove from Cart"
    >
      X
    </Button>
    </>
  );
}
