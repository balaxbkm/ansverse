
import Image from "next/image";
import { Github, Linkedin, Phone, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { FooterCTA } from "@/components/footer-cta";
import { ValuesSection } from "@/components/values-section";
import { MissionSection } from "@/components/mission-section";
import { HeroSection } from "@/components/hero-section";


export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans selection:bg-red-100 selection:text-red-900 dark:selection:bg-red-900/30 dark:selection:text-red-200 transition-colors duration-300">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image src="/logo.jpg" alt="Ansverse Logo" fill className="object-cover" />
            </div>
            <div className="relative w-32 h-6">
              <Image src="/ansverse-text.png" alt="Ansverse" fill className="object-contain object-left brightness-0 dark:invert" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />

          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <HeroSection />

        {/* Logos Strip */}
        <section className="border-y border-zinc-100 dark:border-zinc-800 py-12 bg-zinc-50/50 dark:bg-zinc-900/20 mb-32">
          <div className="container mx-auto px-6 flex justify-between items-center opacity-40 grayscale overflow-hidden dark:invert">
            {["Vercel", "AWS", "Google Cloud", "Stripe", "Docker"].map((logo) => (
              <span key={logo} className="text-xl font-bold dark:text-white">{logo}</span>
            ))}
          </div>
        </section>

        {/* Introduction */}
        <MissionSection />

        {/* Values 3-Col */}
        <ValuesSection />



        {/* FAQ */}


        <FooterCTA />

      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex flex-col md:flex-row justify-between gap-12 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="relative">
            <div className="relative w-48 h-12 mb-2 transition-transform hover:scale-105 duration-300 origin-left opacity-70 hover:opacity-100">
              <Image src="/ansverse-text.png" alt="Ansverse" fill className="object-contain object-left brightness-0 dark:invert" />
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 font-mono text-sm tracking-tight">
                <span className="font-bold text-indigo-600 dark:text-indigo-400">Code</span>
                <span className="text-zinc-300 dark:text-zinc-700 text-[10px]">•</span>
                <span className="font-bold text-purple-600 dark:text-purple-400">Ship</span>
                <span className="text-zinc-300 dark:text-zinc-700 text-[10px]">•</span>
                <span className="font-bold text-rose-600 dark:text-rose-400">Scale</span>
              </div>

              <p className="text-xs text-zinc-400 font-medium flex items-center gap-2">
                <span>© 2025 Ansverse Inc.</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                <span className="opacity-50">All rights reserved.</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <div className="flex items-center gap-4 mb-4">
              <a href="#" aria-label="Github" className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white transition-all bg-white dark:bg-black/50">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-[#0077b5] hover:border-[#0077b5] transition-all bg-white dark:bg-black/50">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-[#25D366] hover:border-[#25D366] transition-all bg-white dark:bg-black/50">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-zinc-400 text-xs font-medium">Accepting new projects</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
