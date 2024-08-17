import React from 'react';

import { CartButton, ProfileButton } from '@/components/shared';
import { Container } from '@/components/shared/container/container';
import { cn } from '@/lib/utils';
import Logo from '@/public/logo.png';
import Image from 'next/image';

type Props = {
  className?: string;
};

export const Header = (props: Props) => {
  const { className } = props;

  return (
    <header className={cn('border border-b', className)}>
      <Container className="flex items-center justify-between py-8">
        {/*левая часть*/}
        <div className="flex items-center gap-4">
          <Image alt="Logo" height={35} src={Logo} width={35} />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">вкусней уже некуда</p>
          </div>
        </div>
        {/*правая часть*/}
        <div className="flex items-center gap-3">
          <ProfileButton />
          <CartButton />
        </div>
      </Container>
    </header>
  );
};
