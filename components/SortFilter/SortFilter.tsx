'use client';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { FC, memo, useEffect, useState } from 'react';

export const SortFilter: FC = memo(() => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const sort = searchParams.get('sort');
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(sort === 'best-rating' || sort === 'price-lth' || sort === 'price-htl');
    }, [sort]);

    return (
        <div className="flex items-center justify-center py-2">
            <div className="relative inline-block text-left">
                <Menu>
                    {({ open }) => (
                        <>
                            <span className="rounded-md shadow-sm">
                                <Menu.Button
                                    className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue ${
                                        selected ? 'bg-gray-50 text-gray-800' : ''
                                    }`}
                                >
                                    <span>Sort</span>
                                    <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Menu.Button>
                            </span>

                            <Transition
                                className="absolute z-10 right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                                show={open}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Link
                                    href={`${pathname}?sort=best-rating`}
                                    className={`${
                                        sort === 'best-rating' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    Best Rating
                                </Link>

                                <Link
                                    href={{
                                        pathname,
                                        query: { sort: 'price-lth' },
                                    }}
                                    className={`${
                                        sort === 'price-lth' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    Price: Low to High
                                </Link>

                                <Link
                                    href={{
                                        pathname,
                                        query: { sort: 'price-htl' },
                                    }}
                                    className={`${
                                        sort === 'price-htl' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                    } flex justify-between w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    Price: High to Low
                                </Link>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        </div>
    );
});

SortFilter.displayName = 'SortFilter';
