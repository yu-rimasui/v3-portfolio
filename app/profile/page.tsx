"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.h1
          className="text-4xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white"
          >
            <h2 className="text-2xl font-semibold mb-4">自己紹介</h2>
            <p className="mb-4">
              初めまして。crocoと申します。<br />
              <br />
              趣味はAIや最新デバイスなどのキャッチアップ。好奇心に生かされている、SFオタクです。<br />
              将来は、物理空間とAIエージェントを融合させたフィールドで活躍したいです。<br />
              <br />
              「行動次第で可能性は無限大」が自分のモットー。<br />
            </p>
            <div className="mt-4">
                <table className="w-full text-white border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-600 p-2">期間</th>
                            <th className="border border-gray-600 p-2">内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-600 p-2">2022.4</td>
                            <td className="border border-gray-600 p-2">
                                某国公立大学 電子情報学科 入学
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-2">2023.5-12</td>
                            <td className="border border-gray-600 p-2">
                                <span className="underline">プログラミングスクール</span><br />
                                webデザイン / アプリケーション開発 / チーム開発 を経験
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-2">2024.2-2025.1</td>
                            <td className="border border-gray-600 p-2">
                                <span className="underline">長期インターン</span><br />
                                Web開発の実務経験 / 市場調査 / 失注分析 等の経験を積む
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-2">2024.9-</td>
                            <td className="border border-gray-600 p-2">
                                <span className="underline">フリーランス活動</span>を開始<br />
                                約半年でWebアプリケーションを2件納品
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-2">2025.4-8</td>
                            <td className="border border-gray-600 p-2">
                                <span className="underline">東京大学グローバル消費インテリジェンス講座受講</span><br />
                                データサイエンスの基礎 / 機械学習コンペ / 事業提案をデータから導く最終課題 等を学習
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-600 p-2">2025.8-<br />年度末を目標に</td>
                            <td className="border border-gray-600 p-2">
                                <span className="underline">受講予定（松尾研）</span><br />
                                ・AIと半導体講座<br />
                                ・深層学習Deep Learning基礎講座<br />
                                ・大規模言語(LLM)モデル講座<br />
                                <span className="underline">取得予定</span><br />
                                ・応用技術者試験<br />
                                ・FP3級<br />
                                （・AWS認定）<br />
                                <span className="underline">その他</span><br />
                                ・生成系AIを絡めたWebアプリ開発<br />
                                ・ラズパイを喋らせる<br />
                                ・Kaggleでメダルを取る
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <br />
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
            </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white"
          >
            <h2 className="text-2xl font-semibold mb-4">できること</h2>
            <p className="mb-4">
              <strong>フロントエンド開発</strong>
              <br /> <br />
              <span className="underline">HTML / CSS</span><br />レスポンシブデザイン対応のランディングページ（LP）や、ページ遷移可能なホームページ（HP）の作成<br />
              <span className="underline">JavaScript</span><br />インタラクティブな機能を備えたWebサイトの構築<br />
              <span className="underline">React / Next.js</span><br />高速かつ直感的なWebアプリケーションやサイトの開発<br />
              <br />
              <strong>バックエンド開発 / クラウド</strong>
              <br /> <br />
              <span className="underline">Node.js / MySQL</span><br />個人開発において、Node.js, MySQLを用いたデータベース連携Webアプリケーションの設計・開発<br />
              <span className="underline">AWS</span><br />個人開発において、EC2, S3, RDSなど主要サービスを活用したインフラ構築を経験<br />
              <span className="underline">GCP</span><br />Google関連ツールの一部：GAS、BigQuery、Looker Studioの使用経験<br />
              <br />
              <strong>AI / データサイエンス</strong>
              <br /> <br />
              <span className="underline">機械学習</span><br />Pythonライブラリ(Numpy, Pandas, Scikit-learn)を用いたデータの前処理・可視化・モデル構築<br />
              <span className="underline">Kaggle</span><br />複数のコンペに参加し、データ分析からモデル提出までのプロセスを経験<br />
              <br />
            </p>

            <div className="mt-8 mb-3">
              <Image
                src="/images/about.jpg"
                alt="プロフィール画像"
                width={150}
                height={150}
                className="ms-3 shadow-xl object-cover border-gray-300 p-1 bg-white"
              />
            </div>
            <p>H14生まれ、東京育ち。夢見るSFオタク。</p>
            <div className="flex space-x-4 mt-3">
              <a
                href="https://github.com/yu-rimasui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yu-ri-masui-1b7970345/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              {/* <a
                href="https://x.com/usagi6972"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a> */}
              <a
                href="mailto:yurimasui02@gmail.com"
                className="text-3xl hover:text-gray-400 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  );
}
