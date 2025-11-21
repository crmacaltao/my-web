import Navbar from "../navbar";

export default function About() {
  const backgroundUrl = "/images/bg2.png"; 

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center pt-20"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <Navbar />

      <div className="pt-8 pb-12 flex justify-center">
        <main 
          className="max-w-3xl mx-auto px-6 py-12 rounded-xl shadow-2xl text-zinc-800"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(3px)' }} 
        >
          <h1 className="text-3xl font-bold mb-4">About Me</h1>

          <p className="text-lg leading-relaxed">
            Hello! I'm Carl Rome Paul B. Macaltao, also known in the gaming world as "Ryozaki" the Vice-Master of the Nightshade guild. 
            I'm currently a student at Naga College Foundation, pursuing a degree in Information Technology. 
            My passion lies in technology and gaming, where I enjoy exploring new advancements and immersing myself in various gaming experiences. 
            Me and 3 of my friends founded a guild called "Nightshade" on 2017. We started with just 5 members, and now we almost 500 active members all across the globe.
          </p>
        </main>
      </div>
    </div>
  );
}