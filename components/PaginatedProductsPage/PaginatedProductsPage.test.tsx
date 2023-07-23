import { renderWithStore } from '@test-utils';
import ProductsMock from '@utils/testData/productList.json';
import { PaginatedProductsPage } from './PaginatedProductsPage';

describe('PaginatedProductsPage', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(
            <PaginatedProductsPage products={ProductsMock} currentPage={1} totalProducts={1} perPage={1} />,
        );
        expect(container).toMatchSnapshot();
    });
});
