import { memo } from 'react';

import { Tab } from '@headlessui/react';
import NextImage from 'next/image';

import { cn } from '@/utils';
import { GalleryTabProps } from './types';

export const GalleryTab: React.FC<GalleryTabProps> = memo(({ image }) => {
    return (
        <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                        <NextImage fill src={image.url} alt="" className="object-cover object-center" />
                    </span>
                    <span
                        className={cn(
                            'absolute inset-0 rounded-md ring-2 ring-offset-2',
                            selected ? 'ring-black' : 'ring-transparent',
                        )}
                    />
                </div>
            )}
        </Tab>
    );
});

GalleryTab.displayName = 'GalleryTab';
