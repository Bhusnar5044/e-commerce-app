import { render } from '@test-utils';
import { CartSummary } from './CartSummary';

describe('CartSummary', () => {
    it('should render properly', () => {
        const { container } = render(<CartSummary />);
        expect(container).toMatchSnapshot();
    });
});
