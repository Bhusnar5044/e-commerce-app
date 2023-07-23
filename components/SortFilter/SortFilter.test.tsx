import { render } from '@test-utils';
import { SortFilter } from './SortFilter';

describe('SortFilter', () => {
    it('should render properly', () => {
        const { container } = render(<SortFilter />);
        expect(container).toMatchSnapshot();
    });
});
