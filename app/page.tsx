import Dashboard from '@/app/dashboard/page';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function Home() {
    const { userId } = auth();

    if (!userId) {
        redirect('/dashboard');
    }

    return (
        <>
            <Dashboard />
        </>
    );
}
