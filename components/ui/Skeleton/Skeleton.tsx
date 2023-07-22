import { FC, memo } from 'react';

import { cn } from '@utils';

export const Skeleton: FC = memo(({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return <div className={cn('animate-pulse rounded-md bg-neutral-200', className)} {...props} />;
});

Skeleton.displayName = 'Skeleton';
