import React from 'react';
import clsx from 'clsx';

interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean; // ✅ Best to keep this strictly boolean
  borderRadius?: string | number;
  placeholder?: boolean;
  opacity?: number | string;
}

export const Skeleton: React.FC<BaseProps> = ({
  width = '100%',
  height = '1rem',
  circle = false,
  borderRadius,
  placeholder = false,
  opacity = 1,
  className,
  style,
  ...props // ❌ DO NOT include circle or placeholder here
}) => {
  const backgroundStyles: React.CSSProperties = placeholder
    ? {
        backgroundImage: `url('/Images/loader.gif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  const resolvedBorderRadius = circle ? '50%' : borderRadius ?? '4px';

  return (
    <div
      className={clsx('skeleton', circle && 'circle', placeholder && 'placeholder', className)}
      style={{
        width,
        height,
        borderRadius: resolvedBorderRadius,
        opacity,
        ...backgroundStyles,
        ...style,
      }}
      {...props} // ✅ Now clean: circle and placeholder are excluded
    />
  );
};
