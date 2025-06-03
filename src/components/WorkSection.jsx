import { FaMobileScreen, FaCode, FaLayerGroup } from "react-icons/fa6";

export default function WorkSection() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-light uppercase text-gray-800 mb-12 text-center">
          My <strong>Work</strong>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-400 rounded-lg p-10 text-center hover:border-primary transition"
            >
              {item.icon}
              <h3 className="text-xl uppercase text-primary mb-4">
                {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const workItems = [
  {
    icon: <FaMobileScreen className="text-5xl text-gray-500 mb-6 mx-auto" />,
    title: "Mobile UX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaCode className="text-5xl text-gray-500 mb-6 mx-auto" />,
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <FaLayerGroup className="text-5xl text-gray-500 mb-6 mx-auto" />,
    title: "HTML Templates",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
