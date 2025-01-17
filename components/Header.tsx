import Link from "next/link";
import QuantumNav from "./QuantumNav";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-montserrat">
          arunb
        </Link>
        <QuantumNav />
      </div>
    </header>
  );
}
