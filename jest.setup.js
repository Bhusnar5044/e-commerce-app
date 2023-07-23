import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

require('jest-fetch-mock').enableMocks();

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {},
}));

jest.mock('next/navigation', () => ({
    ...require('next-router-mock'),
    useSearchParams: () => ({ get: jest.fn() }),
    usePathname: () => jest.fn(),
}));
