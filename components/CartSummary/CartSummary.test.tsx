import { initialState } from '@/redux';
import { fireEvent, mockStore, render, renderWithStore, screen } from '@test-utils';
import ProductsMock from '@utils/testData/productList.json';
import { Provider } from 'react-redux';
import { CartSummary } from './CartSummary';

describe('CartSummary', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<CartSummary />);
        expect(container).toMatchSnapshot();
        expect(screen.getByText(/Order summary/)).toBeInTheDocument();
    });

    it('should raise toast and empty cart on checkout click', () => {
        const store = mockStore({ ...initialState, cart: { items: ProductsMock } });
        render(
            <Provider store={store}>
                <CartSummary />
            </Provider>,
        );
        fireEvent.click(screen.getByRole('button', { name: 'Checkout' }));
        expect(store.getActions()).toEqual([
            {
                payload: undefined,
                type: 'cart/removeAll',
            },
        ]);
    });
});
