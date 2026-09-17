import Link from "next/link";

const deliverables = [
  "Assessment of your current data & BI stack",
  "Gap analysis against your business goals",
  "Prioritized roadmap of fixes and quick wins",
  "Findings walkthrough with your team",
];

export default function DataBiAudit() {
  return (
    <section
      id="data-bi-audit"
      className="py-16 px-6 md:px-10 lg:px-20 bg-gradient-to-r from-[#011632] to-[#0a1225]"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2596be] bg-white/10 rounded-full px-3 py-1.5">
            Productized Offer
          </span>
          <p className="text-xl sm:text-2xl font-semibold text-white/90 leading-snug">
            Before the big project, one small one that tells you exactly
            what you need.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Data &amp; BI Audit
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            A fixed-scope, 2-week engagement to assess your data and BI
            environment and give you a clear, prioritized path forward,
            before you commit to a larger project.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-300">
            <span className="bg-white/10 rounded-lg px-4 py-2 font-semibold">
              2 Weeks
            </span>
            <span className="bg-white/10 rounded-lg px-4 py-2 font-semibold">
              Fixed Scope
            </span>
            <span className="bg-white/10 rounded-lg px-4 py-2 font-semibold">
              Price: [TBD, contact us]
            </span>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-400 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:from-blue-500 hover:to-purple-700 transition-all duration-300"
          >
            Book Your Audit
          </Link>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
          <h3 className="text-white font-semibold text-lg">
            What You Get
          </h3>
          <ul className="space-y-3">
            {deliverables.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed"
              >
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#2596be] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
