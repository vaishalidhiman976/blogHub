import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="w-full border-b bg-white py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-cyan-600">
          BlogHub
        </Link>
        <Navbar/>
      </div>
    </header>
  )
}

export default Header
