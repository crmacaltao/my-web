import Navbar from "../navbar";

export default function Hobbies() {
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
          <h1 className="text-3xl font-bold mb-6">Hobbies</h1>

          <p className="text-lg leading-relaxed">
            I enjoy playing the guitar, reading manga/manhwa, and playing a wide range 
            of games such as MMORPGs, MOBAs, AAA titles, and various mobile games. 
            I also enjoy coding, especially creating simple games on Roblox.
          </p>
        </main>
      </div>
    </div>
  );
}