import { render } from '@test-utils';
import { ProductsSkeleton } from './ProductsSkeleton';

describe('ProductsSkeleton', () => {
    it('should render properly', () => {
        const { container } = render(<ProductsSkeleton />);
        expect(container).toMatchSnapshot();
    });
});
