import {
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <div className="section-container">

        <div className="card p-10 md:p-14">

          {/* Heading */ }
          <div className="max-w-3xl">

            <p className="text-blue-500 font-medium mb-4">
              Contact
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Let’s build scalable systems together.
            </h2>

            <p className="text-zinc-400 text-lg leading-8 mt-6">
              I’m currently open to backend engineering opportunities,
              distributed systems roles, and infrastructure-focused
              software engineering positions.
            </p>

          </div>

          {/* Contact Links */ }
          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* Email */ }
            <a
              href="mailto:aman76593@gmail.com"
              className="group border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >

              <div className="flex items-center justify-between">

                <Mail className="text-blue-500" />

                <ArrowUpRight
                  size={ 18 }
                  className="text-zinc-500 group-hover:text-white transition-colors"
                />

              </div>

              <h3 className="text-xl font-semibold mt-8">
                Email
              </h3>

              <p className="text-zinc-400 mt-3 break-all">
                aman76593@gmail.com
              </p>

            </a>

            {/* LinkedIn */ }
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="group border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >

              <div className="flex items-center justify-between">

                <FaLinkedin className="text-blue-500" />

                <ArrowUpRight
                  size={ 18 }
                  className="text-zinc-500 group-hover:text-white transition-colors"
                />

              </div>

              <h3 className="text-xl font-semibold mt-8">
                LinkedIn
              </h3>

              <p className="text-zinc-400 mt-3">
                Connect professionally
              </p>

            </a>

            {/* GitHub */ }
            <a
              href="https://github.com/"
              target="_blank"
              className="group border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >

              <div className="flex items-center justify-between">

                <SiGithub className="text-blue-500" />

                <ArrowUpRight
                  size={ 18 }
                  className="text-zinc-500 group-hover:text-white transition-colors"
                />

              </div>

              <h3 className="text-xl font-semibold mt-8">
                GitHub
              </h3>

              <p className="text-zinc-400 mt-3">
                Explore projects & code
              </p>

            </a>

          </div>

        </div>
      </div>
    </section>
  );
}