'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import React from 'react';

const UserProfileAcc = () => {
    const { user } = useUser();
    return (
        <>
            <UserButton afterSignOutUrl='/' />
        </>
    );
};

export default UserProfileAcc;
