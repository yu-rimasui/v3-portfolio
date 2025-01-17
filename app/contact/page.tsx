"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const script_id =
        "AKfycbyei9uBI5XlJU-KDXPkdakirzkVhEN5q0SeDMk4r07ACZ2DmCsmSkn1I4DQYTgSE6GhNQ";
      const response = await fetch(
        `https://script.google.com/macros/s/${script_id}/exec`,
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/x_www_form_urlencoded",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setResponseMessage(
          "メッセージが送信されました。ありがとうございます！"
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("送信に失敗しました。もう一度お試しください。");
      }
    } catch (error) {
      console.error("エラーが発生しました:", error);
      setResponseMessage("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Contact Form"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 text-white rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-800 text-white rounded h-32"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
          <motion.div
            className="space-y-4 text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Connect Information</h2>
            <p>{responseMessage}</p>
            {/* ソーシャルアイコン */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/masui.y"
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
              <a
                href="https:/x.com/usagi6972"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-gray-400 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:yurimasui02@gmail.com"
                className="text-3xl hover:text-gray-400 transition duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <p>
              Email:{" "}
              <a
                href="mailto:yurimasui02@gmail.com"
                className="text-blue-400 hover:underline"
              >
                yurimasui02@gmail.com
              </a>
            </p>
            <p>お気軽にお問い合わせください。</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
