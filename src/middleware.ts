import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextauth);
        console.log(request.nextauth.token);
        if (
            request.nextUrl.pathname.startsWith('/admin') &&
            request.nextauth.token?.role !== 'ADMIN'
        ) {
            return NextResponse.rewrite(new URL('/404', request.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ['/admin', '/home'],
};
