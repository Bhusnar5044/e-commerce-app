import { renderWithStore } from '@test-utils';
import { CartSummary } from './CartSummary';

describe('CartSummary', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<CartSummary />);
        expect(container).toMatchSnapshot();
    });
});
