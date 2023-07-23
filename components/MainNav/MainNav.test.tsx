import { render } from '@test-utils';
import { MainNav } from './MainNav';

describe('MainNav', () => {
    it('should render properly', () => {
        const { container } = render(<MainNav data={['dummy']} />);
        expect(container).toMatchSnapshot();
    });
});
