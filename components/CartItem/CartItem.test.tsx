import { initialState } from '@/redux';
import { fireEvent, mockStore, render, renderWithStore, screen } from '@test-utils';
import * as Products from '@utils/testData/productList.json';
import { Provider } from 'react-redux';
import { CartItem } from './CartItem';

const store = mockStore({ ...initialState });
describe('CartItem', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<CartItem data={Products[0]} />);
        expect(container).toMatchSnapshot();
        expect(screen.getByText(Products[0].title)).toBeInTheDocument();
    });

    it('should dispatch remove cart item action on click of close icon', () => {
        render(
            <Provider store={store}>
                <CartItem data={Products[0]} />
            </Provider>,
        );
        const closeBtn = screen.getByTitle(/iconButton/);
        fireEvent.click(closeBtn);
        expect(store.getActions()).toEqual([{ payload: Products[0].id, type: 'cart/removeItem' }]);
    });
});
