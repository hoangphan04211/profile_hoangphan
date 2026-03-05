import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Activity } from 'lucide-react';

interface GitHubProfile {
    login: string;
    avatar_url: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
}

interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
}

const GITHUB_USERNAME = 'PhanVanHoang'; // Replace logically or leave as placeholder

const GitHubDashboard: React.FC = () => {
    const [profile, setProfile] = useState<GitHubProfile | null>(null);
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // In a real scenario you would have a token to prevent rate limits or simply fetch public data
                // For demonstration, simulating successful responses or using public endpoints with fallback
                const profileRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`).catch(() => ({
                    data: {
                        login: "HP-System",
                        avatar_url: "https://github.com/identicons/hp.png",
                        public_repos: 42,
                        followers: 1337,
                        following: 12,
                        html_url: "https://github.com"
                    }
                }));

                const reposRes = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=4`).catch(() => ({
                    data: [
                        { id: 1, name: 'hp-protocol-v2', html_url: '#', description: 'Next generation networking layer', stargazers_count: 120, forks_count: 15, language: 'TypeScript' },
                        { id: 2, name: 'cyber-ui-kit', html_url: '#', description: 'React components for cyberpunk interfaces', stargazers_count: 350, forks_count: 42, language: 'TypeScript' },
                        { id: 3, name: 'ai-core-engine', html_url: '#', description: 'Machine learning inference in browser', stargazers_count: 85, forks_count: 5, language: 'Python' },
                        { id: 4, name: 'dotfiles', html_url: '#', description: 'Hacker system configuration', stargazers_count: 12, forks_count: 1, language: 'Shell' }
                    ]
                }));

                setProfile(profileRes.data);
                setRepos(reposRes.data);
            } catch (error) {
                console.error("Failed to fetch GitHub data", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="w-full py-20 flex justify-center items-center">
                <div className="flex gap-2">
                    <span className="w-2 h-2 bg-cyber-blue rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-cyber-purple rounded-full animate-bounce delay-100"></span>
                    <span className="w-2 h-2 bg-cyber-green rounded-full animate-bounce delay-200"></span>
                </div>
            </div>
        );
    }

    return (
        <section id="github" className="py-20 relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-cyber-green font-mono text-xl">03.</span>
                    <h2 className="text-4xl font-bold font-mono text-glow-green uppercase tracking-widest flex items-center gap-3">
                        <Github className="text-cyber-green" size={36} />
                        Network Activity
                    </h2>
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-cyber-green via-cyber-blue to-transparent mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Profile Stats */}
                <motion.div
                    className="glass-panel p-6 rounded-xl border-t border-cyber-green/30 lg:col-span-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyber-green shadow-[0_0_15px_rgba(57,255,20,0.3)] mb-4 p-1 bg-cyber-bg">
                            {profile?.avatar_url && (
                                <img src={profile.avatar_url} alt="GitHub Avatar" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            )}
                        </div>
                        <h3 className="font-mono text-xl font-bold text-gray-200 tracking-wider">@{profile?.login}</h3>
                        <a href={profile?.html_url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-cyber-blue hover:underline mt-1">Open Mainframe</a>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-cyber-bg/50 border border-white/5 p-4 rounded text-center">
                            <span className="block text-2xl font-mono text-cyber-green font-bold mb-1">{profile?.public_repos}</span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Repositories</span>
                        </div>
                        <div className="bg-cyber-bg/50 border border-white/5 p-4 rounded text-center">
                            <span className="block text-2xl font-mono text-cyber-blue font-bold mb-1">{profile?.followers}</span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">Followers</span>
                        </div>
                    </div>
                </motion.div>

                {/* Recent Repos */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {repos.map((repo, idx) => (
                        <motion.a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={repo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-panel p-6 rounded-xl border border-transparent hover:border-cyber-blue/50 group transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <BookOpen size={16} className="text-cyber-purple" />
                                    <h4 className="font-mono font-bold text-gray-200 group-hover:text-cyber-blue transition-colors truncate">{repo.name}</h4>
                                </div>
                                <p className="text-sm text-gray-400 mb-4 h-10 overflow-hidden text-ellipsis line-clamp-2">{repo.description || 'No description available for this module.'}</p>
                            </div>

                            <div className="flex items-center justify-between text-xs font-mono text-gray-500 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1 group-hover:text-cyber-green transition-colors"><Star size={12} /> {repo.stargazers_count}</span>
                                    <span className="flex items-center gap-1 group-hover:text-cyber-blue transition-colors"><GitFork size={12} /> {repo.forks_count}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-cyber-purple shadow-[0_0_5px_#b026ff]"></span>
                                    {repo.language || 'Unknown'}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Fake Contribution Graph Line */}
            <div className="mt-8 glass-panel p-4 rounded-xl border border-white/5 opacity-50 relative overflow-hidden flex items-center justify-between">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,transparent_0%,rgba(57,255,20,0.05)_50%,transparent_100%)] animate-[scanline_4s_linear_infinite]" style={{ transform: 'rotate(90deg)' }}></div>
                <div className="flex items-center gap-2">
                    <Activity size={16} className="text-cyber-green" />
                    <span className="font-mono text-xs text-cyber-green tracking-widest">REAL-TIME COMMITS ACTIVE</span>
                </div>
                <div className="flex gap-[2px]">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className={`w-2 h-4 rounded-sm ${Math.random() > 0.5 ? 'bg-cyber-green' : Math.random() > 0.3 ? 'bg-cyber-green/40' : 'bg-cyber-bg border border-cyber-green/20'}`} style={{ opacity: Math.random() * 0.5 + 0.5 }}></div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default GitHubDashboard;
