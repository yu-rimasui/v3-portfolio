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
              ・HTML・CSS：レスポンシブデザイン対応のランディングページ（LP）や、ページ遷移可能なホームページ（HP）の作成
              <br />
              ・JavaScript：インタラクティブな機能を備えたWebサイトの構築
              <br />
              ・React・Next.js：高速かつ直感的なWebアプリケーションやサイトの開発
              <br />
              ・作成例：電卓、診断ツール、ToDoリスト、タスク管理アプリなど
              <br />
              <br />
              <strong>バックエンド開発</strong>
              <br />
              ・Node.js・MySQL：データベース連携が可能なWebアプリケーションの構築
              <br />
              ・AWS（学習中）：クラウド環境を活用したWebサービスの運用
              <br />
              <br />
              <strong>業務自動化・効率化サポート</strong>
              <br />
              ・Google関連ツール（Google Apps Script、BigQuery、Looker Studio）：スプレッドシートやGoogleフォームを活用した自動化ツールの作成、大規模データのクエリ処理や可視化、データレポートの作成
              <br />
              ・Dify：チャットボットやAIを活用した業務効率化システムの導入支援
              <br />
              <br />
              <strong>データ分析</strong>
              <br />
              ・Python：PandasやMatplotlibなどのライブラリを使用したデータ分析やレポート作成
              <br />
              ・作成例：売上レポートやトレンド分析
              <br />
              ・Kaggle：データ分析や機械学習のスキル向上のためコンペに挑戦中
              <br />
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
