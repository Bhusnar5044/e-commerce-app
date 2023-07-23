import { renderWithStore } from '@test-utils';
import { PreviewModal } from './PreviewModal';

describe('PreviewModal', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<PreviewModal />);
        expect(container).toMatchSnapshot();
    });
});
