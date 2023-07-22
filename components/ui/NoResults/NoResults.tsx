import { memo } from 'react';

export const NoResults = memo(() => {
    return <div className="flex items-center justify-center h-full w-full text-neutral-500">No results found.</div>;
});

NoResults.displayName = 'NoResults';
