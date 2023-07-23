import Container from '@/components/ui/Container';
import { ProductsSkeleton } from '@/components/ui/ProductsSkeleton/ProductsSkeleton';
import Skeleton from '@/components/ui/Skeleton';

const Loading = () => {
    return (
        <Container>
            <div className="w-full h-full p-8">
                <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
                <ProductsSkeleton />
            </div>
        </Container>
    );
};

export default Loading;
