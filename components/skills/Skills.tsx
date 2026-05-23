const skillGroups = [
  {
    title: "Languages",
    skills: [
      "Go",
      "Python",
      "TypeScript",
      "JavaScript",
      "C++",
      "SQL",
    ],
  },

  {
    title: "Backend & Frameworks",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Django",
      "Gin",
      "REST APIs",
      "Microservices",
    ],
  },

  {
    title: "Databases & Storage",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Elasticsearch",
    ],
  },

  {
    title: "Distributed Systems",
    skills: [
      "Kafka",
      "BullMQ",
      "Event-Driven Architecture",
      "Asynchronous Processing",
      "Caching",
      "Concurrency",
    ],
  },

  {
    title: "Cloud & Tools",
    skills: [
      "AWS",
      "Lambda",
      "API Gateway",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="section-container">

        <h2 className="section-title">
          Skills
        </h2>

        <div className="space-y-8">

          { skillGroups.map((group) => (
            <div
              key={ group.title }
              className="card p-8"
            >

              <h3 className="text-2xl font-semibold mb-6">
                { group.title }
              </h3>

              <div className="flex flex-wrap gap-4">

                { group.skills.map((skill) => (
                  <span
                    key={ skill }
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 hover:border-blue-500/30 hover:text-white transition-all duration-300"
                  >
                    { skill }
                  </span>
                )) }

              </div>

            </div>
          )) }

        </div>
      </div>
    </section>
  );
}