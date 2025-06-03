export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://source.unsplash.com/600x400/?person,portrait"
            alt="About me"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="md:w-1/2 space-y-4 text-gray-800">
          <h2 className="text-4xl uppercase">
            About <strong>Me</strong>
          </h2>
          <p>
            Passionate UX/UI designer with over 8 years of experience crafting
            user-centered designs and interactive interfaces.
          </p>
          <p>
            Skilled in HTML, CSS, JavaScript, and modern frameworks.
            Enthusiastic about creating accessible and inclusive digital
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
