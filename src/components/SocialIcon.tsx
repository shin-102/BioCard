import * as React from 'react';
import { SocialIconProps } from '../types';

export const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square social-icon"
    
  />
);
/*
  brightness(value): Adjusts the brightness of the image.
      Value: A number where 1 is normal brightness, 0 is completely black, and values greater than 1 increase brightness.
      Example: brightness(0.5) makes it darker, while brightness(1.5) makes it brighter.

  saturate(value): Adjusts the saturation of the colors.
      Value: A number where 1 is normal saturation. Values less than 1 desaturate colors (turns them more gray), while values greater than 1 increase saturation.
      Example: saturate(0.5) reduces color intensity, while saturate(2) makes colors more vibrant.

  invert(value): Inverts the colors.
      Value: A number where 0 keeps the colors unchanged and 1 inverts them completely.
      Example: invert(1) turns black to white and vice versa.

  sepia(value): Applies a sepia filter, giving a warm, brownish tone.
      Value: Similar to the others, 0 means no sepia effect, while 1 applies a complete sepia tone.
      Example: sepia(0.5) gives a light brownish effect.

  hue-rotate(angle): Rotates the hue of the colors.
      Value: An angle in degrees (0-360). Adjusting this value changes the color.
      Example: hue-rotate(90deg) changes colors towards green.

*/