import { Product } from '@utils/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}`;

const getProduct = async (id: number): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`);

    return res.json();
};

export default getProduct;
