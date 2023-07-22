import { render } from '@test-utils';
import { ProductList } from './ProductList';

describe('ProductList', () => {
    it('should render properly', () => {
        const { container } = render(<ProductList title={'Dummy'} items={[]} />);
        expect(container).toMatchSnapshot();
    });
});
