import tutorials from "../data/tutorials";
import TutorialCard from "../components/Card";

export default function Home() {
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Learn Smartphone Skills
                </h1>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        tutorials.map((x) => (
                            <TutorialCard key={x.slug} {...x} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}