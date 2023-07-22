import { render } from '@test-utils';
import { NavbarActions } from './NavbarActions';

describe('NavbarActions', () => {
    it('should render properly', () => {
        const { container } = render(<NavbarActions />);
        expect(container).toMatchSnapshot();
    });
});
