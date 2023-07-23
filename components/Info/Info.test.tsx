import { renderWithStore } from '@test-utils';
import * as ProductsMock from '@utils/testData/productList.json';
import { Info } from './Info';

describe('Info', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<Info data={ProductsMock[0]} />);
        expect(container).toMatchSnapshot();
    });
});
