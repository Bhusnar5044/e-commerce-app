'use client';

import { Expand, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, memo } from 'react';

import Currency from '@/components/ui/Currency';
import IconButton from '@/components/ui/IconButton';
import { addItem } from '@/redux/features/cartSlice';
import { onOpen } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/store';
import { Product } from '@/types';

interface IProductCard {
    data: Product;
}

export const ProductCard: React.FC<IProductCard> = memo(({ data }) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    };

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        dispatch(onOpen(data));
    };

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        dispatch(addItem(data));
    };

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Image & actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image src={data.thumbnail} alt="" fill className="aspect-square object-cover rounded-md" />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton onClick={onPreview} icon={<Expand size={20} className="text-gray-600" />} />
                        <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className="text-gray-600" />} />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className="font-semibold text-lg truncate">{data.title}</p>
                <p className="text-sm text-gray-500">{data.category}</p>
            </div>
            {/* Price & Reiew */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
});

ProductCard.displayName = 'ProductCard';
