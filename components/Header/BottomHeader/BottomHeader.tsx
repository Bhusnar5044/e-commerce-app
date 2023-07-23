import MainNav from '@/components/MainNav';
import getCategories from '@/services/get-categories';

export const BottomHeader = async () => {
    const categories = await getCategories();

    return (
        <div className="dark:bg-gray-700 w-full px-4 pt-[6rem] pb-2 flex items-center">
            <MainNav data={categories} />
        </div>
    );
};

BottomHeader.displayName = 'BottomHeader';
