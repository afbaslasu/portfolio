import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialSection() {
  return (
    <section id="social" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl uppercase mb-8">
          Follow <strong>Me</strong>
        </h2>
        <div className="flex justify-center space-x-6 text-3xl text-gray-600">
          <a href="#" className="hover:text-primary">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="#" className="hover:text-primary">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
