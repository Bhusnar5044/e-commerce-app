import { memo } from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = memo(({ children }) => {
    return <div className="mx-auto max-w-7xl">{children}</div>;
});

Container.displayName = 'Container';
