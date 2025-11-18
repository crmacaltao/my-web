import Navbar from "../navbar";

export default function About() {
  return (
    <div>
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>

        <p className="text-lg leading-relaxed">
          I am Student in Naga College Foundation currently studying BS in Information Technology. I am 21 years old
          and I created this web app as an activity for Application Development and Emerging Technology using NextJS, TailwindCSS, and ShadCN UI.
        </p>
      </main>
    </div>
  );
}

