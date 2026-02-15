export default function StepScreen({ step, showHint, handleCorrectClick, previous }) {
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
                    onClick={() => {
                        if (spot.id === "back") {
                            previous()
                        } else {
                            handleCorrectClick()
                        }
                    }}
                    className={`absolute bg-transparent cursor-pointer ${showHint ? "outline-dashed outline-yellow-400" : ""}`}
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
