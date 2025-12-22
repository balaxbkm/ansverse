"use client"

import { ArrowRight, Mail } from "lucide-react"

export function FooterCTA() {
    return (
        <section id="contact" className="container mx-auto px-6 mb-20">
            <div className="relative rounded-[3rem] overflow-hidden group">
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-black dark:bg-zinc-950 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[100px] mix-blend-screen overflow-hidden" />
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] z-10" />

                <div className="relative z-20 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-wide mb-6 backdrop-blur-md shadow-lg shadow-white/5">
                            Ready when you are
                        </span>
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Let&apos;s build your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-rose-200">
                                next big thing.
                            </span>
                        </h2>
                        <p className="text-lg text-zinc-400 max-w-lg mb-8 leading-relaxed font-light">
                            Stop waiting for the perfect moment. The perfect moment is now.
                            Let's turn your vision into a digital reality that scales.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-100 transition-all active:scale-95 flex items-center gap-2">
                                <Mail className="w-5 h-5" />
                                hello@ansverse.com
                            </button>
                            <button className="group relative w-14 h-14 bg-[#25D366] text-white rounded-full font-bold text-lg hover:bg-[#20bd5a] transition-all active:scale-95 flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Creative graphical element on the right */}
                    <div className="relative group-hover:scale-105 transition-transform duration-700 ease-out z-10 hidden md:block perspective-1000">
                        {/* Dynamic Glow Behind */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 animate-pulse-slow transition duration-1000"></div>

                        {/* Main Glass Interface */}
                        <div className="w-96 h-80 bg-black/40 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl flex flex-col relative overflow-hidden transform rotate-y-[-12deg] rotate-x-[5deg] hover:rotate-y-[-8deg] hover:rotate-x-[2deg] transition-all duration-700">

                            {/* Glossy sheen */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />

                            {/* Window Controls */}
                            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/20">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.5)]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.5)]" />
                                </div>
                                <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">deployment-v2.tsx</div>
                            </div>

                            {/* Code Content Area */}
                            <div className="p-6 font-mono text-sm flex flex-col gap-2 relative">
                                {/* Scanline effect */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />

                                <div className="flex gap-2 text-rose-300/80">
                                    <span className="text-purple-400">const</span>
                                    <span className="text-blue-300">future</span>
                                    <span className="text-white">=</span>
                                    <span className="text-yellow-300">await</span>
                                    <span className="text-indigo-300">build(</span>
                                    <span className="text-green-300">'dream'</span>
                                    <span className="text-indigo-300">);</span>
                                </div>
                                <div className="flex gap-2 text-zinc-500 text-xs pl-4">
                                     // Initializing core systems...
                                </div>
                                <div className="flex gap-2 text-zinc-500 text-xs pl-4">
                                     // Optimizing user experience...
                                </div>

                                {/* Progress Bar */}
                                <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/5 relative overflow-hidden">
                                    <div className="flex justify-between text-xs text-white/50 mb-2">
                                        <span>Compiling...</span>
                                        <span>98%</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-indigo-500 to-rose-500 w-[98%] shadow-[0_0_15px_rgba(99,102,241,0.5)] relative">
                                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white animate-pulse" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Object */}
                                <div className="absolute -right-6 bottom-8 p-4 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl transform rotate-[15deg] hover:rotate-[5deg] transition-all duration-500 z-20 group-hover:scale-110">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center border border-green-500/30">✓</div>
                                        <div>
                                            <div className="text-xs text-zinc-400">Status</div>
                                            <div className="text-sm font-bold text-white">Shipped</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
