import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 relative z-10 w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <div className="inline-flex items-center gap-4 mb-2">
                    <span className="text-cyber-blue font-mono text-xl">05.</span>
                    <h2 className="text-4xl font-bold font-mono text-glow-blue uppercase tracking-widest">Initiate Protocol</h2>
                </div>
                <div className="w-24 h-[1px] bg-cyber-blue mx-auto mt-4"></div>
                <p className="text-gray-400 font-mono text-sm mt-6">Secure transmission channel open. Awaiting input...</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 bg-cyber-bg/50 rounded-xl border border-white/10 p-2 md:p-8">

                {/* Contact Info Column */}
                <div className="md:col-span-2 space-y-8 p-6 md:p-0">
                    <div className="glass-panel p-6 rounded-lg text-center h-full flex flex-col justify-center items-center border-t border-cyber-purple/30 group hover:border-cyber-purple transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-cyber-bg flex items-center justify-center border border-cyber-purple/50 shadow-[0_0_15px_rgba(176,38,255,0.2)] group-hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] mb-6 transition-all duration-500">
                            <Terminal size={28} className="text-cyber-purple group-hover:animate-pulse" />
                        </div>
                        <h3 className="font-mono text-xl font-bold text-gray-200 mb-2">Direct Link</h3>
                        <p className="text-sm font-sans text-gray-400 mb-8">Establish a secure connection directly to my personal mainframe.</p>

                        <div className="flex gap-4">
                            <a href="mailto:example@gmail.com" className="p-3 bg-cyber-surface rounded-md border border-white/5 hover:border-cyber-blue hover:text-cyber-blue transition-colors text-gray-400">
                                <Mail size={20} />
                            </a>
                            <a href="https://github.com/PhanVanHoang" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyber-surface rounded-md border border-white/5 hover:border-cyber-purple hover:text-cyber-purple transition-colors text-gray-400">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyber-surface rounded-md border border-white/5 hover:border-cyber-green hover:text-cyber-green transition-colors text-gray-400">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Secure Form */}
                <div className="md:col-span-3">
                    <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-lg border-t border-cyber-blue/30 relative overflow-hidden group">

                        {/* Decorative background grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none opacity-20"></div>

                        <div className="relative z-10 space-y-6">

                            <div className="relative">
                                <label htmlFor="name" className="absolute -top-3 left-3 px-1 text-xs font-mono text-cyber-blue bg-cyber-bg z-10">ENTITY.NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-cyber-surface border border-white/20 rounded p-4 text-gray-200 font-mono text-sm outline-none focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                                    placeholder="Enter identifier..."
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="email" className="absolute -top-3 left-3 px-1 text-xs font-mono text-cyber-blue bg-cyber-bg z-10">ENTITY.CONTACT</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-cyber-surface border border-white/20 rounded p-4 text-gray-200 font-mono text-sm outline-none focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                                    placeholder="Enter encrypted address..."
                                />
                            </div>

                            <div className="relative">
                                <label htmlFor="message" className="absolute -top-3 left-3 px-1 text-xs font-mono text-cyber-blue bg-cyber-bg z-10">PAYLOAD.DATA</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-cyber-surface border border-white/20 rounded p-4 text-gray-200 font-mono text-sm outline-none focus:border-cyber-blue focus:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all resize-none"
                                    placeholder="Transmit message..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className="w-full py-4 bg-cyber-blue/10 border border-cyber-blue text-cyber-blue font-mono font-bold tracking-widest uppercase hover:bg-cyber-blue/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all rounded flex justify-center items-center gap-2 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                            >
                                <span className="absolute top-0 left-0 w-full h-[1px] bg-cyber-blue transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                                <span className="absolute bottom-0 right-0 w-full h-[1px] bg-cyber-blue transform translate-x-full group-hover/btn:-translate-x-full transition-transform duration-1000"></span>

                                {status === 'idle' ? (
                                    <>Transmit Data <Send size={18} /></>
                                ) : status === 'sending' ? (
                                    <span className="animate-pulse">Encrypting & Sending...</span>
                                ) : (
                                    <span className="text-cyber-green">Transmission Successful</span>
                                )}
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
