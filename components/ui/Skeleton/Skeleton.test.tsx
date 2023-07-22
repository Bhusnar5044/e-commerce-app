import { render } from '@test-utils';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
    it('should render properly', () => {
        const { container } = render(<Skeleton />);
        expect(container).toMatchSnapshot();
    });
});
