import { Link } from "react-router-dom";

export default function CompletionScreen({ resetTutorial }) {
    return (
        <>
            <div className="bg-white rounded-4xl w-full h-full flex flex-col items-center justify-center text-center px-6">

                <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mb-6">
                    <span className="text-white text-5xl">✓</span>
                </div>

                <h2 className="text-2xl font-bold text-indigo-600 mb-2">
                    Congratulations!
                </h2>

                <p className="text-gray-600 mb-6">
                    You’ve successfully completed the tutorial.
                </p>

                <div className="flex flex-col gap-3 w-full">
                    <button
                        onClick={resetTutorial}
                        className="w-full px-4 py-2 bg-indigo-600 text-white rounded cursor-pointer"
                    >
                        Try Again
                    </button>

                    <Link
                        to="/"
                        className="w-full px-4 py-2 bg-gray-200 rounded text-center"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </>
    )
}