import { cn } from "@/lib/utils"

/**
 * AppShell: top-level layout with soft animated gradient background,
 * skip-to-content link, and consistent max-width container.
 * Keeps text high-contrast and readable.
 */
export default function AppShell({ children, className }) {
  return (
    <div className={cn("relative flex min-h-screen flex-col", className)}>
      {/* Skip to main content - visible on focus for a11y */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>

      {/* Soft animated gradient background with subtle blobs */}
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-background"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />
        <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-r from-primary/50 to-transparent blur-3xl [animation:blob-1_15s_ease-in-out_infinite]" />
        <div className="absolute inset-0 opacity-[0.03] bg-gradient-to-r from-transparent to-primary/30 blur-3xl [animation:blob-2_18s_ease-in-out_infinite]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main content area - scrollable, with max-width and padding */}
      <div id="main-content" className="relative z-10 flex min-h-screen flex-col">
        {children}
      </div>
    </div>
  )
}
