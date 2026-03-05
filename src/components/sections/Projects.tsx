import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal } from 'lucide-react';

const projectsData = [
    {
        id: "sys.01",
        title: "HP Smart Math",
        description: "An advanced mathematical challenge generator with a modern, high-performance UI architecture built for all grades.",
        tech: ["React", "TypeScript", "TailwindCSS", "Zustand"],
        github: "#",
        demo: "#",
        status: "ACTIVE"
    },
    {
        id: "net.02",
        title: "Cyber Security Dashboard",
        description: "Real-time threat monitoring interface featuring complex data visualizations and predictive analytics using AI models.",
        tech: ["Vue.js", "D3.js", "Python FastApi", "WebSockets"],
        github: "#",
        demo: "#",
        status: "DEPLOYED"
    },
    {
        id: "ai.03",
        title: "Neural Network Visualizer",
        description: "Interactive 3D representation of deep learning network weights and biases during the training phase.",
        tech: ["Three.js", "React Fiber", "TensorFlow.js"],
        github: "#",
        demo: "#",
        status: "BETA"
    },
    {
        id: "sys.04",
        title: "Enterprise Order Engine",
        description: "High-throughput microservices backend supporting distributed transactions across global data centers.",
        tech: ["Spring Boot", "Kafka", "PostgreSQL", "Docker"],
        github: "#",
        demo: "#",
        status: "PRODUCTION"
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 min-h-screen relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-cyber-blue font-mono text-xl">02.</span>
                    <h2 className="text-4xl font-bold font-mono text-glow-blue uppercase tracking-widest">Active Archives</h2>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-cyber-blue via-cyber-green to-transparent mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative"
                    >
                        {/* Glow Effect Behind Card */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-20 group-hover:opacity-60 blur transition duration-500 rounded-lg pointer-events-none"></div>

                        <div className="relative h-full bg-cyber-bg border border-white/10 p-6 rounded-lg flex flex-col justify-between overflow-hidden">
                            {/* Decorative background grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none opacity-20"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <Terminal className="text-cyber-green w-5 h-5" />
                                        <span className="font-mono text-xs text-cyber-green border border-cyber-green/30 px-2 py-0.5 rounded bg-cyber-green/5">
                                            ID: {project.id}
                                        </span>
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-cyber-blue transition-colors z-20" aria-label="GitHub Repository">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} className="text-gray-400 hover:text-cyber-blue transition-colors z-20" aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-glow-blue transition-all font-mono">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 leading-relaxed bg-cyber-surface/50 p-4 rounded border-l border-cyber-blue/30 relative">
                                    <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-blue/50"></span>
                                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue/50"></span>
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <ul className="flex flex-wrap gap-2 text-xs font-mono text-gray-500">
                                    {project.tech.map(t => (
                                        <li key={t} className="px-2 py-1 bg-white/5 rounded">
                                            {t}
                                        </li>
                                    ))}
                                </ul>

                                <span className="text-[10px] font-mono font-bold tracking-widest text-cyber-purple shrink-0">
                                    [{project.status}]
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 w-full flex justify-center">
                <button className="px-8 py-3 bg-transparent border border-cyber-blue text-cyber-blue font-mono text-sm hover:bg-cyber-blue/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all rounded relative overflow-hidden group">
                    <span className="relative z-10 font-bold tracking-wider uppercase">Load More Artifacts</span>
                    <span className="absolute top-0 left-0 w-full h-[1px] bg-cyber-blue transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="absolute bottom-0 right-0 w-full h-[1px] bg-cyber-blue transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></span>
                </button>
            </div>
        </section>
    );
};

export default Projects;
