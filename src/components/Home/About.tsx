import { highlights } from "@/constants";
import AboutHighlight from "../About/AboutHighlight";
import AboutInfo from "../About/AboutInfo";

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate frontend developer with a keen eye for design and user
              experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo & Story */}
            <AboutInfo />

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">What I Bring</h3>
              <div className="grid gap-6">
                {highlights.map((item) => (
                  <AboutHighlight key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
        </div>
      </div>
    </section>
  );
}
