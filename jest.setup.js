import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/navigation', () => ({
    ...require('next-router-mock'),
    useSearchParams: () => ({ get: jest.fn() }),
    usePathname: () => jest.fn(),
}));
