import { useParams } from "react-router-dom";
import tutorials from "../data/tutorials";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Tutorial() {
    const { slug } = useParams();
    const tutorial = tutorials.find((x) => x.slug === slug);

    if (!tutorial) return <p>Tutorial not found</p>

    const [stepIndex, setStepIndex] = useState(0);
    const [showHint, setShowHint] = useState(false);

    const step = tutorial.steps[stepIndex];

    const handleCorrectClick = () => {
        setShowHint(false);
        if (stepIndex < tutorial.steps.length - 1) {
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

                    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded mb-6">
                        <strong>Step {stepIndex + 1}:</strong>{" "}
                        {showHint ? `HINT: ${step.instruction}` : step.instruction}
                    </div>

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
                        <div className="bg-black rounded-[2.5rem] p-3 shadow-xl">
                            <img
                                src={step.img}
                                alt={step.title}
                                className="rounded-4xl w-full h-auto"
                            />

                            {/* CLICK SPOT */}
                            {step.clickSpot.map((spot) => (
                                <button
                                    key={spot.id}
                                    aria-label={spot.id}
                                    onClick={() => {
                                        handleCorrectClick();
                                    }}
                                    className={`absolute bg-transparent border-none cursor-pointer ${showHint ? "ring-4 ring-yellow-400" : ""
                                        }`}
                                    style={
                                        {
                                            top: spot.top,
                                            left: spot.left,
                                            width: spot.width,
                                            height: spot.height
                                        }
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>





        //     <div className="max-w-4xl mx-auto p-4">
        //   <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        //     {tutorial.title}
        //   </h1>

        //   {/* Instruction */}
        //   <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 mb-4">
        //     <strong>Step {stepIndex + 1}:</strong>{" "}
        //     {showHint ? `HINT: ${step.instruction}` : step.instruction}
        //   </div>

        //   {/* Progress dots */}
        //   <div className="flex justify-center gap-2 mb-6">
        //     {tutorial.steps.map((_, i) => (
        //       <div
        //         key={i}
        //         className={`w-3 h-3 rounded-full ${
        //           i === stepIndex ? "bg-indigo-600" : "bg-gray-300"
        //         }`}
        //       />
        //     ))}
        //   </div>

        //   {/* Phone Screen */}
        //   {step.id !== "completion" ? (
        //     <div className="relative bg-black rounded-3xl p-3 shadow-lg">
        //       <img
        //         src={step.img}
        //         alt={step.title}
        //         className="rounded-2xl w-full"
        //       />

        //       <button
        //         onClick={handleCorrectClick}
        //         className={`absolute inset-0 ${
        //           showHint ? "ring-4 ring-yellow-400" : ""
        //         }`}
        //         aria-label="clickable-area"
        //       />
        //     </div>
        //   ) : (
        //     <div className="bg-green-50 p-10 rounded-2xl text-center">
        //       <div className="text-5xl mb-4">✅</div>
        //       <h2 className="text-2xl font-bold text-green-700">
        //         Payment Successful!
        //       </h2>
        //       <p className="text-gray-600 mt-2">
        //         You’ve successfully learned how to send money using PhonePe.
        //       </p>
        //     </div>
        //   )}

        //   {/* Controls */}
        //   <div className="flex flex-wrap justify-between mt-6 gap-3">
        //     <button
        //       disabled={stepIndex === 0}
        //       onClick={() => setStepIndex(stepIndex - 1)}
        //       className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        //     >
        //       Previous
        //     </button>

        //     <button
        //       onClick={() => setShowHint(true)}
        //       className="px-4 py-2 bg-yellow-400 rounded"
        //     >
        //       Show Hint
        //     </button>

        //     <button
        //       onClick={resetTutorial}
        //       className="px-4 py-2 bg-red-500 text-white rounded"
        //     >
        //       Start Over
        //     </button>
        //   </div>
        // </div>
    )
}