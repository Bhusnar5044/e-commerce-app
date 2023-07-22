import { render } from '@test-utils';
import { Currency } from './Currency';

describe('Currency', () => {
    it('should render properly', () => {
        const { container } = render(<Currency />);
        expect(container).toMatchSnapshot();
    });
});
