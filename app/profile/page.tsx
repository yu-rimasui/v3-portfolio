"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
];

export default function Profile() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
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
          Profile
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white"
          >
            <h2 className="text-2xl font-semibold mb-4">私について</h2>
            <p className="mb-4">
              はじめまして、エンジニアのうさぎです🐇
              <br />
              趣味は最新のAIツールを色々試したり、実装して日常の生活やタスクを効率化させること。
              <br />
              <br />
              プログラミングスクールで約1年間Web開発を学んだのち、通信系企業の開発部でインターンとして1年間実務経験を積みました。
              <br />
              現在はクライアントワークを通じて実績を積み上げています
              <br />
              <br />
              新しい技術やトレンドのキャッチアップを欠かさず、日々成長し続けることがモットー。自分の可能性は無限大✨
              <br />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white"
          >
            <h2 className="text-2xl font-semibold mb-4">スキル</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
            <br />
            <h2 className="text-2xl font-semibold mb-4">できること</h2>
            <p className="mb-4">
              <strong>フロントエンド開発</strong>
              <br />
              ・レスポンシブデザイン対応のWebページやランディングページ（LP）の作成
              <br />
              ・ReactやNext.jsを用いたた、高速で直感的なWebサイトやホームページ（HP）の構築
              <br />
              <strong>業務自動化サポート</strong>
              <br />
              ・GASやDifyなどを活用した業務自動化の導入支援
              <br />
              <strong>データ分析（学習中）</strong>
              <br />
              ・Pythonのライブラリを使用した分析
              <br />
              ・Kaggleのコンペに挑戦しています
              <br />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
