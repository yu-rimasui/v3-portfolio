"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const generateDots = () =>
  Array.from({ length: 10 }, (_, index) => ({
    id: index,
    size: Math.random() * 80 + 120, // 120px ~ 200px
    x: Math.random() * 60 - 30, // -30vw ~ 30vw
    y: Math.random() * 60 - 30, // -30vh ~ 30vh
    opacity: Math.random() * 0.3 + 0.1, // 0.1 ~ 0.4
    color: `hsl(${Math.random() * 360}, 70%, 80%)`, // ランダムな柔らかい色
  }));

export default function Home() {
  const dots = generateDots();

  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* 背景画像 */}
      <Image
        src="/images/space-background.jpg"
        alt="Space background"
        fill
        className="object-cover"
      />

      {/* ドット */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full pointer-events-auto"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: dot.color,
              opacity: dot.opacity,
              top: "50%",
              left: "50%",
            }}
            initial={{
              x: `${dot.x}vw`,
              y: `${dot.y}vh`,
            }}
            whileHover={{
              x: `${dot.x + Math.random() * 20 - 10}vw`, // ホバー時のランダムな動き
              y: `${dot.y + Math.random() * 20 - 10}vh`,
            }}
            whileTap={{
              x: `${dot.x + Math.random() * 20 - 10}vw`, // タップ時のランダムな動き
              y: `${dot.y + Math.random() * 20 - 10}vh`,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 150,
              damping: 10,
            }}
          />
        ))}
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-6xl font-bold mb-4 text-white italic"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          デジタルと現実が交差する新しい世界へ
        </motion.p>
        <motion.a
          href="/works"
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          プロジェクト一覧へ
        </motion.a>
      </div>
    </main>
  );
}
