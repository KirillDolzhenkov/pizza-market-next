import React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container = (props: Props) => {
  const { children, className } = props;

  return <div className={cn('mx-auto max-w-[1280px]', className)}>{children}</div>;
};
