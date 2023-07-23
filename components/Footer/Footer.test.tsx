import { render, screen } from '@test-utils';
import { Footer } from './Footer';

describe('Footer', () => {
    it('should render properly', () => {
        render(<Footer />);
        expect(screen.getByText(/2023 E-Commerce-Store, Inc. All rights reserved/i)).toBeInTheDocument();
    });
});
