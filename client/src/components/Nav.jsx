import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="bg-white Shadow sticky top-0 z-50">
                <div className="max-w-xl mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="text-xl sm:text-2xl font-bold text-indigo-600">Teach Parents Smartphone</Link>
                    <div className="hidden sm:flex gap-6 text-base">
                        <Link to="/" className="hover:text-indigo-700">Home</Link>
                        <Link to="/about" className="hover:text-indigo-700">About</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}