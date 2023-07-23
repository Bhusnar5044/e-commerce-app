import { FC, memo } from 'react';
import Skeleton from '../Skeleton';

export const ProductsSkeleton: FC = memo(() => {
    return (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="aspect-square rounded-xl" />
        </div>
    );
});

ProductsSkeleton.displayName = 'ProductsSkeleton';
