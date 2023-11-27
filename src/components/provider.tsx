'use client';
import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
    children: ReactNode | ReactNode[];
}

const Provider = ({ children }: ProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
