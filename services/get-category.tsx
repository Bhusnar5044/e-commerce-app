import { Category } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (category: string): Promise<Category> => {
    const res = await fetch(`${URL}/${category}`);

    return res.json();
};

export default getCategory;
