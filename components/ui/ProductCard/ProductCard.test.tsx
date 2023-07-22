import { render } from '@test-utils';
import * as ProductListMock from '@utils/testData/productList.json';
import { ProductCard } from './ProductCard';

describe('ProductCard', () => {
    it('should render properly', () => {
        const { container } = render(<ProductCard data={ProductListMock[0]} />);
        expect(container).toMatchSnapshot();
    });
});
