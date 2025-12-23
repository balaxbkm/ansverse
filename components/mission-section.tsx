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
                <div className="md:col-span-5 relative group overflow-hidden rounded-[2.5rem] bg-[#0F1115] min-h-[450px] flex flex-col border border-white/5">
                    {/* Dynamic Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

                    {/* Code Pattern Background */}
                    <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-zinc-500 p-8 leading-relaxed select-none overflow-hidden pointer-events-none">
                        {`import { NextApiRequest } from 'next';\nexport default function handler(req, res) {\n  const { method } = req;\n  if (method === 'POST') {\n    // Stream response\n    return new Response(stream, {\n      headers: { 'Content-Type': 'text/event-stream' }\n    });\n  }\n}`}
                    </div>

                    {/* Radial sheen */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 p-10 flex flex-col h-full">
                        <div className="mb-auto">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform duration-500 ring-1 ring-white/20">
                                <Cpu className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Modern Stack</h3>
                            <p className="text-zinc-400 text-sm font-medium">Next.js 14, React Server Components, Edge Runtime.</p>
                        </div>

                        {/* Interactive Visual Area */}
                        <div className="relative h-48 mt-8 perspective-1000">

                            {/* Floating Tech Orbits */}
                            <div className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center pointer-events-none">
                                <div className="absolute w-[200px] h-[200px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                                <div className="absolute w-[140px] h-[140px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            </div>

                            {/* Floating Badges */}
                            <div className="absolute top-4 right-4 z-20 animate-float-delayed">
                                <span className="px-3 py-1.5 bg-zinc-900/90 backdrop-blur-md rounded-lg text-xs font-mono text-zinc-300 border border-white/10 shadow-xl flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#61DAFB]"></span>React
                                </span>
                            </div>
                            <div className="absolute top-10 left-0 z-20 animate-float">
                                <span className="px-3 py-1.5 bg-zinc-900/90 backdrop-blur-md rounded-lg text-xs font-mono text-zinc-300 border border-white/10 shadow-xl flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-white"></span>Next.js
                                </span>
                            </div>
                            <div className="absolute bottom-12 right-10 z-20 animate-float-delayed" style={{ animationDelay: '1s' }}>
                                <span className="px-3 py-1.5 bg-zinc-900/90 backdrop-blur-md rounded-lg text-xs font-mono text-zinc-300 border border-white/10 shadow-xl flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#3178C6]"></span>TS
                                </span>
                            </div>

                            {/* Main Terminal Window - Centered & Larger */}
                            <div className="absolute bottom-0 left-1 right-1 h-32 bg-[#1e1e1e] rounded-t-xl border border-white/10 shadow-2xl overflow-hidden group-hover:translate-y-[-10px] transition-transform duration-500">
                                {/* Terminal Header */}
                                <div className="h-8 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                                    </div>
                                    <div className="text-[10px] text-zinc-500 ml-2 font-mono flex-1 text-center">server.ts</div>
                                </div>
                                {/* Terminal Body */}
                                <div className="p-4 font-mono text-[11px] leading-relaxed text-zinc-300">
                                    <div className="flex items-center gap-2 text-zinc-500 mb-1">
                                        <span>$</span>
                                        <span className="text-white">bun install</span>
                                    </div>
                                    <div className="text-emerald-500">✔ Packages installed</div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-zinc-500">$</span>
                                        <span className="animate-pulse">_</span>
                                    </div>
                                </div>
                                {/* Glow Line */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-50"></div>
                            </div>
                        </div>
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
