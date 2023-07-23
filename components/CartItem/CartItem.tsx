import { X } from 'lucide-react';
import Image from 'next/image';

import Currency from '@/components/ui/Currency';
import IconButton from '@/components/ui/IconButton';
import { useAppDispatch } from '@/redux';
import { removeItem } from '@/redux/features/cartSlice';
import { Product } from '@/types';
import { FC, memo } from 'react';

interface CartItemProps {
    data: Product;
}

export const CartItem: FC<CartItemProps> = memo(({ data }) => {
    const dispatch = useAppDispatch();

    const onRemove = () => {
        dispatch(removeItem(data.id));
    };

    return (
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image fill src={data.thumbnail} alt="" className="object-cover object-center" />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className=" text-lg font-semibold text-black">{data.title}</p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    );
});

CartItem.displayName = 'CartItem';
