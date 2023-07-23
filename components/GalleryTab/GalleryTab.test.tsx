import { Tab } from '@headlessui/react';
import { render } from '@test-utils';
import * as ProductsMock from '@utils/testData/productList.json';
import { GalleryTab } from './GalleryTab';

describe('GalleryTab', () => {
    it('should render properly', () => {
        const { container } = render(
            <Tab.Group>
                <GalleryTab image={ProductsMock[0].thumbnail} />
            </Tab.Group>,
        );
        expect(container).toMatchSnapshot();
    });
});
