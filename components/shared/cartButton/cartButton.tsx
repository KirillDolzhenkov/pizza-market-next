import React from 'react';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ArrowRight, ShoppingCart } from 'lucide-react';

interface Props {
  className?: string;
}

export const CartButton = (props: Props) => {
  const { className } = props;

  return (
    <Button className={cn('group relative', className)}>
      <b>500 ₽</b>
      <span className="mx-3 h-full w-px bg-white/30"></span>
      <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
        <ShoppingCart />
        <b>3</b>
      </div>
      <ArrowRight
        className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        size={20}
      />
    </Button>
  );
};
