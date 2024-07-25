import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Container = (props: Props) => {
  const { className, children } = props;
  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;
};
