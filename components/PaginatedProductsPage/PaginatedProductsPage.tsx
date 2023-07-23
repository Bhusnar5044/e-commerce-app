import { FC, memo } from 'react';
import Pagination from '../Pagination';
import ProductList from '../ProductList';
import { IPageProps } from './types';

export const PaginatedProductsPage: FC<IPageProps> = memo(({ currentPage, totalProducts, perPage, products }) => {
    return (
        <div>
            <ProductList title="Featured Products" items={products ?? []} />
            <Pagination
                totalItems={totalProducts}
                currentPage={currentPage}
                itemsPerPage={perPage}
                renderPageLink={(page) => `/${page}`}
            />
        </div>
    );
});

PaginatedProductsPage.displayName = 'PaginatedProductsPage';
