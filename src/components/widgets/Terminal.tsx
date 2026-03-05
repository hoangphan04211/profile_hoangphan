import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface CommandOutput {
    id: string;
    command: string;
    output: React.ReactNode;
}

const Terminal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandOutput[]>([
        {
            id: 'init',
            command: '',
            output: (
                <div>
                    <span className="text-cyber-green">System Initialized.</span><br />
                    Type <span className="text-cyber-purple font-bold">'help'</span> to see available commands.
                </div>
            )
        }
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleToggle = () => setIsOpen(prev => !prev);
        window.addEventListener('toggle-terminal', handleToggle);
        return () => window.removeEventListener('toggle-terminal', handleToggle);
    }, []);

    useEffect(() => {
        if (isOpen && bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
            inputRef.current?.focus();
        }
    }, [history, isOpen]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        let output: React.ReactNode = '';

        switch (cmd) {
            case 'help':
                output = (
                    <div className="text-gray-300">
                        <p>Available commands:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li><span className="text-cyber-blue">about</span>    - Who is HP?</li>
                            <li><span className="text-cyber-blue">skills</span>   - View technical skills map</li>
                            <li><span className="text-cyber-blue">projects</span> - View project portfolio</li>
                            <li><span className="text-cyber-blue">github</span>   - Open GitHub profile</li>
                            <li><span className="text-cyber-blue">contact</span>  - Launch contact protocol</li>
                            <li><span className="text-cyber-blue">clear</span>    - Clear terminal completely</li>
                        </ul>
                    </div>
                );
                break;
            case 'about':
            case 'skills':
            case 'projects':
            case 'contact':
                // Scroll to section
                output = <span className="text-cyber-green">Executing navigation sequence: {cmd}...</span>;
                const element = document.getElementById(cmd);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                } else {
                    output = <span className="text-cyber-pink overflow-wrap break-words">Warning: Section '{cmd}' is currently offline/unavailable.</span>;
                }
                break;
            case 'github':
                output = <span className="text-cyber-green">Opening external link: GitHub...</span>;
                window.open('https://github.com', '_blank');
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            default:
                output = <span className="text-cyber-pink">Command not recognized: '{cmd}'. Type 'help' for available commands.</span>;
        }

        setHistory(prev => [...prev, {
            id: Date.now().toString(),
            command: cmd,
            output
        }]);
        setInput('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    className={cn(
                        "fixed z-[100] flex flex-col glass-panel shadow-2xl overflow-hidden font-mono",
                        isMaximized ? "inset-4" : "bottom-4 right-4 md:bottom-8 md:right-8 w-[95vw] md:w-[600px] h-[400px]"
                    )}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center px-4 py-2 border-b border-cyber-blue/30 bg-cyber-bg/50">
                        <div className="flex items-center gap-2 text-cyber-blue text-sm">
                            <TerminalIcon size={16} />
                            <span>root@hp-os:~</span>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => setIsMaximized(!isMaximized)} className="text-gray-400 hover:text-cyber-green transition-colors">
                                {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                            </button>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-cyber-pink transition-colors">
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Output Area */}
                    <div className="flex-grow p-4 overflow-y-auto hide-scrollbar text-sm space-y-4">
                        {history.map((item) => (
                            <div key={item.id} className="space-y-1">
                                {item.command && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-cyber-purple">root@hp-os:~$</span>
                                        <span className="text-gray-200">{item.command}</span>
                                    </div>
                                )}
                                <div className="pl-2 border-l border-cyber-blue/20">
                                    {item.output}
                                </div>
                            </div>
                        ))}
                        <div ref={bottomRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleCommand} className="p-4 border-t border-cyber-blue/30 bg-cyber-bg/80 flex items-center gap-2 relative">
                        {/* Animated Scanline overlay restricted to input area */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-green/30 animate-[scanline_2s_linear_infinite]" style={{ animationDuration: '3s' }}></div>

                        <span className="text-cyber-purple">root@hp-os:~$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-grow bg-transparent outline-none text-gray-200 placeholder-gray-600 font-mono caret-cyber-green"
                            placeholder="Enter command..."
                            autoComplete="off"
                            spellCheck="false"
                            autoFocus
                        />
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Terminal;
