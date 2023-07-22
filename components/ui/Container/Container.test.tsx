import { render } from '@test-utils';
import { Container } from './Container';

describe('Container', () => {
    it('should render properly', () => {
        const { container } = render(<Container>dummy</Container>);
        expect(container).toMatchSnapshot();
    });
});
