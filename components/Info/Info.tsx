'use client';

import { ShoppingCart } from 'lucide-react';

import Button from '@/components/ui/Button';
import Currency from '@/components/ui/Currency';
import { addItem } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/store';
import { memo } from 'react';
import { IProps } from './types';

export const Info: React.FC<IProps> = memo(({ data }) => {
    const dispatch = useAppDispatch();

    const onAddToCart = () => {
        dispatch(addItem(data));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.title}</h1>
            <h3 className="font-semibold text-black">{data.description}</h3>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="mt-10 flex items-center gap-x-3">
                <Button onClick={onAddToCart} className="flex items-center gap-x-2">
                    Add To Cart
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </div>
    );
});

Info.displayName = 'Info';
