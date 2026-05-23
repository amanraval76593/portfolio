export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="section-container">

        <h2 className="section-title">
          Experience
        </h2>

        <div className="relative border-l border-white/10 ml-4 space-y-16">

          {/* Experience Item */ }
          <div className="relative pl-10">

            {/* Timeline Dot */ }
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2" />

            {/* Company + Duration */ }
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

              <div>
                <h3 className="text-2xl font-semibold">
                  Sustainability Economics
                </h3>

                <div className="flex items-center gap-3 mt-2 flex-wrap">

                  <p className="text-blue-500">
                    Software Developer
                  </p>

                  <span className="text-zinc-600">
                    •
                  </span>

                  <p className="text-zinc-400">
                    Bengaluru, India
                  </p>

                </div>
              </div>

              <p className="text-zinc-500 text-sm">
                Apr 2025 — Present
              </p>
            </div>

            {/* Description */ }
            <div className="mt-6 space-y-4 text-zinc-400 leading-7">

              <p>
                Optimized performance-critical FastAPI workflows by
                offloading compute-heavy operations to a Go microservice,
                reducing API response time by 60%.
              </p>

              <p>
                Built scalable backend services using Node.js, Go,
                and FastAPI with sub-200ms latency through optimized
                caching and efficient query execution.
              </p>

              <p>
                Designed centralized authentication and RBAC systems
                across microservices using token-based validation and
                role enforcement.
              </p>

              <p>
                Developed event-driven workflows using Redis and BullMQ
                for asynchronous processing, retry handling, and
                distributed task execution.
              </p>

            </div>

            {/* Tech Stack */ }
            <div className="flex flex-wrap gap-3 mt-8">
              { [
                "Go",
                "Node.js",
                "FastAPI",
                "Redis",
                "BullMQ",
                "AWS",
                "DynamoDB",
              ].map((tech) => (
                <span
                  key={ tech }
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300"
                >
                  { tech }
                </span>
              )) }
            </div>

          </div>

          {/* Internship */ }
          <div className="relative pl-10">

            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-2" />

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-2xl font-semibold">
                  Firellama Technology
                </h3>

                <div className="flex items-center gap-3 mt-2 flex-wrap">

                  <p className="text-blue-500">
                    Flutter Developer Intern
                  </p>

                  <span className="text-zinc-600">
                    •
                  </span>

                  <p className="text-zinc-400">
                    Remote
                  </p>

                </div>
              </div>

              <p className="text-zinc-500 text-sm">
                Jun 2024 — Aug 2024
              </p>
            </div>

            <div className="mt-6 space-y-4 text-zinc-400 leading-7">

              <p>
                Integrated SQLite-based offline storage for Flutter
                applications, improving reliability during intermittent
                network connectivity.
              </p>

              <p>
                Improved mobile app responsiveness through optimized
                state management and reduced unnecessary widget rebuilds.
              </p>

            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              { [
                "Flutter",
                "SQLite",
                "Dart",
              ].map((tech) => (
                <span
                  key={ tech }
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300"
                >
                  { tech }
                </span>
              )) }
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}