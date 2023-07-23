import { renderWithStore } from '@test-utils';
import { CartSummary } from './CartSummary';

jest.mock('next/navigation', () => ({
    ...require('next-router-mock'),
    useSearchParams: () => ({ get: jest.fn() }),
}));
describe('CartSummary', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<CartSummary />);
        expect(container).toMatchSnapshot();
    });
});
