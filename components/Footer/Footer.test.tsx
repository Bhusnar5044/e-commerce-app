import { render } from '@test-utils';
import { Footer } from './Footer';

describe('Footer', () => {
    it('should render properly', () => {
        const { container } = render(<Footer />);
        expect(container).toMatchSnapshot();
    });
});
