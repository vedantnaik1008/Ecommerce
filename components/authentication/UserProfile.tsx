'use client';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

const UserProfileAcc = () => {
    return (
        <>
            <UserButton afterSignOutUrl='/' />
        </>
    );
};

export default UserProfileAcc;
