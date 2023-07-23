import { memo } from 'react';

import { cn } from '@utils';
import { IconButtonProps } from './types';

export const IconButton: React.FC<IconButtonProps> = memo(({ onClick, icon, className }) => {
    return (
        <button
            title="iconButton"
            onClick={onClick}
            className={cn(
                'rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition',
                className,
            )}
        >
            {icon}
        </button>
    );
});

IconButton.displayName = 'IconButton';
