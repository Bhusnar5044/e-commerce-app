import { memo } from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = memo(({ children }) => {
    return <div className="mx-auto max-w-screen-2xl">{children}</div>;
});

Container.displayName = 'Container';
