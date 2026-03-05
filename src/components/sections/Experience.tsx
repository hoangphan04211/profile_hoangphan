import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const timelineData = [
    {
        id: "exp.01",
        year: "2024 - Present",
        title: "Senior Frontend Engineer",
        company: "Cyber Systems Inc.",
        description: "Leading the development of highly interactive React applications for enterprise clients. Focused on performance optimization and 3D web experiences.",
        type: "work",
        icon: <Briefcase size={20} />
    },
    {
        id: "exp.02",
        year: "2022 - 2024",
        title: "Full Stack Developer",
        company: "Nexus Solutions",
        description: "Built scalable backend services using Spring Boot and designed responsive UI architectures using Tailwind CSS and Next.js.",
        type: "work",
        icon: <Briefcase size={20} />
    },
    {
        id: "edu.01",
        year: "2018 - 2022",
        title: "B.S. Software Engineering",
        company: "Tech Institute of Technology",
        description: "Graduated with honors. Specialized in algorithms, distributed systems, and modern web technologies. Led the university coding club.",
        type: "education",
        icon: <GraduationCap size={20} />
    },
    {
        id: "cert.01",
        year: "2021",
        title: "AWS Certified Developer",
        company: "Amazon Web Services",
        description: "Achieved associate level certification validating expertise in developing and maintaining AWS-based applications.",
        type: "award",
        icon: <Award size={20} />
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <div className="inline-flex items-center gap-4 mb-2">
                    <span className="text-cyber-purple font-mono text-xl">04.</span>
                    <h2 className="text-4xl font-bold font-mono text-glow-purple uppercase tracking-widest">System Logs</h2>
                </div>
                <div className="w-24 h-[1px] bg-cyber-purple mx-auto mt-4"></div>
            </motion.div>

            <div className="relative max-w-4xl mx-auto pb-10">
                {/* Central Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyber-blue/30 md:-translate-x-1/2"></div>
                {/* Animated progress line glow overlay */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-1/2 w-[2px] bg-cyber-purple shadow-[0_0_15px_#b026ff] md:-translate-x-1/2 pointer-events-none animate-pulse"></div>

                {timelineData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={item.id} className="relative flex flex-col md:flex-row justify-between w-full mb-12 items-start md:items-center">

                            {/* Left Content Drawer */}
                            <motion.div
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, type: 'spring' }}
                                className={cn(
                                    "w-full md:w-5/12 ml-12 md:ml-0 flex",
                                    isEven ? "md:justify-end pr-8" : "md:col-start-2 pl-8 md:pl-8 md:ml-auto"
                                )}
                            >
                                <div className={cn(
                                    "glass-panel p-6 rounded-xl border w-full group transition-all duration-300 relative",
                                    item.type === 'work' ? "border-cyber-blue/50 hover:border-cyber-blue hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]" :
                                        item.type === 'education' ? "border-cyber-green/50 hover:border-cyber-green hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]" :
                                            "border-cyber-purple/50 hover:border-cyber-purple hover:shadow-[0_0_20px_rgba(176,38,255,0.2)]"
                                )}>
                                    {/* Connector arrow pointing to the line */}
                                    <div className={cn(
                                        "hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-cyber-blue/50",
                                        isEven ? "-right-8" : "-left-8"
                                    )}></div>

                                    <div className="font-mono text-sm text-gray-500 mb-2">{item.year}</div>
                                    <h3 className="text-xl font-bold font-mono text-gray-100 group-hover:text-cyber-blue transition-colors">{item.title}</h3>
                                    <h4 className="text-sm uppercase tracking-wider text-cyber-purple font-mono mb-4">{item.company}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-cyber-blue transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Node icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                                className={cn(
                                    "absolute left-4 md:left-1/2 -ml-4 md:-translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full z-10 box-shadow-glow top-4 md:top-1/2 md:-translate-y-1/2",
                                    item.type === 'work' ? "bg-cyber-blue text-cyber-bg shadow-[0_0_15px_#00f0ff]" :
                                        item.type === 'education' ? "bg-cyber-green text-cyber-bg shadow-[0_0_15px_#39ff14]" :
                                            "bg-cyber-purple text-cyber-bg shadow-[0_0_15px_#b026ff]"
                                )}
                            >
                                {item.icon}
                            </motion.div>

                            {/* Empty spacer div for alignment flexbox trick */}
                            <div className="hidden md:block w-5/12"></div>
                        </div>
                    );
                })}
            </div>

            <div className="text-center font-mono text-xs text-gray-500 animate-pulse mt-8 flex justify-center items-center gap-2">
                <div className="w-2 h-2 bg-cyber-blue rounded-full"></div>
                END OF LOGS
            </div>
        </section>
    );
};

export default Experience;
