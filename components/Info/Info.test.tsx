import { render } from '@test-utils';
import * as ProductsMock from '@utils/testData/productList.json';
import { Info } from './Info';

describe('Info', () => {
    it('should render properly', () => {
        const { container } = render(<Info data={ProductsMock[0]} />);
        expect(container).toMatchSnapshot();
    });
});
