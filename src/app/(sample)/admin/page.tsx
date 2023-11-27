'use client';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const AdminPage = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const email: any = session?.user?.email;

    return (
        <div className='flex flex-col items-center min-h-[300px] mt-[50px]'>
            <h1>Admin page with role admin</h1>
            {status === 'authenticated' ? <p>Signed in as {email} </p> : ''}
            {status === 'authenticated' ? (
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded'
                    onClick={() => router.push('/signout')}
                >
                    Logout
                </button>
            ) : (
                ''
            )}
        </div>
    );
};

export default AdminPage;
