import { render } from '@test-utils';
import * as Products from '@utils/testData/productList.json';
import { CartItem } from './CartItem';

describe('CartItem', () => {
    it('should render properly', () => {
        const { container } = render(<CartItem data={Products[0]} />);
        expect(container).toMatchSnapshot();
    });
});
