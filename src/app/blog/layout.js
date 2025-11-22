import Footer from '@/components/Footer';

export default function BlogLayout({ children }) {
    return (
        <>
            {children}
            <Footer />
        </>
    );
}
