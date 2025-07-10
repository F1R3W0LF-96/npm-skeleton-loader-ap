'use client';

import React from 'react';

interface SkeletonLoaderProps {
  loading: boolean;
  children: React.ReactNode;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  loading,
  children,
}) => {
  return <>{loading ? children : null}</>;
};
