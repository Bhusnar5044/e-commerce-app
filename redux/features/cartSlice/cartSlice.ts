import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@utils/types';
import { toast } from 'react-hot-toast';
import { ICartState } from './type';

export const initialState: ICartState = {
    items: [],
};

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Product>) => {
            if (state.items.some((item) => item.id === action.payload.id)) {
                toast('Item already in cart.');
                return state;
            }
            toast.success('Item added to cart.');
            return { items: [...state.items, action.payload] };
        },
        removeItem: (state, action: PayloadAction<string | number>) => ({
            items: state.items.filter((item) => item.id !== action.payload),
        }),
        removeAll: () => initialState,
    },
});

export const { addItem, removeAll, removeItem } = cart.actions;
