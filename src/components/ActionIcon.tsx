import React from 'react';
import { ActionIconProps } from '../types';

export const ActionIcon: React.FC<ActionIconProps> = ({ src, alt, linkTo }) => {
  if (linkTo) {
    return (
      <a href={linkTo}>
        <img
          loading="lazy"
          src={src}
          alt={alt}
          className="object-contain w-full aspect-square"
        />
      </a>
    );
  } else {
    return (
      <img
          loading="lazy"
          src={src}
          alt={alt}
          className="object-contain w-full aspect-square"
      />
    );
  }
};