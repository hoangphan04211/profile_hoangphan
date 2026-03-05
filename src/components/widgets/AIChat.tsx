import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Cpu, Bot } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    isTyping?: boolean;
}

const QA_DATABASE: Record<string, string> = {
    'who is': 'Phan Văn Hoàng (HP) is a Software Developer and IT Engineer specializing in building modern, high-performance applications and futuristic UI architectures.',
    'technology': 'HP uses React, TailwindCSS, Framer Motion, Three.js, Spring Boot, C#, and Python among other technologies.',
    'project': 'You can view his projects by navigating to the Projects section or typing "projects" in the terminal. Some key projects include AI interfaces and modern web applications.',
    'skill': 'HP possesses skills in Frontend (React), Backend (Spring Boot, Laravel), Databases (SQL), and DevOps (Docker). Check out the Skills section for a detailed radar chart.',
    'contact': 'You can reach out to HP via the Contact section below, or email directly. Links to GitHub and LinkedIn are also available in the footer.',
    'hello': 'Greetings, user. I am the HP Assistant AI. How can I help you navigate this profile?',
    'hi': 'Greetings, user. I am the HP Assistant AI. How can I help you navigate this profile?',
    'help': 'You can ask me questions like: "Who is HP?", "What are his skills?", "Show me projects", or "How to contact him?".',
};

const AIChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'System Online. I am the HP Assistant AI. Ask me anything about the developer.', sender: 'ai' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getAIResponse = (query: string): string => {
        const lowerQuery = query.toLowerCase();
        for (const [key, response] of Object.entries(QA_DATABASE)) {
            if (lowerQuery.includes(key)) {
                return response;
            }
        }
        return "I don't have that information in my current database. Try asking about his skills, projects, or background.";
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setInput('');

        // Add user message
        setMessages(prev => [...prev, { id: Date.now().toString(), text: userMsg, sender: 'user' }]);

        // Add typing indicator
        const typingId = (Date.now() + 1).toString();
        setMessages(prev => [...prev, { id: typingId, text: '...', sender: 'ai', isTyping: true }]);

        // Simulate network delay and add response
        setTimeout(() => {
            setMessages(prev => prev.filter(m => m.id !== typingId));
            const response = getAIResponse(userMsg);
            setMessages(prev => [...prev, { id: (Date.now() + 2).toString(), text: response, sender: 'ai' }]);
        }, 1200);
    };

    return (
        <>
            {/* Floating Action Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                initial={{ scale: 0 }}
                animate={{ scale: isOpen ? 0 : 1 }}
                whileHover={{ scale: 1.1 }}
                className={cn(
                    "fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 p-4 rounded-full glass-panel-glow",
                    "text-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] hover:border-cyber-purple transition-all duration-300",
                    isOpen ? "pointer-events-none opacity-0" : "opacity-100"
                )}
            >
                <Cpu size={28} className="animate-pulse" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[100] w-[90vw] md:w-[350px] h-[500px] glass-panel flex flex-col overflow-hidden rounded-xl border border-cyber-purple/30 shadow-[0_0_30px_rgba(176,38,255,0.2)]"
                    >
                        {/* Header */}
                        <div className="bg-cyber-purple/20 p-4 flex justify-between items-center border-b border-cyber-purple/30 backdrop-blur-md">
                            <div className="flex items-center gap-2">
                                <Bot className="text-cyber-purple shadow-cyber-purple" size={24} />
                                <span className="font-mono font-bold text-gray-200 tracking-wider">HP_AI<span className="text-cyber-purple animate-pulse">_</span></span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-cyber-pink transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-grow p-4 overflow-y-auto hide-scrollbar space-y-4 bg-cyber-bg/60">
                            {messages.map((msg) => (
                                <div key={msg.id} className={cn("flex", msg.sender === 'user' ? "justify-end" : "justify-start")}>
                                    <div className={cn(
                                        "max-w-[85%] p-3 rounded-lg text-sm font-sans",
                                        msg.sender === 'user'
                                            ? "bg-cyber-blue/20 border border-cyber-blue/30 text-gray-100 rounded-tr-none"
                                            : "bg-cyber-surface border border-cyber-purple/30 text-gray-300 rounded-tl-none"
                                    )}>
                                        {msg.isTyping ? (
                                            <span className="flex gap-1 items-center h-5">
                                                <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-bounce"></span>
                                                <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                                <span className="w-1.5 h-1.5 bg-cyber-purple rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                            </span>
                                        ) : (
                                            msg.text
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-cyber-surface border-t border-cyber-purple/30 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask AI..."
                                className="flex-grow bg-cyber-bg/50 border border-cyber-blue/20 rounded-md px-3 text-sm text-gray-200 outline-none focus:border-cyber-purple transition-colors placeholder-gray-500 font-sans"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="p-2 bg-cyber-purple/20 text-cyber-purple rounded-md hover:bg-cyber-purple/40 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-cyber-purple/30"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChat;
