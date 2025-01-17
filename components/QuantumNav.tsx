"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Dot の型定義
interface Dot {
  size: number;
  opacity: number;
  x: number;
  y: number;
  startX: number;
  startY: number;
}

// ランダムなドットの配置データを生成する関数
const generateDots = (
  count: number,
  width: number,
  height: number
): Omit<Dot, "startX" | "startY">[] => {
  return Array.from({ length: count }, () => ({
    size: Math.random() * 15 + 5, // 5px ~ 20px
    opacity: Math.random() * 0.8 + 0.2, // 0.2 ~ 1.0
    x: Math.random() * width - width / 2, // -width/2 ~ width/2
    y: Math.random() * height - height / 2, // -height/2 ~ height/2
  }));
};

const navItems = [
  { name: "Home", href: "/" },
  { name: "Works", href: "/works" },
  { name: "Profile", href: "/profile" },
  { name: "Contact", href: "/contact" },
];

export default function QuantumNav() {
  const [isOpen, setIsOpen] = useState(false);

  // dots ステートを Dot[] で定義
  const [dots, setDots] = useState<Dot[]>([]);

  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const width = window.innerWidth;
      const height = window.innerHeight;
      // generateDots で size, opacity, x, y を作り、
      // 各要素に startX, startY を加える
      const newDots = generateDots(50, width, height).map((dot) => ({
        ...dot,
        startX: rect.left + rect.width / 2, // ボタンの中心を始点Xに設定
        startY: rect.top + rect.height / 2, // ボタンの中心を始点Yに設定
      }));
      setDots(newDots);
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-5 right-5 z-50">
      {/* メインのボタン */}
      <motion.div
        ref={buttonRef}
        className="relative w-16 h-16 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle navigation menu"
      >
        <motion.span
          className="absolute w-8 h-8 bg-white rounded-full"
          initial={{ opacity: 1 }}
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        />
        <motion.span
          className="absolute text-2xl font-bold"
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
        >
          ×
        </motion.span>
      </motion.div>

      {/* ドットのアニメーション */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            {dots.map((dot, index) => (
              <motion.div
                key={index}
                className="absolute bg-white rounded-full"
                style={{
                  width: dot.size,
                  height: dot.size,
                  opacity: dot.opacity,
                  top: `${dot.startY}px`,
                  left: `${dot.startX}px`,
                }}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: dot.x,
                  y: dot.y,
                  opacity: dot.opacity,
                }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* ナビゲーションメニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-6 bg-black bg-opacity-80 backdrop-blur-lg rounded-lg shadow-xl p-6 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-white hover:bg-gray-700 rounded transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
