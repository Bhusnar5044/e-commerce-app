import { Product } from '@/types';

export interface IPageProps {
    products: Product[];
    currentPage: number;
    totalProducts: number;
    perPage: number;
}
