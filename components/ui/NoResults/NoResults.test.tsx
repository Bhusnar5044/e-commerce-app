import { render } from '@test-utils';
import { NoResults } from './NoResults';

describe('NoResults', () => {
    it('should render properly', () => {
        const { container } = render(<NoResults />);
        expect(container).toMatchSnapshot();
    });
});
