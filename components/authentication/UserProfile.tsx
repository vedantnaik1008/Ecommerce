'use client';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const UserProfileAcc = () => {
    return (
        <>
            <UserButton afterSignOutUrl='/dashboard' />
        </>
    );
};

export default UserProfileAcc;
