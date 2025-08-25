import { Inter } from "next/font/google";
import Script from "next/script"; // スクリプト用のインポート
import "./globals.css";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import WarpTransition from "../components/WarpTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "yu-rimasui's Portfolio",
  description: "this is yur-rimasui's portfolio website",
  openGraph: {
    title: "yu-rimasui's Portfolio",
    description: "this is yur-rimasui's portfolio website",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* 右クリック禁止スクリプト */}
        <Script id="disable-right-click" strategy="afterInteractive">
          {`
            document.addEventListener("contextmenu", function(e) {
              e.preventDefault();
              console.log("右クリック禁止");
            });
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {/* クライアントコンポーネントとしてのWarpTransitionを呼び出す */}
        <WarpTransition>{children}</WarpTransition>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
