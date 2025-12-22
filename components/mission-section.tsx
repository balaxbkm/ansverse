"use client"

import { Zap, Globe, Cpu, Rocket } from "lucide-react"

export function MissionSection() {
    return (
        <section className="container mx-auto px-6 mb-32">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-widest mb-6">
                    <Rocket className="w-4 h-4" />
                    Our Mission
                </span>
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-zinc-500 mb-6 leading-tight">
                    Innovation through <br /> strategic design.
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We don't just write code; we solve problems. Ansverse partners with visionaries to build software that matters, focusing on speed, scalability, and impact.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                {/* Visual Card 1: Modern Stack (Dark Theme) */}
                <div className="md:col-span-5 relative group overflow-hidden rounded-[2.5rem] bg-[#0F1115] p-10 min-h-[400px] flex flex-col justify-between border border-white/5">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />

                    {/* Radial sheen */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full group-hover:bg-red-600/30 transition-all duration-700" />

                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/20">
                            <Cpu className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Modern Stack</h3>
                        <p className="text-zinc-400 text-sm">Next.js, React, Node, Edge.</p>
                    </div>

                    {/* Animated Graph Visual */}
                    <div className="relative z-10 mt-8 h-32 flex items-end gap-2">
                        {[40, 70, 45, 90, 60, 85, 100].map((height, i) => (
                            <div key={i} className="flex-1 bg-zinc-800 rounded-t-lg overflow-hidden relative group-hover:bg-zinc-700 transition-colors">
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-orange-500 transition-all duration-1000 ease-out"
                                    style={{ height: `${height}%`, opacity: 0.8 }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Card 2: Global Standards (Light/Glass Theme) */}
                <div className="md:col-span-7 relative group overflow-hidden rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900 p-10 min-h-[400px] border border-zinc-100 dark:border-zinc-800">
                    <div className="absolute top-0 right-0 p-10 opacity-10 dark:opacity-5">
                        <Globe className="w-64 h-64 text-slate-900 dark:text-white" />
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mb-6 shadow-xl">
                                <Zap className="w-6 h-6 text-white dark:text-black" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Global Standards</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs">
                                Building for performance, accessibility, and reliability from day one.
                            </p>
                        </div>

                        {/* Connection Visual */}
                        <div className="relative mt-12 bg-white dark:bg-black/50 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-700 shadow-sm flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase text-zinc-400 tracking-wider">Status</span>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">All Systems Operational</span>
                                </div>
                            </div>

                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-200 dark:bg-zinc-800" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
