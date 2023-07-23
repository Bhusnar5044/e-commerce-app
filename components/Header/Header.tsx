import Link from 'next/link';
import NavbarActions from '../NavbarActions';
import { Container } from '../ui/Container/Container';

export const Header = () => {
    return (
        <div className="bg-blue-200 w-full h-18 bg-amazon_blue text-lightText fixed top-0 z-50">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    {/* logo */}
                    <Link
                        href={'/'}
                        className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]"
                    >
                        <p className="font-bold text-xl">E-COMMERCE-APP</p>
                    </Link>

                    {/* cart */}
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

export default Header;

Header.displayName = 'Header';
