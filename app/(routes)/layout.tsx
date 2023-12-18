import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

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
