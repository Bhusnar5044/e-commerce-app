import { render } from '@test-utils';
import { Modal } from './Modal';

describe('Modal', () => {
    it('should render properly', () => {
        const { container } = render(
            <Modal open={false} onClose={jest.fn}>
                Dummy
            </Modal>,
        );
        expect(container).toMatchSnapshot();
    });
});
