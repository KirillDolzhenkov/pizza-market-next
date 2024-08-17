import React from 'react';

import { FilterCheckBox, Title } from '@/components/shared';

interface Props {
  className?: string;
}

export const Filters = (props: Props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Title className="mb-5 font-bold" size="sm" text="Фильтрация" />
      <div className="flex flex-col gap-4">
        <FilterCheckBox text="Можно собирать" value="1" />
        <FilterCheckBox text="Новинки" value="2" />
      </div>
    </div>
  );
};
