import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalState } from './type';

export const initialState: IModalState = {
    isOpen: false,
    data: undefined,
};

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        onOpen: (state, action: PayloadAction<Product>) => ({ ...state, isOpen: true, data: action.payload }),
        onClose: () => ({ isOpen: false, data: undefined }),
    },
});

export const { onClose, onOpen } = modal.actions;
