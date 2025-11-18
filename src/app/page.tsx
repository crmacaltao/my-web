"use client";

import Navbar from "./navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="flex flex-col items-center justify-center text-center px-6 py-20">

        <h1 className="text-4xl font-bold mb-3">
          Hi, I'm <span className="text-blue-600">Carl Rome Paul B. Macaltao</span>
        </h1>

        <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-300 mb-6">
          This Next.js web app was created as an activity for Application 
          Development and Emerging Technology, using NextJS, TailwindCSS, 
          and ShadCN UI.
        </p>

        <div className="flex flex-col gap-4">
          <Button asChild size="lg">
            <a href="/about">Learn More About Me</a>
          </Button>

          {/* Rickroll Button */}
          <Button asChild size="lg" variant="secondary">
            <a 
              href="https://streamable.com/lf027o"
              target="_blank"
            >
              Click this to see a magic happen ✨
            </a>
          </Button>
        </div>

      </main>
    </div>
  );
}
