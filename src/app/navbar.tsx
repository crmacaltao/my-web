import Link from "next/link";
import Image from "next/image"; 

export default function Navbar() {
  const logoUrl = "/images/nslogo.jpg"; 

  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm shadow-md">
      
      {/* Outer container: Sets max-width and ensures space between logo and links */}
      <div className="flex items-center justify-between py-4 px-6 text-sm max-w-6xl mx-auto">
        
        {/* 1. Logo Section (Far Left) */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity z-20">
          <Image
            src={logoUrl}
            alt="NS Logo"
            width={40}
            height={32}
            className="rounded-full"
          />
          <span className="text-zinc-800 dark:text-zinc-200 hidden sm:inline">NightShade</span>
        </Link>
        
        {/* 2. Navigation Links (Centered) */}
        {/* We use absolute positioning and calculation to force the links into the center, 
            or a simpler approach of grouping and using auto margins. The simple approach is cleaner here. */}
        <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</Link>
          <Link href="/about" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">About</Link>
          <Link href="/education" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Education</Link>
          <Link href="/hobbies" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Hobbies</Link>
          <Link href="/contact" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Contact</Link>
        </div>

        {/* 3. Empty div or another element (Aligned Right) 
           This is added to maintain the space if needed, otherwise, 
           the absolute positioning will work cleanly without it. */}
        <div className="w-[110px] sm:w-[200px] h-8"></div> 

      </div>
    </nav>
  );
}