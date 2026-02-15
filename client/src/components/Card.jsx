import { Link } from "react-router-dom"
import { BookOpen } from "lucide-react"
import {
  Card as ShadcnCard,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function TutorialCard({ slug, title, desc, image }) {
  return (
    <ShadcnCard
      className={cn(
        "overflow-hidden transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5",
        "border-border bg-card text-card-foreground"
      )}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-contain rounded-t-xl bg-gradient-to-b from-muted/50 to-muted"
        />
        <Badge variant="secondary" className="absolute right-3 top-3 text-xs">
          Beginner friendly
        </Badge>
      </div>
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="text-lg leading-tight sm:text-xl">{title}</CardTitle>
        <CardDescription className="text-base text-muted-foreground line-clamp-3 min-h-[3.75rem]">
          {desc}
        </CardDescription>
      </CardHeader>
      <CardFooter className="pt-0">
        <Button asChild className="w-full" size="lg">
          <Link to={`/tutorial/${slug}`}>
            <BookOpen className="mr-2 h-4 w-4" />
            Start Tutorial
          </Link>
        </Button>
      </CardFooter>
    </ShadcnCard>
  )
}