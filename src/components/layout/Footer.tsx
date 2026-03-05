import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-cyber-blue/20 bg-cyber-bg/80 backdrop-blur-md py-8 mt-20 relative z-10 w-full">
            <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center text-gray-400 gap-4">

                <div className="flex items-center gap-2">
                    <span className="font-mono text-sm">
                        <span className="text-cyber-purple">©</span> 2026 HP <span className="text-cyber-blue">—</span> Phan Van Hoang
                    </span>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors focus:outline-none focus:ring-1 focus:ring-cyber-blue rounded">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors focus:outline-none focus:ring-1 focus:ring-cyber-blue rounded">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:example@gmail.com" className="hover:text-cyber-blue transition-colors focus:outline-none focus:ring-1 focus:ring-cyber-blue rounded">
                        <Mail size={20} />
                    </a>
                </div>

                <div className="text-xs font-mono font-light text-gray-500">
                    <span className="text-cyber-green mr-1">●</span> System.Status: Online
                </div>

            </div>
        </footer>
    );
};

export default Footer;
