'use client';

import { memo } from 'react';

import Gallery from '@/components/Gallery';
import Info from '@/components/Info';
import Modal from '@/components/ui/Modal';
import { onClose } from '@/redux/features/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';

export const PreviewModal = memo(() => {
    const { isOpen, data } = useAppSelector((state) => state.modal);
    const dispatch = useAppDispatch();

    if (!data) {
        return null;
    }

    const handleOnClose = () => dispatch(onClose());

    return (
        <Modal open={isOpen} onClose={handleOnClose}>
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className="sm:col-span-4 lg:col-span-5">
                    <Gallery images={data.images} />
                </div>
                <div className="sm:col-span-8 lg:col-span-7">
                    <Info data={data} />
                </div>
            </div>
        </Modal>
    );
});

PreviewModal.displayName = 'PreviewModal';
