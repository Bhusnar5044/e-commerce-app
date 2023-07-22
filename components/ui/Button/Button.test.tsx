import { render } from '@test-utils';
import { Button } from './Button';

describe('Button', () => {
    it('should render properly', () => {
        const { container } = render(<Button />);
        expect(container).toMatchSnapshot();
    });
});
