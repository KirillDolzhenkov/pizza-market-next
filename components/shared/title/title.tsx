import React from 'react';

import { clsx } from 'clsx';

type TitleSize = '2xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs';

interface Props {
  className?: string;
  size?: TitleSize;
  text: string;
}

export const Title = (props: Props) => {
  const { className, size = 'sm', text } = props;
  const mapTagBySize = {
    '2xl': 'h1',
    lg: 'h2',
    md: 'h3',
    sm: 'h4',
    xl: 'h1',
    xs: 'h5'
  } as const;

  const mapClassNameBySize = {
    '2xl': 'text-[48px]',
    lg: 'text-[32px]',
    md: 'text-[26px]',
    sm: 'text-[22px]',
    xl: 'text-[40px]',
    xs: 'text-[16px]'
  } as const;

  return React.createElement(mapTagBySize[size], { className: clsx(mapClassNameBySize[size], className) }, text);
};
