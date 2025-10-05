import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-muted/30 to-accent-muted/20" />
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      `,
        }}
      />
      <div className="min-h-screen flex items-center justify-center">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl" />
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-2xl blur-xl rotate-12" />
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-2xl blur-xl rotate-45" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                <span className="text-xl font-serif block font-bold text-foreground mb-6 leading-tight">
                  Hi, I&apos;m{" "}
                </span>
                Saidul Islam Rana
              </h1>

              <p className="text-muted-foreground text-xl min-[415px]:text-3xl md:text-4xl my-3">
                I am a{" "}
                <span className="font-dm-serif text-primary">
                  Juinor Web Developer
                </span>
              </p>
            </div>

            {/* Description */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light leading-relaxed">
              I&apos;m a JavaScript & **TypeScript** developer focused on
              building beautiful, functional, and high-performance web
              experiences. From responsive frontends with React & Next.js to
              robust, type-safe backends with Node.js, I love creating solutions
              that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="rounded-2xl px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link
                  href="/frontend-developer-resume-of-saidul.pdf"
                  download
                  className="flex items-center gap-1"
                >
                  <span>
                    <Download size={24} />
                  </span>
                  Download Resume
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <Link
                href="https://github.com/codewithsaidul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
                className="p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/codewithsaidul"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                className="p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:codewithsaidul@gmail.com"
                aria-label="email"
                className="p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
