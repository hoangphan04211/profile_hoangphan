import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-cyber-bg text-gray-100 font-sans overflow-x-hidden flex flex-col pt-16 selection:bg-cyber-blue selection:text-cyber-bg relative z-10">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
