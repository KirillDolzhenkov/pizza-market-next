import React from 'react';

import { Container } from '@/components/shared/container/container';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import Logo from '@/public/fcLogo.svg';
import Image from 'next/image';
type Props = {
  className?: string;
};

export const Header = (props: Props) => {
  const { className } = props;

  return (
    <div className={cn('border border-b', className)}>
      <Container className={'flex h-16 items-center justify-between'}>
        <div className={'flex items-center gap-4'}>
          <Image alt={'Logo'} height={250} src={Logo} width={250} />
        </div>
        <div className={'flex items-center gap-4'}>
          <Button variant={'outline'}>Test</Button>
        </div>
      </Container>
    </div>
  );
};
