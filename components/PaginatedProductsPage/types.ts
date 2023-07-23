import { Product } from '@utils/types';

export interface IPageProps {
    products: Product[];
    currentPage: number;
    totalProducts: number;
    perPage: number;
}
