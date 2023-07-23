import PaginatedProductsPage from '@/components/PaginatedProductsPage';
import Billboard from '@/components/ui/Billboard';
import Container from '@/components/ui/Container';
import getProducts from '@/services/get-products';
import { Billboard as IBillboard, Product } from '@/types';
import { Order, getComparator, stableSort } from '@/utils';
import { FC } from 'react';
import { IProductPage } from './type';

export const revalidate = 0;

const ProductPage: FC<IProductPage> = async ({ params, searchParams }) => {
    const { sort } = searchParams;
    const pageId = Number(params?.pageId) || 1;
    const { products, total } = await getProducts({ skip: pageId * 20, limit: 20 });
    const billboard = { label: 'Explore The Special Collection!', imageUrl: '/landing-banner.avif' } as IBillboard;

    const filteredProducts = () => {
        if (sort) {
            if (sort === 'best-rating') {
                return stableSort<Product>([...products], getComparator('desc' as Order, 'rating'));
            } else if (sort === 'price-htl') {
                return stableSort<Product>([...products], getComparator('desc' as Order, 'price'));
            } else if (sort === 'price-lth') {
                return stableSort<Product>([...products], getComparator('asc' as Order, 'price'));
            }
        }
        return products;
    };
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <PaginatedProductsPage
                        products={filteredProducts() ?? []}
                        currentPage={pageId}
                        totalProducts={total}
                        perPage={20}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ProductPage;
