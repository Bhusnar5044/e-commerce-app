import { renderWithStore } from '@test-utils';
import { NavbarActions } from './NavbarActions';

jest.mock('next/navigation', () => ({
    ...require('next-router-mock'),
}));
describe('NavbarActions', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<NavbarActions />);
        expect(container).toMatchSnapshot();
    });
});
