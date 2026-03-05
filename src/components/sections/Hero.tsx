import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight } from 'lucide-react';
import { GlitchText } from '../ui/GlitchText';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-[90vh] flex flex-col justify-center items-start pt-20 relative">
            <div className="absolute top-20 right-0 w-64 h-64 bg-cyber-purple/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-cyber-blue/20 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full flex justify-between items-center"
            >
                <div>
                    {/* Decorative top border */}
                    <div className="flex items-center gap-2 mb-8 text-cyber-blue font-mono text-sm">
                        <Terminal size={16} />
                        <span>System.Init()</span>
                        <div className="w-12 h-[1px] bg-cyber-blue mt-1"></div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight mb-4">
                        <GlitchText text="Phan Van Hoang" className="text-gray-100" />
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-cyber-blue mb-8 font-mono">
                        <span className="text-gray-400">{'<'}</span>
                        <Typewriter
                            words={['Software Developer', 'IT Engineer', 'Cyber Architect', 'System Builder']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        <span className="text-gray-400">{'>'}</span>
                    </h2>

                    <div className="font-mono text-gray-400 text-sm md:text-base space-y-2 mb-12 border-l-2 border-cyber-purple/50 pl-4 py-2 bg-cyber-surface/30 backdrop-blur-sm shadow-[inset_2px_0_10px_rgba(176,38,255,0.05)] w-fit rounded-r-md">
                        <p className="flex items-center gap-2">
                            <ChevronRight size={14} className="text-cyber-green" />
                            <span className="text-cyber-green overflow-hidden whitespace-nowrap border-r-2 border-transparent pr-1 animate-[typing_2s_steps(40,end)]">Initializing developer profile...</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <ChevronRight size={14} className="text-cyber-green" />
                            <span className="text-cyber-green overflow-hidden whitespace-nowrap border-r-2 border-transparent pr-1 animate-[typing_2s_steps(40,end)_2s_both]">Loading skills...</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <ChevronRight size={14} className="text-cyber-green" />
                            <span className="text-cyber-green font-bold text-glow-green overflow-hidden whitespace-nowrap border-r-2 border-transparent pr-1 animate-[typing_1s_steps(40,end)_4s_both]">System ready.</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href="#projects" className="relative px-8 py-3 group overflow-hidden rounded bg-cyber-blue/10 backdrop-blur-sm border border-cyber-blue text-cyber-blue font-mono text-center shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all">
                            <span className="absolute w-0 h-full bg-cyber-blue top-0 left-0 -z-10 group-hover:w-full transition-all duration-300"></span>
                            <span className="relative z-10 group-hover:text-cyber-bg font-bold tracking-wider">View Projects</span>
                        </a>
                        <button
                            onClick={() => window.dispatchEvent(new CustomEvent('toggle-terminal'))}
                            className="px-8 py-3 border border-cyber-purple text-cyber-purple font-mono hover:bg-cyber-purple/10 rounded transition-all shadow-[0_0_10px_rgba(176,38,255,0.2)] hover:shadow-[0_0_20px_rgba(176,38,255,0.5)] group flex items-center justify-center gap-2"
                        >
                            <Terminal size={18} className="group-hover:animate-pulse" />
                            Launch Terminal
                        </button>
                    </div>
                </div>

                {/* Visual Decorative Element for Desktop */}
                <div className="hidden lg:block relative w-[400px] h-[400px]">
                    <div className="absolute inset-0 border-2 border-cyber-blue/30 rounded-full animate-[spin_20s_linear_infinite] border-dashed"></div>
                    <div className="absolute inset-8 border border-cyber-purple/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    <div className="absolute inset-16 border-2 border-cyber-green/20 rounded-full animate-[spin_25s_linear_infinite] border-dotted gap-4"></div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-32 h-32 bg-cyber-surface rounded-full border border-cyber-blue/50 shadow-[0_0_30px_rgba(0,240,255,0.2)] flex items-center justify-center">
                            <span className="font-mono text-3xl font-bold text-cyber-blue animate-pulse">HP_</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
