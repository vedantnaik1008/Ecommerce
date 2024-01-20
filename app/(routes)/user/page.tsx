import DynamicHankoProfile from '@/components/authentication/HankoProfile'

const Page = () => {
    return (
        <>
            <div className='flex min-h-screen flex-col items-center justify-center  mx-auto  pt-[100px] bg-white'>
                <DynamicHankoProfile />
            </div>
        </>
    );
};

export default Page;
