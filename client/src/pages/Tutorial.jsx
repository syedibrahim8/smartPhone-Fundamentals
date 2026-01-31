import { useParams } from "react-router-dom";
import tutorials from "../data/tutorials";
import { useState } from "react";
import StepScreen from "../components/Screen";
import CompletionScreen from "../components/CompletedTut";

export default function Tutorial() {
    const { slug } = useParams();
    const tutorial = tutorials.find((x) => x.slug === slug);

    if (!tutorial) return <p>Tutorial not found</p>

    const [stepIndex, setStepIndex] = useState(0);
    const [showHint, setShowHint] = useState(false);

    const isCompleted = stepIndex === tutorial.steps.length
    const step = tutorial.steps[stepIndex] || null;

    const handleCorrectClick = () => {
        setShowHint(false);
        if (stepIndex < tutorial.steps.length) {
            setStepIndex(stepIndex + 1);
        }
    };

    const resetTutorial = () => {
        setStepIndex(0);
        setShowHint(false);
    };
    
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4">
                        {tutorial.title}
                    </h1>

                    {!isCompleted && (
                        <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded mb-6">
                            <strong>Step {stepIndex + 1}:</strong>{" "}
                            {showHint ? `HINT: ${step.instruction}` : step.instruction}
                        </div>
                    )}

                    {isCompleted && (
                        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded mb-6">
                            🎉 Tutorial Completed Successfully!
                        </div>
                    )}

                    {/* Progress */}
                    <div className="flex gap-2 mb-6">
                        {tutorial.steps.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 flex-1 rounded-full ${i <= stepIndex ? "bg-indigo-600" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            disabled={stepIndex === 0}
                            onClick={() => setStepIndex(stepIndex - 1)}
                            className="w-full sm:w-auto px-4 py-2 bg-gray-200 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </button>

                        <button
                            onClick={() => setShowHint(true)}
                            className="w-full sm:w-auto px-4 py-2 bg-yellow-400 rounded cursor-pointer"
                        >
                            Show Hint
                        </button>

                        <button
                            onClick={() => {
                                resetTutorial();
                            }}
                            className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded cursor-pointer"
                        >
                            Start Over
                        </button>
                    </div>
                </div>

                {/* RIGHT PHONE allign */}
                <div className="flex justify-center">
                    <div className="relative w-65 sm:w-75 md:w-85 lg:w-90">
                        <div className="bg-black rounded-[2.5rem] p-3 shadow-xl aspect-[9/19.5] w-full transition-opacity duration-300 ease-in-out">

                            {isCompleted ? (
                                <CompletionScreen resetTutorial={resetTutorial} />
                            ) : (
                                <StepScreen step={step}
                                    showHint={showHint}
                                    handleCorrectClick={handleCorrectClick} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}