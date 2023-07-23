import { renderWithStore } from '@test-utils';
import { Header } from './Header';

jest.mock('next/navigation', () => ({
    ...require('next-router-mock'),
}));
describe('Header', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<Header />);
        expect(container).toMatchSnapshot();
    });
});
