import Footer from '@/components/Footer';
import Header from '@/components/Header';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default layout;
