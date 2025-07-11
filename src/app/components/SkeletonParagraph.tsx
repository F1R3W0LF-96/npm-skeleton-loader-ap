'use client';

import React from 'react';
import clsx from 'clsx';
import { Skeleton } from './Skeleton';

interface SkeletonParagraphProps extends React.HTMLAttributes<HTMLDivElement> {
  rows?: number;
  widths?: (string | number)[];
  className?: string;
  lineClassName?: string;
  lineHeight?: string | number;
  spacing?: string | number;

  /** Optional placeholder image support */
  placeholder?: boolean;

  /** Optional border radius for lines */
  borderRadius?: string | number;

  /** Optional opacity for lines */
  opacity?: number | string;
circle?: boolean;

}

export const SkeletonParagraph: React.FC<SkeletonParagraphProps> = ({
  rows = 3,
  widths = [],
  className,
  lineClassName,
  lineHeight = '1rem',
  spacing = '0.5rem',
  placeholder,
  borderRadius,
  opacity,
  circle,
  ...props
}) => {
  return (
    <div
      className={clsx('skeleton-paragraph', className)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing,
        width: '100%',
      }}
      {...props}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton
          key={i}
          width={widths[i] ?? '100%'}
          height={lineHeight}
          borderRadius={borderRadius}
          placeholder={placeholder}
          opacity={opacity}
          circle={circle ?? false} // ✅ Pass it explicitly and safely
          className={clsx('skeleton-line', lineClassName)}
        />
      ))}
    </div>
  );
};
