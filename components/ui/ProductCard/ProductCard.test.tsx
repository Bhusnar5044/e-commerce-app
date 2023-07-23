import { renderWithStore } from '@test-utils';
import * as ProductListMock from '@utils/testData/productList.json';
import { ProductCard } from './ProductCard';

jest.mock('next/navigation', () => ({
    ...require('next-router-mock'),
}));
describe('ProductCard', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<ProductCard data={ProductListMock[0]} />);
        expect(container).toMatchSnapshot();
    });
});
