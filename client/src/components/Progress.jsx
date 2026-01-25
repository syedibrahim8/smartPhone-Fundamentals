export default function ProgressBar(){
    const percentage = (currentStep / totalSteps) * 100

    return(
        <div className="mb-6">
            <div className="h-3 bg-gray-200 rounded-full">
                <div className="h-3 bg-indigo-600 rounded-full transition-all" style={{width:`${percentage}%`}}>
                </div>
            </div>
            <p className="text-sm mt-2 text-gray-600">
                step {currentStep} of {totalSteps}
            </p>
        </div>
    )
}