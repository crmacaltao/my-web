import Navbar from "../navbar";

export default function Education() {
  return (
    <div>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Education</h1>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>Pili Parochial School – Prep</li>
          <li>Montessori Children’s House of Learning (Pili) – Elementary</li>
          <li>Universidad de Sta. Isabel – High School / Senior High School</li>
          <li>BS in Civil Engineering – Ateneo de Naga University (2 years)</li>
          <li>BS in Information Technology – Naga College Foundation (currently studying)</li>
        </ul>
      </main>
    </div>
  );
}
