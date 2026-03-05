import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Menu, X, Code2 } from 'lucide-react';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'glass-panel border-cyber-blue/30 shadow-lg shadow-cyber-blue/10 py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 group cursor-pointer"
                >
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-cyber-blue bg-cyber-surface overflow-hidden group-hover:border-cyber-purple transition-colors duration-300 shadow-[0_0_10px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_15px_rgba(176,38,255,0.5)]">
                        <Terminal className="w-5 h-5 text-cyber-blue group-hover:text-cyber-purple transition-colors" />
                        <div className="absolute inset-0 bg-cyber-blue/10 animate-pulse"></div>
                    </div>
                    <span className="text-xl font-bold tracking-wider font-mono text-glow-blue group-hover:text-glow-purple transition-all duration-300">
                        HP<span className="text-cyber-purple">_</span>
                    </span>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.name}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-gray-300 hover:text-cyber-blue font-mono text-sm relative group transition-colors"
                        >
                            <span className="text-cyber-purple opacity-50 mr-1 group-hover:opacity-100 transition-opacity">{'//'}</span>
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-blue transition-all duration-300 group-hover:w-full box-shadow-glow"></span>
                        </motion.a>
                    ))}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="px-4 py-2 text-sm font-mono text-cyber-green border border-cyber-green rounded bg-cyber-green/5 hover:bg-cyber-green/20 transition-all shadow-[0_0_10px_rgba(57,255,20,0.2)] hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] flex items-center gap-2"
                        onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}
                    >
                        <Code2 size={16} />
                        Terminal
                    </motion.button>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-300 hover:text-cyber-blue transition-colors focus:outline-none"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass-panel border-t border-cyber-blue/30 absolute top-full left-0 w-full"
                >
                    <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-cyber-blue hover:bg-cyber-blue/10 rounded-md transition-colors"
                            >
                                <span className="text-cyber-purple mr-2">{'//'}</span>{item.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;
