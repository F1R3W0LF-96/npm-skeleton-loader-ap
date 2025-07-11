'use client';

import React from 'react';
import { Skeleton } from './Skeleton';

export interface SkeletonImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Size in pixels for width & height (square). Ignored if `width` or `height` is provided directly.
   */
  size?: number;

  /**
   * Width of the image skeleton (overrides `size`)
   */
  width?: string | number;

  /**
   * Height of the image skeleton (overrides `size`)
   */
  height?: string | number;

  /**
   * Whether the skeleton should be circular.
   * Defaults to true if `size` is used.
   */
  circle?: boolean;

  /**
   * Optional border radius (if not circular)
   */
  borderRadius?: string | number;

  /**
   * Whether to apply placeholder styling
   */
  placeholder?:  boolean;



  /**
   * Opacity for the background/placeholder
   */
  opacity?: number | string;

  /**
   * Additional className to apply
   */
  className?: string;
}

/**
 * Skeleton placeholder for images.
 * Supports circle or rectangular variants, with optional image placeholder.
 */
export const SkeletonImage: React.FC<SkeletonImageProps> = ({
  size = 48,
  width,
  height,
  circle = true,
  borderRadius,
  placeholder,
  opacity,
  className,
  ...props
}) => {
  const resolvedWidth = width ?? size;
  const resolvedHeight = height ?? size;
  return (
    <Skeleton
      width={resolvedWidth}
      height={resolvedHeight}
      circle={circle}
      borderRadius={borderRadius}
      placeholder={placeholder}
      opacity={opacity}
      className={className}
      {...props}
    />
  );
};
