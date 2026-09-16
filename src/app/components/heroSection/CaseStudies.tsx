"use client";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Hybrid Data Platform on GCP + Informatica",
    tag: "Aviation & Airport Operations",
    challenge:
      "Airport operations data was scattered across multiple source systems, making unified, timely decision-making difficult.",
    approach:
      "Built a hybrid platform on GCP, using Informatica for secure integration, BigQuery as the enterprise warehouse, a governed semantic layer, and Power BI for reporting.",
    outcome:
      "One unified data platform, faster operational decisions, self-service data access, strong governance.",
    tools: [
      "Informatica",
      "Google BigQuery",
      "Google Cloud Storage",
      "Power BI",
      "VPN Gateway",
    ],
  },
  {
    title: "Modern Data Fabric for Enterprise-Wide Analytics",
    tag: "Enterprise & Telecom",
    challenge:
      "Data from social, contact-center, and partner sources sat in silos, slowing analytics and blocking a single view of the business.",
    approach:
      "Deployed a Data Fabric architecture on Azure, using ADLS Gen2, Microsoft Fabric for pipelines/warehousing, real-time streams, and Purview for governance.",
    outcome:
      "Democratized data access, faster integration, real-time insights, stronger governance, fewer silos.",
    tools: ["Microsoft Fabric", "ADLS Gen2", "Azure Purview", "Power BI", "IBM CP4I"],
  },
  {
    title: "Unified Inventory & Fixture Analytics on Databricks",
    tag: "Global Retail Enterprise",
    challenge:
      "Sales, inventory, and physical fixture (rack) data lived in disconnected systems, some from live APIs, some from manual CSV uploads, making true stock and shelf-level status hard to see in one place.",
    approach:
      "Landed sales/inventory (scheduled API pulls) and fixture data (CSV) into ADLS Gen2, processed through a Databricks/Spark medallion pipeline (Bronze/Silver/Gold), governed end-to-end by Unity Catalog.",
    outcome:
      "One governed source of truth spanning sales, inventory, and fixtures, with clear lineage and access control.",
    tools: ["Databricks", "Apache Spark", "ADLS Gen2", "Unity Catalog", "Delta Lake"],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-16 px-6 md:px-10 lg:px-12 lg:py-20 space-y-10 bg-white"
    >
      <div className="text-center space-y-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#011632] font-bold">
          Real Engagements, Real Outcomes
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="flex flex-col bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-6 hover:shadow-xl hover:border-[#2596be]/30 transition-shadow duration-300"
          >
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wide text-[#2596be] bg-[#2596be]/10 rounded-full px-3 py-1 mb-3">
                {study.tag}
              </span>
              <h3 className="text-lg font-bold text-[#011632] leading-snug">
                {study.title}
              </h3>
            </div>

            <div className="space-y-5 text-sm text-[#3C4959] leading-loose">
              <p>
                <span className="font-bold text-[#011632]">Challenge: </span>
                {study.challenge}
              </p>
              <p>
                <span className="font-bold text-[#011632]">Approach: </span>
                {study.approach}
              </p>
              <p>
                <span className="font-bold text-[#011632]">Outcome: </span>
                {study.outcome}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {study.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs font-medium text-[#011632] bg-white border border-gray-200 rounded-md px-2 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>

            <p className="text-xs italic text-[#3C4959]/70 pt-2 border-t border-gray-200 mt-auto">
              Delivered by our team in a prior engagement
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
