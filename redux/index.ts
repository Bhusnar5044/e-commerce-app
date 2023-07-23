import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { auth, initialState as authInitialState } from './features/authAlice';
import { cart, initialState as cartInitialState } from './features/cartSlice';
import { modal, initialState as modalInitialState } from './features/modalSlice';

export const initialState = {
    auth: authInitialState,
    cart: cartInitialState,
    modal: modalInitialState,
};

export const store = configureStore({
    reducer: { auth: auth.reducer, cart: cart.reducer, modal: modal.reducer },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
