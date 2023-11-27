import React from 'react';
import SignIn from '@/components/signin.component';

const SignInPage = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h1 className='text-3xl'>Sign In</h1>
            <SignIn />
        </div>
    );
};

export default SignInPage;
