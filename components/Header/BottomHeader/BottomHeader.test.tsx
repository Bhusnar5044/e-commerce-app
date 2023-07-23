import { render } from '@test-utils';
import { BottomHeader } from './BottomHeader';

describe('BottomHeader', () => {
    it('should render properly', () => {
        const { container } = render(<BottomHeader />);
        expect(container).toMatchSnapshot();
    });
});
