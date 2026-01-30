export default function StepScreen({ step, showHint, handleCorrectClick }) {
    return (
        <>
            <img
                src={step.img}
                alt={step.title}
                className="rounded-4xl w-full h-full"
            />

            {step.clickSpot?.map((spot) => (
                <button
                    key={spot.id}
                    aria-label={spot.id}
                    onClick={handleCorrectClick}
                    className={`absolute bg-transparent border-none cursor-pointer ${showHint ? "ring-4 ring-yellow-400" : ""
                        }`}
                    style={{
                        top: spot.top,
                        left: spot.left,
                        width: spot.width,
                        height: spot.height,
                    }}
                />
            ))}
        </>
    );
}