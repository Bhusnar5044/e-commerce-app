import { render } from '@test-utils';
import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
    it('should render properly', () => {
        const { container } = render(<SearchBox />);
        expect(container).toMatchSnapshot();
    });
});
