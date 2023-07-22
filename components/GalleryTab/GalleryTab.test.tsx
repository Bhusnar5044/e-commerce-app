import { render } from '@test-utils';
import { GalleryTab } from './GalleryTab';

describe('GalleryTab', () => {
    it('should render properly', () => {
        const { container } = render(<GalleryTab image={{ id: 'dummy', url: '' }} />);
        expect(container).toMatchSnapshot();
    });
});
