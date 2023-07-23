import Billboard from '@/components/ui/Billboard';
import Container from '@/components/ui/Container';
import NoResults from '@/components/ui/NoResults';
import ProductCard from '@/components/ui/ProductCard';

import getProducts from '@/services/get-products';
import { CategoryPageProps } from './types';

export const revalidate = 0;

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
    const { products } = await getProducts({
        category: params.category,
    });
    const billBoard = {
        label: `Explore the ${params.category} Collection`,
        imageUrl: '/banner2.jpg',
    };

    return (
        <div className="bg-white">
            <Container>
                <Billboard data={billBoard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {products.map((item) => (
                                    <ProductCard key={item.id} data={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CategoryPage;
