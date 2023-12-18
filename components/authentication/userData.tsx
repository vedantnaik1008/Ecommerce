'use client';
import dynamic from 'next/dynamic';
const DynamicHankoAuth = dynamic(() => import('./HankoAuth'), {
    ssr: false,
});
import { Hanko } from '@teamhanko/hanko-elements';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';
import { Cookie } from 'next/font/google';

export const CookieFont = Cookie({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-family',
    weight: '400',
});
const UserData = () => {
    useEffect(() => {
        const userData = async () => {
            try {
                const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;
                const hanko = new Hanko(hankoApi);
                const user = await hanko.user.getCurrent();

                if (user && user.id) {
                    redirect('/dashboard');
                }
            } catch (error) {
                console.log(error, 'error');
            }
        };
        userData();
    }, []);
    return (
        <div
            className={`${CookieFont.variable} flex min-h-screen flex-col items-center justify-center px-4`}>
            <DynamicHankoAuth />
        </div>
    );
};

export default UserData;
