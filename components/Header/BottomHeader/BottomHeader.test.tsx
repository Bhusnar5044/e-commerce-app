import { render } from '@test-utils';
import { Suspense } from 'react';
import { BottomHeader } from './BottomHeader';

describe('BottomHeader', () => {
    it('should render properly', async () => {
        const { container } = render(
            <Suspense>
                <BottomHeader />
            </Suspense>,
        );
        expect(container).toMatchSnapshot();
    });
});
