import * as React from 'react';
import { ContactItemProps } from '../types';

export const ContactItem: React.FC<ContactItemProps> = ({ iconSrc, text }) => (
  <div className="flex gap-5 items-center">
    <img
      loading="lazy"
      src={iconSrc}
      alt={`${text} icon`}
      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
    />
    <div className="self-stretch my-auto">{text}</div>
  </div>
);