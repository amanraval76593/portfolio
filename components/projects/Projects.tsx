import { ArrowUpRight } from "lucide-react";
import { SiGithub } from 'react-icons/si';
const projects = [
  {
    title: "Locallyn",
    description:
      "Distributed location-based social platform featuring proximity-aware feed ranking, Kafka-powered real-time ingestion pipelines, and Elasticsearch-backed search optimized for low-latency geo-spatial querying.",

    metrics: [
      "Geo-Spatial Feed Engine",
      "Kafka Streaming Pipelines",
      "Sub-200ms Query Latency",
    ],

    stack: [
      "Go",
      "Gin",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "Elasticsearch",
    ],

    github: "https://github.com/amanraval76593/Locallyn-BE",
  },

  {
    title: "Notify Service",
    description:
      "Event-driven notification infrastructure using Redis and BullMQ with distributed workers, retry orchestration, and scalable multi-channel delivery pipelines for asynchronous task execution.",

    metrics: [
      "Event-Driven Architecture",
      "Distributed Queue Workers",
      "Fault-Tolerant Processing",
    ],

    stack: [
      "Node.js",
      "TypeScript",
      "Redis",
      "BullMQ",
    ],

    github: "https://github.com/amanraval76593/NotifyService",
  },

  {
    title: "MedSync",
    description:
      "Centralized healthcare records platform supporting secure multi-role access, Redis-backed authentication workflows, and scalable REST APIs for patients, doctors, and hospitals.",

    metrics: [
      "Role-Based Access Control",
      "Centralized Medical Records",
      "Secure JWT Authentication",
    ],

    stack: [
      "Django",
      "PostgreSQL",
      "Redis",
      "REST APIs",
    ],

    github: "https://github.com/amanraval76593/MedSync",
  },

  {
    title: "LoMark",
    description:
      "Geo-spatial marketplace backend implementing radius-based product discovery, hybrid database architecture, and transaction-safe order processing under concurrent workloads.",

    metrics: [
      "Geo-Spatial Product Discovery",
      "Hybrid Database Architecture",
      "Secure Transaction Processing",
    ],

    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],

    github: "https://github.com/amanraval76593/LoMark-BE",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <div className="section-container">

        <h2 className="section-title">
          Featured Projects
        </h2>

        <div className="space-y-10">

          { projects.map((project) => (
            <div
              key={ project.title }
              className="card p-8 hover:border-blue-500/30 transition-all duration-300"
            >

              {/* Header */ }
              <div className="flex items-start justify-between gap-6 flex-wrap">

                <div>
                  <h3 className="text-3xl font-semibold">
                    { project.title }
                  </h3>

                  <p className="text-zinc-400 leading-8 mt-5 max-w-3xl">
                    { project.description }
                  </p>
                </div>

                <a
                  href={ project.github }
                  target="_blank"
                  className="p-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all"
                >
                  <SiGithub size={ 20 } />
                </a>

              </div>

              {/* Metrics */ }
              <div className="grid md:grid-cols-3 gap-5 mt-10">

                { project.metrics.map((metric) => (
                  <div
                    key={ metric }
                    className="bg-white/5 border border-white/10 rounded-2xl p-5"
                  >
                    <div className="flex items-center gap-2">

                      <ArrowUpRight
                        size={ 18 }
                        className="text-blue-500"
                      />

                      <p className="text-zinc-300">
                        { metric }
                      </p>

                    </div>
                  </div>
                )) }

              </div>

              {/* Stack */ }
              <div className="flex flex-wrap gap-3 mt-10">

                { project.stack.map((tech) => (
                  <span
                    key={ tech }
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300"
                  >
                    { tech }
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