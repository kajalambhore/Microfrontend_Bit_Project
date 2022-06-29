import React from 'react';
import classNames from 'classnames';
import { useState } from 'react';

import style from './rating.module.scss'

export type ProductDetailsProps = {
  /**
   * number of stars
   */
  stars?: number;
  /**
   * number of stars
   */
  setStars?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export function Rating({
  stars = 1,
  setStars = false,
  className,
}: ProductDetailsProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={classNames('starRating', className)}>
      {[...Array(stars)].map((star, index) => {
        index += 1;
        if (setStars) {
          return (
            <button
              key={index}
              className={index <= (hover || rating) ? style.on : style.off}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span aria-label="star" className={style.star}>
                &#9733;
              </span>
            </button>
          );
        } else {
          return (
            <span aria-label="star" key={index} className={style.rating}>
              &#9733;
            </span>
          );
        }
      })}
    </div>
  );
}