import usePagination from '@/hooks/usePagination';
import Link from 'next/link';
import { FC, memo } from 'react';
import { PaginationProps } from './types';

export const dotts = '...';

export const Pagination: FC<PaginationProps> = memo(
    ({ totalItems, currentPage, itemsPerPage = 20, renderPageLink }) => {
        const pages = usePagination(totalItems, currentPage, itemsPerPage);

        return (
            <div className="flex items-center justify-center my-8">
                {pages.map((pageNumber, i) =>
                    pageNumber === dotts ? (
                        <span key={i} className="px-4 py-2 rounded-full text-sm font-extralight text-black">
                            {pageNumber}
                        </span>
                    ) : (
                        <Link
                            key={i}
                            href={renderPageLink(pageNumber as number)}
                            className={`${
                                pageNumber === currentPage ? 'text-success-dark' : 'text-gray-500'
                            } px-4 py-2 mx-1 rounded-full text-sm font-semibold no-underline`}
                        >
                            {pageNumber}
                        </Link>
                    ),
                )}
            </div>
        );
    },
);

Pagination.displayName = 'Pagination';
