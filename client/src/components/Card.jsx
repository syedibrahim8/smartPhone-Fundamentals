import { Link } from "react-router-dom";

export default function TutorialCard({ slug, title, desc, image }) {
    return (
        <>
            <div className="bg-white shadow rounded-xl p-5 hover:shadow-lg transition">
                <img src={image} alt={title} className="w-full h-44 object-contain rounded-xl bg-black bg-radial-[at_50%_60%] from-zinc-600 to-zinc-900 to-75%" />
                <div>
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">{title}</h3>
                    <p className="text-gray-600 text-base sm:text-lg mt-2">{desc}</p>
                </div>
                <div className="text-center">
                    <Link to={`/tutorial/${slug}`}>
                        <button className="text-lg bg-black font-medium mt-4 px-4 rounded-xl text-white cursor-pointer">
                            Start Tutorial
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}