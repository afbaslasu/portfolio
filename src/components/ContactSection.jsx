export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 max-w-md">
        <h2 className="text-4xl uppercase text-center mb-8">
          Contact <strong>Me</strong>
        </h2>
        <form className="space-y-6 text-gray-800">
          <div>
            <label className="block mb-2 uppercase text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 uppercase text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 uppercase text-sm font-semibold">
              Message
            </label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded h-40"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white uppercase font-bold py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
