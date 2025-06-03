import { useEffect } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

export default function PortfolioSection() {
  useEffect(() => {
    const isoContainer = document.querySelector(".iso-box-wrapper");
    if (!isoContainer) return;

    const iso = new Isotope(isoContainer, {
      itemSelector: ".iso-box",
      layoutMode: "fitRows",
    });

    imagesLoaded(isoContainer, () => iso.layout());

    const filterButtons = document.querySelectorAll("[data-filter]");
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) =>
          b.classList.toggle("bg-primary", b === btn)
        );
        iso.arrange({ filter: btn.dataset.filter });
      });
    });

    return () => iso.destroy();
  }, []);

  return (
    <section id="portfolio" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl uppercase text-center mb-12">
          My <strong>Portfolio</strong>
        </h2>
        <ul className="flex justify-center space-x-4 mb-8">
          <li>
            <button
              data-filter="*"
              className="px-4 py-2 bg-primary text-white rounded"
            >
              All
            </button>
          </li>
          <li>
            <button
              data-filter=".web"
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Web
            </button>
          </li>
          <li>
            <button
              data-filter=".design"
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Design
            </button>
          </li>
          <li>
            <button
              data-filter=".photo"
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Photo
            </button>
          </li>
        </ul>
        <div className="iso-box-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className={`iso-box ${item.categories.join(" ")}`}>
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-80 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition p-4">
                  <h3 className="text-white font-bold uppercase mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolioItems = [
  {
    image: "https://source.unsplash.com/400x300/?design",
    title: "Design Work",
    description: "Sample description.",
    categories: ["web", "design"],
  },
  {
    image: "https://source.unsplash.com/400x300/?code",
    title: "Web Project",
    description: "Sample description.",
    categories: ["web"],
  },
  {
    image: "https://source.unsplash.com/400x300/?photography",
    title: "Photography",
    description: "Sample description.",
    categories: ["photo"],
  },
  {
    image: "https://source.unsplash.com/400x300/?art",
    title: "Art Design",
    description: "Sample description.",
    categories: ["design", "photo"],
  },
];
