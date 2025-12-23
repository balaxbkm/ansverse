"use client"

import { Code2, Share2, Trophy, ArrowUpRight } from "lucide-react"

const values = [
    {
        title: "Clean Code",
        description: "We write maintainable, efficient, and scalable code that stands the test of time. No shortcuts, just excellence.",
        icon: Code2,
        gradient: "from-blue-500 to-cyan-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "Transparent Process",
        description: "Clear communication at every step. You'll always know what we're building, how we're building it, and when it ships.",
        icon: Share2,
        gradient: "from-purple-500 to-pink-500",
        bg: "bg-purple-500/10",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Client Success",
        description: "Your win is our win. We don't just deliver software; we interpret your vision to build solutions that drive growth.",
        icon: Trophy,
        gradient: "from-amber-500 to-orange-500",
        bg: "bg-amber-500/10",
        border: "group-hover:border-amber-500/50"
    }
]

export function ValuesSection() {
    return (
        <section className="container mx-auto px-6 mb-20">
            <div className="mb-12">
                <span className="text-red-500 font-semibold tracking-wider text-sm uppercase">Our Values</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 text-slate-900 dark:text-white">
                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Excellence</span>, <br />
                    Not Just Code.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((item, index) => (
                    <div key={index} className={`group relative p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                        {/* Gradient Hover Background */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.gradient} transition-opacity duration-500`} />
                        <div className="absolute inset-0 bg-noise opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ring-1 ring-inset ring-black/5 dark:ring-white/10`}>
                            <item.icon className="w-7 h-7 text-slate-900 dark:text-white" />
                        </div>

                        {/* Text */}
                        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm mb-6">
                            {item.description}
                        </p>

                        {/* Arrow */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white group-hover:gap-3 transition-all pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                            <span>Learn more</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
