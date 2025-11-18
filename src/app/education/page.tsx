import Navbar from "../navbar";

export default function Education() {
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
          <h1 className="text-3xl font-bold mb-6">Education</h1>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Pili Parochial School – Prep</li>
            <li>Montessori Children’s House of Learning (Pili) – Elementary</li>
            <li>Universidad de Sta. Isabel – High School / Senior High School</li>
            <li>BS in Information Technology – Naga College Foundation (currently studying)</li>
          </ul>
        </main>
      </div>
    </div>
  );
}