import PaginatedProductsPage from '@/components/PaginatedProductsPage';
import Billboard from '@/components/ui/Billboard';
import Container from '@/components/ui/Container';
import getProducts from '@/services/get-products';
import { filterProducts } from '@utils/filterResult';
import { Billboard as IBillboard } from '@utils/types';
import { FC } from 'react';

export const revalidate = 0;
interface HomePageProps {
    searchParams: {
        sort?: string;
        search?: string;
    };
}

const HomePage: FC<HomePageProps> = async ({ searchParams }) => {
    const { sort, search } = searchParams;
    const { products, total } = await getProducts({ limit: 20 });
    const billboard = { label: 'Explore The Special Collection!', imageUrl: '/landing-banner.avif' } as IBillboard;

    const filteredProducts = filterProducts(products, sort ?? '', search ?? '');

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    {/* <ProductList title="Featured Products" items={products ?? []} /> */}
                    <PaginatedProductsPage
                        products={filteredProducts}
                        currentPage={1}
                        totalProducts={total}
                        perPage={20}
                    />
                </div>
                <></>
            </div>
        </Container>
    );
};

export default HomePage;
