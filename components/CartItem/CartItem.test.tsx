import { renderWithStore } from '@test-utils';
import * as Products from '@utils/testData/productList.json';
import { CartItem } from './CartItem';

describe('CartItem', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<CartItem data={Products[0]} />);
        expect(container).toMatchSnapshot();
    });
});
