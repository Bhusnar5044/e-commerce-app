import NoResults from '@/components/ui/NoResults';
import ProductCard from '@/components/ui/ProductCard';
import { memo } from 'react';
import SearchBox from '../SearchBox';
import SortFilter from '../SortFilter';
import { IProps } from './types';

export const ProductList: React.FC<IProps> = memo(({ title, items }) => {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap justify-between items-center sticky top-[4rem] z-30 bg-white">
                <h3 className="font-bold text-3xl">{title}</h3>
                <div className="flex gap-2 items-center">
                    <SearchBox />
                    <SortFilter />
                </div>
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
