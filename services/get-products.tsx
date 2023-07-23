import { ProductsResponse } from '@/types';
import qs from 'query-string';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface Query {
    category?: string;
    skip?: number;
    limit?: number;
}

const getProducts = async (query: Query): Promise<ProductsResponse> => {
    const url = qs.stringifyUrl({
        url: query.category ? `${URL}/category/${query.category}` : URL,
        query: {
            skip: query.skip,
            limit: query.limit,
        },
    });

    const res = await fetch(url);

    return res.json();
};

export default getProducts;
