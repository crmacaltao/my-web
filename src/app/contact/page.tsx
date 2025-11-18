import Navbar from "../navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>

        <div className="space-y-4 text-lg">
          <p><strong>Phone:</strong> 09772154295</p>
          <p><strong>Email:</strong> crmacaltao@gbox.ncf.edu.ph</p>
        </div>
      </main>
    </div>
  );
}

