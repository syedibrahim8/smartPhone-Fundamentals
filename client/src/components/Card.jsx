import { Link } from "react-router-dom";

export default function TutorialCard({ slug, title, desc, image }) {
    return (
        <>
            <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
                <img src={image} alt={title} className="w-full h-44 sm:h-48 object-cover rounded-lg" />
                <h3 className="text-lg sm:text-xl font-semibold mt-4">{title}</h3>
                <p className="text-gray-600 text-base sm:text-lg mt-2">{desc}</p>
                <Link to={`/tutorial/${slug}`} className="text-lg font-medium mt-4 inline-block text-indigo-600">Start Tutorial</Link>
            </div>
        </>
    )
}