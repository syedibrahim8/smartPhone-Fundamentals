import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"
import AppShell from "./components/AppShell"
import Navbar from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Tutorial from "./pages/Tutorial"
import NF from "./pages/NF.jsx"

function App() {
  return (
    <Router>
      <TooltipProvider delayDuration={300} skipDelayDuration={0}>
        <Toaster position="bottom-center" richColors closeButton />
        <AppShell>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="grow px-4 py-6 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tutorial/:slug" element={<Tutorial />} />
                <Route path="*" element={<NF />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </AppShell>
      </TooltipProvider>
    </Router>
  )
}

export default App
