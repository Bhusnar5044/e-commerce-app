'use client';

import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo, useCallback, useEffect, useState } from 'react';

import Button from '@/components/ui/Button';
import { useAppSelector } from '@/redux';

export const NavbarActions = memo(() => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useAppSelector((state) => state.cart);
    const router = useRouter();

    const handleNavigation = useCallback(() => {
        router.push('/cart');
    }, [router]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={handleNavigation} className="flex items-center rounded-full bg-black px-4 py-2">
                <ShoppingBag size={20} color="white" />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    );
});

NavbarActions.displayName = 'NavbarActions';
