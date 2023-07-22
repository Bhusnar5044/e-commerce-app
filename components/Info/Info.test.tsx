import { Product } from '@/types';
import { render } from '@test-utils';
import { Info } from './Info';

const mockData: Product = {
    id: '1',
    category: { id: '1', name: 'Glasses' },
    price: '12',
    isFeatured: true,
    name: 'Dummy',
    size: { id: '1', name: 'S', value: '12' },
    color: { id: '1', name: 'Gray', value: 'gray' },
    images: [{ id: '1', url: '' }],
};

describe('Info', () => {
    it('should render properly', () => {
        const { container } = render(<Info data={mockData} />);
        expect(container).toMatchSnapshot();
    });
});
