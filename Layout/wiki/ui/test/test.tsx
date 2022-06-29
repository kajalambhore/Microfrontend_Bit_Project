import React, { ReactNode } from 'react';

export type TestProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Test({ children }: TestProps) {
  return (
    <div>
      {children}
    </div>
  );
}
