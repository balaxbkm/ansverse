"use client"

import { useEffect, useState } from "react"

export function CurrentTime() {
    // Start with empty/null to avoid hydration mismatch
    const [time, setTime] = useState<string>("")

    useEffect(() => {
        // Initial set
        const updateTime = () => {
            const now = new Date()
            const dateStr = now.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })
            const timeStr = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZoneName: 'short'
            })
            // localized fix for Windows/Chrome 'GMT+5:30' => 'IST'
            const cleanTimeStr = timeStr.replace("GMT+5:30", "IST").replace(/^GMT/, "")

            setTime(`${dateStr} • ${cleanTimeStr}`.toUpperCase())
        }

        updateTime()
        // Update every minute (or 30s) to keep it relatively fresh without ticking seconds frantically
        const interval = setInterval(updateTime, 1000 * 30)

        return () => clearInterval(interval)
    }, [])

    if (!time) return <span className="text-zinc-500 text-[10px] opacity-0">Loading...</span>

    return (
        <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-zinc-500 dark:text-zinc-500 text-[11px] font-semibold font-mono animate-fade-in">
                {time}
            </span>
        </div>
    )
}
