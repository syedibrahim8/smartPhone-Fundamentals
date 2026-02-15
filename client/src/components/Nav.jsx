import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md",
        "transition-shadow duration-200",
        "shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl justify-between items-center px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-xl font-bold sm:text-2xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          Teach Parents Smartphone
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <Button
              key={to}
              variant="ghost"
              size="sm"
              asChild
              className="text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
            >
              <Link to={to}>{label}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile: hamburger + Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="sm:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="text-foreground hover:bg-accent"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-2">
              {navLinks.map(({ to, label }) => (
                <Button
                  key={to}
                  variant="ghost"
                  className="justify-start text-base"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <Link to={to}>{label}</Link>
                </Button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
