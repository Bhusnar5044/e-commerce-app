('use client');

import { memo, useEffect, useState } from 'react';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

interface CurrencyProps {
    value?: string | number;
}

export const Currency: React.FC<CurrencyProps> = memo(({ value = 0 }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <div className="font-semibold">{formatter.format(Number(value))}</div>;
});

Currency.displayName = 'Currency';
