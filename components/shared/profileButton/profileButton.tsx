import React from 'react';

import { Button } from '@/components/ui';
import { User } from 'lucide-react';

interface Props {
  className?: string;
  onClickSignIn?: () => void;
}

export const ProfileButton = (props: Props) => {
  const { className, onClickSignIn } = props;

  return (
    <div className={className}>
      <Button className="flex items-center gap-2" variant="outline">
        <User size={16} />
        Войти
      </Button>
    </div>
  );
};
