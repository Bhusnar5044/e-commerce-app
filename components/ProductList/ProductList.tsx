import NoResults from '@/components/ui/NoResults';
import ProductCard from '@/components/ui/ProductCard';
import { memo } from 'react';
import SortFilter from '../SortFilter';
import { IProps } from './types';

export const ProductList: React.FC<IProps> = memo(({ title, items }) => {
    return (
        <div className="space-y-4">
            <div className="flex justify-between align-center">
                <h3 className="font-bold text-3xl">{title}</h3>
                <SortFilter />
            </div>
            {items.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {items.map((item) => (
                    <ProductCard key={item.title} data={item} />
                ))}
            </div>
        </div>
    );
});

ProductList.displayName = 'ProductList';
