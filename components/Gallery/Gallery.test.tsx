import { render } from '@test-utils';
import { Gallery } from './Gallery';

describe('Gallery', () => {
    it('should render properly', () => {
        const { container } = render(<Gallery images={[]} />);
        expect(container).toMatchSnapshot();
    });
});
