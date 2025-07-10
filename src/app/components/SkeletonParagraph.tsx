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
}

export const SkeletonParagraph: React.FC<SkeletonParagraphProps> = ({
  rows = 3,
  widths = [],
  className,
  lineClassName,
  lineHeight = '1rem',
  spacing = '0.5rem',
  ...props
}) => {
  return (
    <div className={clsx('skeleton-paragraph', className)} style={{ display: 'flex', flexDirection: 'column', gap: spacing,width:'100%'}} {...props}>
      {Array.from({ length: rows }).map((_, i) => (
        <Skeleton
          key={i}
          width={widths[i] ?? '100%'}
          height={lineHeight}
          className={clsx('skeleton-line', lineClassName)}
        />
      ))}
    </div>
  );
};
