import { Order, getComparator, stableSort } from '@/utils';
import { Product } from './types';

export const filterProducts = (products: Product[], sort: string, search: string) => {
    if (sort) {
        if (sort === 'best-rating') {
            return stableSort<Product>([...products], getComparator('desc' as Order, 'rating'));
        } else if (sort === 'price-htl') {
            return stableSort<Product>([...products], getComparator('desc' as Order, 'price'));
        } else if (sort === 'price-lth') {
            return stableSort<Product>([...products], getComparator('asc' as Order, 'price'));
        }
    }
    if (search) {
        return products.filter(
            (product) =>
                product.title.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase()) ||
                product.price.toString() === search ||
                product.category.toLowerCase().includes(search.toLowerCase()),
        );
    }
    return products;
};
