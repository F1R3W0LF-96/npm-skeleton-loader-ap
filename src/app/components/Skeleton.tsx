import React from 'react';
import clsx from 'clsx';

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

export const Skeleton: React.FC<BaseProps> = ({
  width = '100%',
  height = '1rem',
  circle = false,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx('skeleton', circle && 'circle', className)}
      style={{ width, height, ...props.style }}
      {...props}
    />
  );
};
