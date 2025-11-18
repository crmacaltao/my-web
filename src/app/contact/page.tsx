import Navbar from "../navbar";

export default function Contact() {
  const backgroundUrl = "/images/bg2.png"; 

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center pt-20"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <Navbar />
      
      <div className="pt-8 pb-12 flex justify-center">
        <main 
          className="max-w-xl mx-auto px-6 py-12 rounded-xl shadow-2xl text-zinc-800"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(3px)' }} 
        >
          <h1 className="text-3xl font-bold mb-4">Contact</h1>

          <div className="space-y-4 text-lg">
            <p><strong>Phone:</strong> 09772154295</p>
            <p><strong>Email:</strong> crmacaltao@gbox.ncf.edu.ph</p>
          </div>
        </main>
      </div>
    </div>
  );
}