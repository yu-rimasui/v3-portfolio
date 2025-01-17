import { Inter } from "next/font/google";
// import { montserrat, playfairDisplay } from "../lib/fonts";
import "./globals.css";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import WarpTransition from "../components/WarpTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quantum Portfolio",
  description: "A space-time warping portfolio showcasing my work and skills",
  openGraph: {
    title: "Quantum Portfolio",
    description: "A space-time warping portfolio showcasing my work and skills",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      // className={`${montserrat.variable} ${playfairDisplay.variable}`}
    >
      <body className={`${inter.className} bg-black text-white`}>
        <Header />
        {/* クライアントコンポーネントとしてのWarpTransitionを呼び出す */}
        <WarpTransition>{children}</WarpTransition>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
