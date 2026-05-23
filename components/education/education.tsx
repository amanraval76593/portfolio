export default function Education() {
    return (
        <section
            id="education"
            className="py-32"
        >
            <div className="section-container">

                <h2 className="section-title">
                    Education
                </h2>

                <div className="card p-8">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                        <div>
                            <h3 className="text-2xl font-semibold">
                                IIITDM Chennai
                            </h3>

                            <p className="text-blue-500 mt-2">
                                B.Tech in Electronics & Communication Engineering
                            </p>
                        </div>

                        <p className="text-zinc-500">
                            2021 — 2025
                        </p>
                    </div>

                    <div className="mt-8">

                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />

                            <p className="text-zinc-300">
                                CGPA: 8.0
                            </p>
                        </div>

                        <div className="mt-6">

                            <p className="text-zinc-500 uppercase tracking-[0.2em] text-xs mb-4">
                                Relevant Coursework
                            </p>

                            <div className="flex flex-wrap gap-3">
                                { [
                                    "Data Structures & Algorithms",
                                    "Operating Systems",
                                    "Database Management Systems",
                                    "Computer Networks",
                                    "Object Oriented Programming",
                                    "Distributed Systems",
                                    "Cloud Computing",
                                    "System Design",
                                    "Software Engineering",
                                    "Computer Architecture",
                                ].map((course) => (
                                    <span
                                        key={ course }
                                        className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-300"
                                    >
                                        { course }
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