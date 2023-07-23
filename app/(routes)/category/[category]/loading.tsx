import Container from '@/components/ui/Container';
import { ProductsSkeleton } from '@/components/ui/ProductsSkeleton/ProductsSkeleton';
import Skeleton from '@/components/ui/Skeleton';

const Loading = () => {
    return (
        <Container>
            <div className="w-full h-full p-8">
                <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
                <div className="lg:grid lg:grid-cols-5 lg:gap-x-8 mt-8 h-full">
                    <div className="hidden lg:block">
                        <Skeleton className="w-full h-[500px] rounded-xl" />
                    </div>
                    <div className="mt-6 lg:col-span-4 lg:mt-0">
                        <ProductsSkeleton />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Loading;
