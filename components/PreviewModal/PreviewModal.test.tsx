import { render } from '@test-utils';
import { PreviewModal } from './PreviewModal';

describe('PreviewModal', () => {
    it('should render properly', () => {
        const { container } = render(<PreviewModal />);
        expect(container).toMatchSnapshot();
    });
});
