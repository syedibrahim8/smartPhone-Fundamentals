import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function CompletionScreen({ resetTutorial }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-[2rem] bg-card px-6 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
        <CheckCircle2 className="h-12 w-12" aria-hidden />
      </div>
      <h2 className="mb-2 text-2xl font-bold text-primary">
        Congratulations!
      </h2>
      <p className="mb-6 text-muted-foreground">
        You’ve successfully completed the tutorial.
      </p>
      <div className="flex w-full flex-col gap-3">
        <Button onClick={resetTutorial} className="w-full" size="lg">
          Try Again
        </Button>
        <Button variant="outline" asChild className="w-full" size="lg">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  )
}