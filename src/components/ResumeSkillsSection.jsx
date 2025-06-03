export default function ResumeSkillsSection() {
  const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "JavaScript", percentage: 80 },
    { name: "Tailwind CSS", percentage: 75 },
  ];

  return (
    <section id="resume-skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl uppercase text-center mb-12">
          Resume & <strong>Skills</strong>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>
                <strong>Creative Director</strong> at Company A (2020–Present)
              </li>
              <li>
                <strong>Senior Designer</strong> at Company B (2017–2020)
              </li>
              <li>
                <strong>Front-End Developer</strong> at Company C (2015–2017)
              </li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>B.A. in Design, University X (2011–2015)</li>
            </ul>
          </div>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-full">
                  <div
                    className="bg-primary h-4 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
