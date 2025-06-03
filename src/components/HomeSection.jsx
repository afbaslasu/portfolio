export default function HomeSection() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?office,workspace')",
      }}
    >
      <div className="text-center px-6 bg-white bg-opacity-75 p-8 rounded-lg">
        <h1 className="text-5xl uppercase font-bold text-gray-800">
          John White
        </h1>
        <h2 className="text-2xl uppercase font-semibold text-primary mt-4">
          Creative Director
        </h2>
        <p className="mt-6">
          I am a professional <strong>UX Designer</strong> and{" "}
          <strong>Front-End Developer</strong> creating modern and responsive
          designs for <strong>Web</strong> and <strong>Mobile</strong>. Let us
          work together.
        </p>
        <a
          href="#work"
          className="inline-block mt-8 px-6 py-3 bg-primary text-white uppercase font-bold rounded-lg hover:bg-white hover:text-primary border-2 border-primary transition"
        >
          Let's Begin
        </a>
      </div>
    </section>
  );
}
