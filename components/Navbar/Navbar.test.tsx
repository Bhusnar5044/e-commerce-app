import { render } from '@test-utils';
import { Navbar } from './Navbar';

describe('Navbar', () => {
    it('should render properly', () => {
        const { container } = render(<Navbar />);
        expect(container).toMatchSnapshot();
    });
});
