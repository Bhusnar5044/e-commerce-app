import { render } from '@test-utils';
import { Billboard } from './Billboard';

describe('Billboard', () => {
    it('should render properly', () => {
        const { container } = render(<Billboard data={{ id: '', label: 'dummy', imageUrl: '' }} />);
        expect(container).toMatchSnapshot();
    });
});
