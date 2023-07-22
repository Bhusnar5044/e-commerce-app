import { render } from '@test-utils';
import { IconButton } from './IconButton';

describe('IconButton', () => {
    it('should render properly', () => {
        const { container } = render(<IconButton icon={<svg />} />);
        expect(container).toMatchSnapshot();
    });
});
