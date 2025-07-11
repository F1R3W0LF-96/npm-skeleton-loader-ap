'use client';
import React from 'react';
import { Skeleton } from './Skeleton';
import { SkeletonImage } from './SkeletonImage';
import { SkeletonLoader } from './SkeletonLoader';
import { SkeletonParagraph } from './SkeletonParagraph';
import { useSkeleton } from './useSkeleton';

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  borderRadius?: string | number;
  placeholder?: boolean;
  opacity?: number | string;
  loadertime?: number; 
  type?: 'image' | 'paragraph'; 
  rows?: number;
  widths?: (string | number)[];
}
export const SkeletonClientWrapper = (props:BaseProps) => {
  const loading = useSkeleton(props.loadertime||5000);

  return (
    <SkeletonLoader loading={loading}>
      {props.type === "image" ? (
        <SkeletonImage {...props} />
      ) : props.type === "paragraph" ? (
        <SkeletonParagraph {...props} />
      ) : (
        <Skeleton {...props} />
      )}
    </SkeletonLoader>
  );
};

