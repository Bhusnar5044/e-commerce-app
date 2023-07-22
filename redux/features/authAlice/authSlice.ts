import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from './type';

export const initialState: IAuthState = {
    isAuth: false,
    username: '',
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => ({
            ...state,
            isAuth: true,
            username: action.payload,
        }),
        logout: () => initialState,
    },
});

export const { login, logout } = auth.actions;
