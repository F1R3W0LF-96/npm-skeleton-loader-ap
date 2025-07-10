'use client';

import React from 'react';
import { Skeleton } from './Skeleton';

interface SkeletonImageProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // Accepts square size
  className?: string;
}

export const SkeletonImage: React.FC<SkeletonImageProps> = ({
  size = 48,
  className,
  ...props
}) => {
  return (
    <Skeleton
      width={size}
      height={size}
      circle
      className={className}
      {...props}
    />
  );
};
