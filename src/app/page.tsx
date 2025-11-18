"use client";

import Navbar from "./navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 

export default function Home() {
  const profilePicUrl = "/images/pfp.jpg"; 
  const homeBgUrl = "/images/homebg.jpg"; 

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center" 
      style={{ backgroundImage: `url('${homeBgUrl}')` }}
    >
      <Navbar />

      <div className="pt-32 pb-20 flex flex-col items-center">

        <main 
          className="flex flex-col items-center justify-center text-center px-8 py-12 rounded-xl backdrop-blur-sm shadow-2xl max-w-3xl mx-auto"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(2px)' }}
        >

          <div className="mb-8">
            <Image
              src={profilePicUrl}
              alt="Carl Rome Paul B. Macaltao's Profile Picture"
              width={128}
              height={128}
              className="rounded-full object-cover border-4 border-blue-600 shadow-lg mx-auto" 
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-3">
            Hi, I'm Carl Rome Paul B. Macaltao
          </h1>

          <p className="max-w-xl text-lg text-zinc-700 dark:text-zinc-700 mb-6"> 
            <strong>Also known as Ryozaki Vice-Master of the Nightshade guild.</strong>
          </p>

          <div className="flex flex-col gap-4">
            <Button asChild size="lg">
              <a href="/about">Learn More About Me</a>
            </Button>

            <Button asChild size="lg" variant="secondary">
              <a 
                href="https://streamable.com/lf027o"
                target="_blank"
              >
                Click Me! You wont regret it :)
              </a>
            </Button>
          </div>

        </main>
      </div>
    </div>
  );
}