import { render } from '@test-utils';
import { PaginatedProductsPage } from './PaginatedProductsPage';

describe('PaginatedProductsPage', () => {
    it('should render properly', () => {
        const { container } = render(
            <PaginatedProductsPage products={[]} currentPage={0} totalProducts={0} perPage={0} />,
        );
        expect(container).toMatchSnapshot();
    });
});
