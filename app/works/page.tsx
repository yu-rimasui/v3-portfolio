"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // アイコンをインポート

const works = [
  {
    id: 1,
    title: "My Portfolio",
    image: "/images/project01.png",
    tech: ["JavaScript", "TypeScript", "Next.js"],
    links: {
      github: "https://github.com/yu-rimasui",
      live: "",
    },
  },
  {
    id: 2,
    title: "Calculator",
    image: "/images/project02.jpg",
    tech: ["JavaScript", "React"],
    links: {
      github: "https://github.com/yu-rimasui/work04_calculator",
      live: "",
    },
  },
  {
    id: 3,
    title: "Weekly Schedule",
    image: "/images/project03.jpg",
    tech: ["JavaScript", "React"],
    links: {
      github: "https://github.com/yu-rimasui/work05_scheduleApp",
      live: "",
    },
  },
  // 必要に応じてプロジェクトを追加
];

export default function Works() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* 背景画像 */}
      <Image
        src="/images/space-background.jpg"
        alt="Space background"
        fill
        className="object-cover"
      />

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* コンテンツをラップする要素 */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Works
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={work.image}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  {work.title}
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-sm px-2 py-1 rounded text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* ソーシャルリンクの追加 */}
                <div className="flex space-x-4">
                  {work.links.github && (
                    <a
                      href={work.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400 transition"
                      aria-label={`${work.title} GitHub Repository`}
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                  {work.links.live && (
                    <a
                      href={work.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-400 transition"
                      aria-label={`${work.title} Live Demo`}
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                  {/* 必要に応じて他のリンクを追加 */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
