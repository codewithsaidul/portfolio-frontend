import { Button } from "@/components/ui/button";
import { projects } from "@/constants";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Load More Button */}

          <div className="text-center">
            <Button
              variant="outline"
              className="px-8 py-3 border border-card hover:border-primary transition-all duration-300"
            >
              Load More Projects
            </Button>
          </div>

          {/* CTA Section */}
          {/* <ProjectCTA ctaRef={ctaRef} /> */}
        </div>
      </div>
    </section>
  );
}
