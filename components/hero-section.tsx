"use client"

import { ArrowRight, Box, Circle, Triangle, Layers, Cpu, Code, Globe, Zap, BarChart3, ChevronRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-black pt-20">

            {/* Architectural Grid Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Dynamic Spotlight */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

            {/* Glassmorphism Floating Icons */}
            <div className="absolute top-[32%] left-[35%] p-3 bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl animate-float-slow hidden lg:block z-0 -rotate-6">
                <Globe className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
            </div>
            <div className="absolute bottom-32 left-[5%] p-2.5 bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl animate-float-delayed hidden lg:block z-0 rotate-12">
                <Zap className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            </div>
            <div className="absolute top-40 right-[10%] p-3.5 bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl animate-float hidden lg:block z-0 -rotate-12">
                <Code className="w-6 h-6 text-rose-500 dark:text-rose-400" />
            </div>
            <div className="absolute bottom-40 right-[5%] p-3 bg-white/30 dark:bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl shadow-xl animate-float-delayed hidden lg:block z-0 rotate-6">
                <div className="relative w-5 h-5">
                    <Image src="/aws-box-logo.png" alt="AWS" fill className="object-contain dark:invert" />
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Left: Typography & Message */}
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-8 animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Ansverse</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-zinc-900 dark:text-white leading-[0.95] tracking-tighter mb-8">
                        DIGITAL <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600 dark:from-rose-400 dark:to-orange-400">ALCHEMY</span>
                    </h1>

                    <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mx-auto md:mx-0 mb-10 text-center md:text-left">
                        Transmuting raw ideas into gold-standard software. We blend technical prowess with creative magic to build the extraordinary.
                    </p>

                    <div className="flex flex-row items-center gap-4 justify-center md:justify-start">
                        <button className="h-12 px-8 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black font-bold text-sm tracking-wide hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2 group">
                            Start Building
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="h-12 px-8 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-sm tracking-wide hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
                            Projects
                        </button>
                    </div>

                    {/* Stats Strip */}
                    <div className="mt-16 flex items-center justify-center md:justify-start gap-12">
                        <div>
                            <div className="text-3xl font-black text-zinc-900 dark:text-white">15+</div>
                            <div className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-zinc-900 dark:text-white">99%</div>
                            <div className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-zinc-900 dark:text-white">24/7</div>
                            <div className="text-xs font-bold uppercase text-zinc-500 tracking-wider">Support</div>
                        </div>
                    </div>
                </div>

                {/* Right: Abstract 3D Construction */}
                <div className="flex-1 w-full max-w-[600px] relative h-[500px] flex items-center justify-center hidden md:flex perspective-1000">

                    {/* The "Core" - A rotating abstract structure */}
                    <div className="relative w-72 h-72 transform-style-3d animate-float group">
                        {/* Center Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-rose-500/30 rounded-[2rem] blur-2xl animate-pulse-slow"></div>

                        {/* Orbiting Rings */}
                        <div className="absolute -inset-16 border border-dashed border-zinc-300/50 dark:border-zinc-700/50 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute -inset-24 border border-zinc-200/50 dark:border-zinc-800/50 rounded-full animate-[spin_15s_linear_infinite_reverse] border-t-transparent border-l-transparent"></div>

                        {/* Floating Cards - More Refined */}
                        <div className="absolute -top-12 -right-12 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl z-20 animate-float-delayed transform rotate-6 hover:rotate-0 transition-transform duration-500">
                            <Cpu className="w-8 h-8 text-indigo-500 mb-3" />
                            <div className="space-y-2">
                                <div className="h-1.5 w-16 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                                <div className="h-1.5 w-10 bg-zinc-100 dark:bg-zinc-800/50 rounded-full"></div>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -left-12 p-5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl z-20 animate-float transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                            <BarChart3 className="w-8 h-8 text-rose-500 mb-3" />
                            <div className="space-y-2">
                                <div className="h-1.5 w-12 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                                <div className="h-1.5 w-20 bg-zinc-100 dark:bg-zinc-800/50 rounded-full"></div>
                            </div>
                        </div>

                        <div className="absolute top-[-60px] left-[10px] p-3.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl shadow-2xl z-10 transform -rotate-12 hover:-rotate-6 transition-transform hover:scale-110 duration-300">
                            <Code className="w-6 h-6" />
                        </div>

                        {/* Central Visual Board */}
                        <div className="absolute inset-0 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md rounded-[2.5rem] border border-white/40 dark:border-white/5 flex items-center justify-center transform rotate-6 group-hover:rotate-3 transition-all duration-700 shadow-2xl overflow-hidden">
                            {/* Inner Grid Texture */}
                            <div className="absolute inset-4 opacity-50 bg-[radial-gradient(#a1a1aa_1px,transparent_1px)] dark:bg-[radial-gradient(#52525b_1px,transparent_1px)] [background-size:12px_12px]"></div>

                            <div className="relative grid grid-cols-2 gap-3 p-6 z-10">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20 hover:scale-105 transition-transform"><Box className="w-6 h-6" /></div>
                                <div className="w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center shadow-lg shadow-rose-500/20 hover:scale-105 transition-transform delay-75"><Triangle className="w-6 h-6" /></div>
                                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform delay-100"><Circle className="w-6 h-6" /></div>
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-105 transition-transform delay-150"><Layers className="w-6 h-6" /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
