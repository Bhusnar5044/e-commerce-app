import MainNav from '@/components/MainNav';
import NavbarActions from '@/components/NavbarActions';
import Container from '@/components/ui/container';
import Link from 'next/link';

const categories = [
    { id: '1', name: 'Shirts' },
    { id: '2', name: 'Glasses' },
];

export const Navbar = async () => {
    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">E-COMMERCE-STORE</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
};

Navbar.displayName = 'Navbar';
