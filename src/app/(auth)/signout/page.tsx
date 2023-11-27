'use client';
import React, { useEffect } from 'react';
import { signOut } from 'next-auth/react';

const DeleteCookies = () => {
    useEffect(() => {
        signOut({
            callbackUrl: '/',
            redirect: true,
        });
    }, []);
    return null;
};

export default function SignOutPage() {
    return (
        <>
            <DeleteCookies />
        </>
    );
}
