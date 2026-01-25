import { useParams } from "react-router-dom";
import tutorials from "../data/tutorials";
import ProgressBar from "../components/Progress";

export default function Tutorial() {
    const { slug } = useParams();
    const tutorial = tutorials.find((x) => x.slug === slug);

    if (!tutorial) return <p>Tutorial not found</p>

    return (
        <div className="max-w-3xl mx-auto text-gray-900">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{tutorial.title}</h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{tutorial.desc}</p>
        </div>
    )
}