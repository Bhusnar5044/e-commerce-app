import { render } from '@test-utils';
import { Pagination } from './Pagination';

describe('Pagination', () => {
    it('should render properly', () => {
        const { container } = render(<Pagination totalItems={0} currentPage={0} renderPageLink={jest.fn()} />);
        expect(container).toMatchSnapshot();
    });
});
