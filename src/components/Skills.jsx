import SectionReveal from './SectionReveal';

const Skills = () => {
  const skillsData = [
    {
      title: 'Frontend Developer',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: [
        { name: 'React.js / Next.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML / CSS / Tailwind CSS', level: 88 }
      ]
    },
    {
      title: 'Backend Developer',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: [
        { name: 'Node.js / Express.js', level: 82 },
        { name: 'Python', level: 75 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: 'Database',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      skills: [
        { name: 'MySQL / SQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'Database Design', level: 78 }
      ]
    }
  ];

  return (
    <section id="about" className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My Skills
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies and tools I work with
            </p>
          </div>
        </SectionReveal>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <SectionReveal key={index} delay={index * 0.2}>
              <div
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-primary)]/20 h-full"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-[var(--color-primary)]">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List with Progress Bars */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      {/* Skill Name and Percentage */}
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[var(--color-primary)] to-purple-500 h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
