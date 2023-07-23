import PaginatedProductsPage from '@/components/PaginatedProductsPage';
import Billboard from '@/components/ui/Billboard';
import Container from '@/components/ui/Container';
import getProducts from '@/services/get-products';
import { Billboard as IBillboard } from '@/types';
import { FC } from 'react';
import { IProductPage } from './type';

export const revalidate = 0;

const ProductPage: FC<IProductPage> = async ({ params }) => {
    const pageId = Number(params?.pageId) || 1;
    const { products, total } = await getProducts({ skip: pageId * 20, limit: 20 });
    const billboard = { label: 'Explore The Special Collection!', imageUrl: '/landing-banner.avif' } as IBillboard;

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <PaginatedProductsPage
                        products={products ?? []}
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
