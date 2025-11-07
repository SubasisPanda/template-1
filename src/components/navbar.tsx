import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <nav className="sticky-top-0 w-full   bg-background bg-black">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="w-9 text-2xl font-bold justify-start">
          <a href="/" className="hover:text-primary transition-colors">
            SaaS
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="#blog"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </a>
        </div>

        <Button variant="default">Get Started</Button>
      </div>
    </nav>
  )
}

export default Navbar
