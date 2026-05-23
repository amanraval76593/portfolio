import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
    >
      <div className="section-container">

        <h2 className="section-title">
          About
        </h2>

        <div className="grid md:grid-cols-[320px_1fr] gap-10 items-center">

          {/* Profile Image */ }
          <div className="flex justify-center md:justify-start">
            <div className="relative w-[240px] h-[240px] rounded-3xl overflow-hidden border border-white/10">

              <Image
                src="/images/profile.png"
                alt="Aman Kumar"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */ }
          <div>
            <p className="text-zinc-300 leading-8 text-lg">
              I’m a backend engineer focused on building scalable,
              low-latency systems and distributed architectures.
              My experience spans Go, Node.js, FastAPI, Redis,
              Kafka, PostgreSQL, and AWS, with a strong emphasis
              on performance optimization and event-driven systems.
            </p>

            <p className="text-zinc-400 leading-8 text-lg mt-6">
              I enjoy designing reliable backend infrastructure,
              optimizing APIs for high concurrency workloads,
              and building systems that are efficient,
              maintainable, and production-ready.
            </p>

            {/* Quick Highlights */ }
            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="card p-5">
                <h3 className="text-3xl font-bold text-blue-500">
                  Scalability
                </h3>

                <p className="text-zinc-400 mt-2">
                  High concurrency systems
                </p>
              </div>

              <div className="card p-5">
                <h3 className="text-3xl font-bold text-blue-500">
                  Redis
                </h3>

                <p className="text-zinc-400 mt-2">
                  Caching & async workflows
                </p>
              </div>

              <div className="card p-5">
                <h3 className="text-3xl font-bold text-blue-500">
                  Microservices
                </h3>

                <p className="text-zinc-400 mt-2">
                  Distributed architecture
                </p>
              </div>

              <div className="card p-5">
                <h3 className="text-3xl font-bold text-blue-500">
                  APIs
                </h3>

                <p className="text-zinc-400 mt-2">
                  Low-latency backend systems
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}