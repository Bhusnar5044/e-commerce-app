import { render } from '@test-utils';
import { MainNav } from './MainNav';

describe('MainNav', () => {
    it('should render properly', () => {
        const { container } = render(<MainNav data={[{ id: '1', name: 'dummy' }]} />);
        expect(container).toMatchSnapshot();
    });
});
