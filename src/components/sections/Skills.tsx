import React from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { GlobeCanvas } from '../ui/3D/Globe';
import { Code2, Database, Layout, Terminal as TerminalIcon, Shield, Server } from 'lucide-react';

const skillCategories = [
    {
        title: "Frontend Engineering",
        icon: <Layout className="text-cyber-blue" />,
        skills: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"]
    },
    {
        title: "Backend Architecture",
        icon: <Server className="text-cyber-purple" />,
        skills: ["Java Spring Boot", "C# .NET", "Python", "Node.js", "RESTful APIs"]
    },
    {
        title: "Database Management",
        icon: <Database className="text-cyber-green" />,
        skills: ["MySQL", "SQL Server", "PostgreSQL", "Redis", "MongoDB"]
    },
    {
        title: "DevOps & Tooling",
        icon: <TerminalIcon className="text-cyber-pink" />,
        skills: ["Git", "Docker", "CI/CD", "Linux", "AWS"]
    }
];

const radarData = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'Database', A: 80, fullMark: 100 },
    { subject: 'DevOps', A: 75, fullMark: 100 },
    { subject: 'UI/UX', A: 85, fullMark: 100 },
    { subject: 'Algorithms', A: 80, fullMark: 100 },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 min-h-screen relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-cyber-purple font-mono text-xl">01.</span>
                    <h2 className="text-4xl font-bold font-mono text-glow-blue uppercase tracking-widest">System Capabilities</h2>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-cyber-blue via-cyber-purple to-transparent mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Visualizations Column */}
                <div className="flex flex-col gap-8 h-full">
                    {/* Radar Chart */}
                    <div className="glass-panel p-6 rounded-xl flex-grow flex flex-col items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        <h3 className="font-mono text-cyber-blue mb-4 uppercase tracking-wider text-sm border-b border-cyber-blue/30 pb-2 w-full text-center">Skill Matrix Analysis</h3>
                        <div className="w-full h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                                    <PolarGrid stroke="#00f0ff" strokeOpacity={0.3} />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#e0e0e0', fontSize: 12, fontFamily: 'monospace' }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Radar name="HP" dataKey="A" stroke="#b026ff" fill="#b026ff" fillOpacity={0.4} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 3D Globe Network */}
                    <div className="glass-panel p-0 rounded-xl h-[350px] relative overflow-hidden flex items-center justify-center">
                        <div className="absolute top-4 left-4 z-20 pointer-events-none">
                            <h3 className="font-mono text-cyber-green text-xs border border-cyber-green/50 p-1 rounded bg-cyber-bg/80">Global Network Active</h3>
                        </div>
                        <div className="absolute inset-0 pointer-events-none border border-cyber-green/20 rounded-xl z-20 shadow-[inset_0_0_20px_rgba(57,255,20,0.1)]"></div>
                        <GlobeCanvas />
                    </div>
                </div>

                {/* Skills Grid Column */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full content-start">
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 rounded-xl border-t border-t-white/10 hover:border-cyber-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded bg-cyber-bg/80 border border-white/10 group-hover:border-cyber-blue transition-colors">
                                    {cat.icon}
                                </div>
                                <h3 className="font-mono font-bold text-gray-200">{cat.title}</h3>
                            </div>

                            <ul className="space-y-2">
                                {cat.skills.map((skill, sIdx) => (
                                    <li key={skill} className="flex items-center gap-2 font-sans text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue/50 group-hover:bg-cyber-blue transition-colors group-hover:shadow-[0_0_5px_#00f0ff] animate-pulse" style={{ animationDelay: `${(index * 0.2) + (sIdx * 0.1)}s` }}></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                            {/* Decorative Corner lines */}
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover:border-cyber-blue transition-colors rounded-tr-xl"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-transparent group-hover:border-cyber-blue transition-colors rounded-bl-xl"></div>
                        </motion.div>
                    ))}

                    <div className="col-span-1 sm:col-span-2 glass-panel p-6 rounded-xl border border-cyber-pink/30 flex items-center justify-between group overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/5 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 w-full justify-between">
                            <div>
                                <h3 className="font-mono font-bold text-cyber-pink tracking-wider">Security & Problem Solving</h3>
                                <p className="text-xs font-sans text-gray-400 mt-1">Algorithmic thinking and secure system design architectures.</p>
                            </div>
                            <Shield className="text-cyber-pink opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all" size={32} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
