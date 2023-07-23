import { FC, memo } from 'react';

import { cn } from '@utils';

export const Skeleton: FC<React.HTMLAttributes<HTMLDivElement>> = memo(({ className, ...props }) => {
    return <div className={cn('animate-pulse rounded-md bg-neutral-200', className)} {...props} />;
});

Skeleton.displayName = 'Skeleton';
