'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, FC, KeyboardEvent, memo, useCallback, useState } from 'react';

export const SearchBox: FC = memo(() => {
    const [input, setInput] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    const handleInputChanges = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }, []);

    const handleEnterKey = useCallback(
        (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') router?.push(`${pathname}?search=${input}`);
        },
        [input, pathname, router],
    );

    const handleSubmit = useCallback(() => {
        router?.push(`${pathname}?search=${input}`);
    }, [input, pathname, router]);

    return (
        <>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
            </label>
            <div className="relative">
                <input
                    type="search"
                    id="default-search"
                    className="block w-full p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    onChange={handleInputChanges}
                    value={input}
                    onKeyDown={handleEnterKey}
                    required
                />
                <div
                    onClick={handleSubmit}
                    className="absolute inset-y-1 right-0 flex items-center pr-3 pointer-events-cursor"
                >
                    <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
});

SearchBox.displayName = 'SearchBox';
