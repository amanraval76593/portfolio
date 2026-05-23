import { FileText } from "lucide-react";
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="section-container w-full grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-xl md:text-2xl font-medium text-gray-400 mb-4">
            Hi, I'm
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Aman Kumar
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-blue-500 mb-8">
            Backend Engineer
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
            I build scalable distributed systems and low-latency backend
            services using Go, Node.js, FastAPI, Kafka, Redis,
            PostgreSQL, and AWS.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/amanraval76593"
              target="_blank"
              className="p-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              <SiGithub size={ 20 } />
            </a>

            <a
              href="https://www.linkedin.com/in/aman-kumar-bb1126291/"
              target="_blank"
              className="p-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              <FaLinkedin size={ 20 } />
            </a>

            <a
              href="https://drive.google.com/file/d/1tQOMk32qIEZ8O1y_WmkfA_WVPimdwcq8/view?usp=sharing"
              target="_blank"
              className="p-3 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all"
            >
              <FileText size={ 20 } />
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="card p-8 h-full">

            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                Backend Stack
              </p>

              <div className="flex flex-wrap gap-3">
                { [
                  "Go",
                  "Node.js",
                  "FastAPI",
                  "Kafka",
                  "Redis",
                  "PostgreSQL",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={ tech }
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300 hover:bg-white hover:text-black transition-all duration-300"
                  >
                    { tech }
                  </span>
                )) }
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5">
                Engineering Focus
              </p>

              <div className="space-y-4">
                { [
                  "Distributed Systems",
                  "Event-Driven Architecture",
                  "Concurrency & Async Processing",
                  "Performance Optimization",
                ].map((item) => (
                  <div
                    key={ item }
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500" />

                    <p className="text-zinc-300">
                      { item }
                    </p>
                  </div>
                )) }
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4">
                Current Interests
              </p>

              <div className="flex flex-wrap gap-3">
                { [
                  "High-Performance Backends",
                  "Distributed Caching",
                  "Message Queues",
                  "Database Internals",
                ].map((item) => (
                  <span
                    key={ item }
                    className="text-sm text-zinc-400"
                  >
                    #{ item }
                  </span>
                )) }
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}