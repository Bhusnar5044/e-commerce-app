'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

import { cn } from '@utils';
import { Container } from '../ui/Container/Container';
import { IProps } from './types';

export const MainNav: React.FC<IProps> = memo(({ data }) => {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route}`,
        label: route,
        active: pathname === `/category/${route}`,
    }));

    return (
        <Container>
            <nav className="mx-6 flex flex-wrap items-center justify-around">
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            'bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center',
                            route.active ? 'text-black' : 'text-neutral-500',
                        )}
                    >
                        {route.label}
                    </Link>
                ))}
            </nav>
        </Container>
    );
});

MainNav.displayName = 'MainNav';
