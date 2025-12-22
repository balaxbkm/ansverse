"use client"

import * as React from "react"
import { Moon, Sun, Laptop } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center gap-1 p-1 rounded-full border border-zinc-200 bg-zinc-100/50 dark:bg-zinc-800/50 dark:border-zinc-700 opacity-0">
                <div className="w-8 h-8"></div>
            </div>
        )
    }

    return (
        <div className="flex items-center p-1 rounded-full border border-zinc-200 bg-zinc-100/80 dark:bg-zinc-900 dark:border-zinc-800 backdrop-blur-md">
            <button
                type="button"
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "light"
                    ? "bg-white text-yellow-500 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-yellow-400 dark:ring-zinc-700 transform scale-100"
                    : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    }`}
                aria-label="Light Mode"
            >
                <Sun className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => setTheme("system")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "system"
                    ? "bg-white text-zinc-900 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:ring-zinc-700 transform scale-100"
                    : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    }`}
                aria-label="System Mode"
            >
                <Laptop className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all duration-300 ${theme === "dark"
                    ? "bg-white text-blue-500 shadow-sm ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-blue-400 dark:ring-zinc-700 transform scale-100"
                    : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                    }`}
                aria-label="Dark Mode"
            >
                <Moon className="h-4 w-4" />
            </button>
        </div>
    )
}
