import { initialState } from '@/redux';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

export const mockStore = configureStore([]),
    store = mockStore({ ...initialState });

const WithStore: FC<PropsWithChildren> = (props) => <Provider store={store}>{props.children}</Provider>;

export const renderWithStore = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithStore, ...options });

// re-export everything
export * from '@testing-library/react';
export { userEvent };
