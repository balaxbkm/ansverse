"use client"

import { ArrowRight, Code2, Layers, Cpu, Database } from "lucide-react"

export function HeroSection() {
    return (
        <section id="home" className="relative container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-[80vh]">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[80px]" />
            </div>

            {/* LEft: Content */}
            <div className="flex-1 max-w-xl relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-[10px] font-bold uppercase tracking-widest mb-6 border border-zinc-200 dark:border-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    Software Consultancy
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
                    Turning your <br />
                    <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 dark:from-indigo-400 dark:via-purple-400 dark:to-rose-400">vision</span>
                        <svg className="absolute w-full h-2.5 -bottom-1 left-0 text-indigo-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>{" "}
                    into <i className="font-serif font-light text-slate-800 dark:text-zinc-200">reality.</i>
                </h1>

                <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-md">
                    Ansverse is a dedicated software consultancy focused on crafting robust, scalable, and beautiful digital solutions that define the future.
                </p>

                <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-indigo-500/20">
                        Start a Project
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-6 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-slate-900 dark:text-white rounded-full font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                        View Work
                    </button>
                </div>
            </div>

            {/* Right: Creative 3D Visual */}
            <div className="flex-1 w-full max-w-[500px] relative perspective-2000 group">
                {/* Floating "Deconstructed" Interface */}
                <div className="relative w-full aspect-square transform rotate-y-[-12deg] rotate-x-[12deg] transition-transform duration-700 ease-out group-hover:rotate-y-[-8deg] group-hover:rotate-x-[8deg]">

                    {/* Abstract Glow Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-full blur-[60px] animate-pulse" />

                    {/* Backplane: The "System" */}
                    <div className="absolute inset-x-0 top-10 bottom-10 bg-zinc-900/90 backdrop-blur-xl rounded-[2rem] border border-zinc-800 shadow-2xl transform translate-z-[-50px] overflow-hidden">
                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

                        {/* Code Snippets Background */}
                        <div className="absolute top-8 left-8 right-8 font-mono text-[10px] text-zinc-700 dark:text-zinc-700 leading-relaxed opacity-50 select-none">
                            {Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="flex gap-2">
                                    <span className="text-zinc-600">{i + 1}</span>
                                    <span className={i % 3 === 0 ? "text-indigo-900" : "text-zinc-800"}>
                                        {i % 2 === 0 ? "import { motion } from 'framer-motion';" : "const data = await fetch('/api/v1/metrics');"}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Scanning Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 shadow-[0_0_15px_rgba(99,102,241,0.5)] animate-[scan_4s_ease-in-out_infinite]" />
                    </div>

                    {/* Middle Layer: "The Core" */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-zinc-800/80 backdrop-blur-md rounded-3xl border border-zinc-600 shadow-xl transform translate-z-[20px] flex items-center justify-center overflow-hidden">
                        <div className="relative z-10 text-center">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-indigo-600 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg mb-4 animate-[spin_8s_linear_infinite]">
                                <Cpu className="w-8 h-8 text-white" />
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-24 bg-zinc-600 rounded-full mx-auto" />
                                <div className="h-2 w-16 bg-zinc-700 rounded-full mx-auto" />
                            </div>
                        </div>
                        {/* Orbiting ring */}
                        <div className="absolute inset-4 border border-zinc-600/30 rounded-full animate-[spin_10s_linear_infinite_reverse]" />
                        <div className="absolute inset-12 border border-dashed border-zinc-600/30 rounded-full animate-[spin_15s_linear_infinite]" />
                    </div>

                    {/* Front Layer: "Floating Modules" */}

                    {/* Module 1: Analytics */}
                    <div className="absolute -top-4 -right-4 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-zinc-100 dark:border-zinc-700 transform translate-z-[60px] animate-[float_6s_ease-in-out_infinite]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                <ArrowRight className="w-5 h-5 -rotate-45" />
                            </div>
                            <div>
                                <div className="text-xs text-zinc-400 font-bold uppercase">Growth</div>
                                <div className="text-xl font-bold text-zinc-900 dark:text-white">+124%</div>
                            </div>
                        </div>
                    </div>

                    {/* Module 2: Security */}
                    <div className="absolute bottom-10 -left-8 bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border border-zinc-100 dark:border-zinc-700 transform translate-z-[80px] animate-[float_5s_ease-in-out_infinite_reverse_1s]">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                <Layers className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs text-zinc-400 font-bold uppercase">Structure</div>
                                <div className="text-sm font-bold text-zinc-900 dark:text-white">Microservices</div>
                            </div>
                        </div>
                    </div>

                    {/* Connecting Lines (Decorative SVG) */}
                    <svg className="absolute inset-0 pointer-events-none opacity-30 transform translate-z-[10px]" width="100%" height="100%">
                        <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="currentColor" strokeWidth="1" className="text-indigo-400" strokeDasharray="4 4" />
                        <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="currentColor" strokeWidth="1" className="text-rose-400" strokeDasharray="4 4" />
                    </svg>

                </div>
            </div>
        </section>
    )
}
