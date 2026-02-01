import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-black Shadow top-0 z-50">
                <div className="max-w-xl mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="text-xl sm:text-2xl font-bold bg-linear-to-r from-indigo-600 to-pink-500 
              bg-clip-text text-transparent">Teach Parents Smartphone</Link>
                    <div className="hidden sm:flex gap-6 text-base">
                        <Link to="/" className="text-white hover:text-indigo-700">Home</Link>
                        <Link to="/about" className="text-white hover:text-indigo-700">About</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}