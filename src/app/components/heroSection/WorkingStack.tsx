"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

type Tile = { name: string; logo: string };

const cloudPlatforms: { lead: Tile[]; secondary: Tile[] } = {
  lead: [{ name: "Azure", logo: "/logos/microsoftazure.svg" }],
  secondary: [
    { name: "GCP", logo: "/logos/googlecloud.svg" },
    { name: "AWS", logo: "/logos/amazonaws.svg" },
  ],
};

const dataAiPlatforms: { lead: Tile[]; secondary: Tile[] } = {
  lead: [
    { name: "Microsoft Fabric", logo: "/logos/microsoftfabric.svg" },
    { name: "Databricks", logo: "/logos/databricks.svg" },
  ],
  secondary: [
    { name: "Snowflake", logo: "/logos/snowflake.svg" },
    { name: "dbt", logo: "/logos/dbt.svg" },
    { name: "Apache Spark", logo: "/logos/apachespark.svg" },
    { name: "LangChain", logo: "/logos/langchain.svg" },
    { name: "OpenAI", logo: "/logos/openai.svg" },
  ],
};

const engineeringTools: Tile[] = [
  { name: "Power BI", logo: "/logos/powerbi.svg" },
  { name: "Airflow", logo: "/logos/apacheairflow.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
];

function LeadTile({ tile, index }: { tile: Tile; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center gap-3 bg-white rounded-2xl p-6 w-36 sm:w-40 shadow-md border border-gray-100 hover:shadow-xl hover:border-[#2596be]/40 transition-shadow duration-300"
    >
      <div className="w-14 h-14 flex items-center justify-center">
        <Image src={tile.logo} alt={tile.name} width={56} height={56} />
      </div>
      <span className="text-sm font-bold text-[#011632] text-center">
        {tile.name}
      </span>
    </motion.div>
  );
}

function SecondaryTile({ tile, index }: { tile: Tile; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -3 }}
      className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 w-24 sm:w-28 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2596be]/30 transition-shadow duration-300"
    >
      <div className="w-9 h-9 flex items-center justify-center">
        <Image src={tile.logo} alt={tile.name} width={36} height={36} />
      </div>
      <span className="text-xs font-semibold text-[#3C4959] text-center">
        {tile.name}
      </span>
    </motion.div>
  );
}

function StreamBlock({
  title,
  lead,
  secondary,
}: {
  title: string;
  lead: Tile[];
  secondary: Tile[];
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-[#011632] tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap items-center gap-4">
        {lead.map((tile, i) => (
          <LeadTile key={tile.name} tile={tile} index={i} />
        ))}
        {secondary.map((tile, i) => (
          <SecondaryTile key={tile.name} tile={tile} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function WorkingStack() {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 space-y-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight text-[#011632] font-bold">
          The platforms we&apos;re actually deep in, not a logo wall for
          show.
        </h2>
        <p className="text-lg text-[#3C4959] leading-relaxed">
          Every tool here is one we build, run, and support in real client
          environments.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        <StreamBlock
          title="Cloud Platforms"
          lead={cloudPlatforms.lead}
          secondary={cloudPlatforms.secondary}
        />
        <StreamBlock
          title="Data & AI Platforms"
          lead={dataAiPlatforms.lead}
          secondary={dataAiPlatforms.secondary}
        />

        {/* Engineering & Analytics Tools, lighter tier */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-[#011632] tracking-tight">
            Engineering &amp; Analytics Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {engineeringTools.map((tile, i) => (
              <motion.div
                key={tile.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 border border-gray-200 hover:border-[#2596be]/30 hover:bg-white transition-colors duration-300"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <Image
                    src={tile.logo}
                    alt={tile.name}
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-xs font-medium text-[#3C4959]">
                  {tile.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
