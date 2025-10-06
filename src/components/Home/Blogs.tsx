import { BlogCard } from "../Blogs/BlogCard";
import { Button } from "../ui/button";

export default function Blogs() {
  return (
    <section className="w-full my-64">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="outline"
              className="px-8 py-3 border border-card hover:border-primary transition-all duration-300"
            >
              More Blogs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const blogPosts = [
  {
    title: "Building accessible components with React and TypeScript",
    description:
      "A deep dive into creating reusable, accessible UI components that work for everyone. Learn about ARIA patterns, keyboard navigation, and screen reader support.",
    date: "2024-03-15",
    readTime: "8 min read",
    slug: "accessible-components-react-typescript",
    tags: ["React", "TypeScript", "Accessibility"],
    thumbnail: "/abstract-code-editor-with-react-components.jpg",
  },
  {
    title: "Optimizing Next.js applications for performance",
    description:
      "Practical strategies for improving Core Web Vitals, reducing bundle size, and implementing effective caching strategies in production applications.",
    date: "2024-02-28",
    readTime: "12 min read",
    slug: "optimizing-nextjs-performance",
    tags: ["Next.js", "Performance", "Web Vitals"],
    thumbnail: "/performance-dashboard-with-speed-metrics.jpg",
  },
  {
    title: "Design systems and component architecture",
    description:
      "How to structure scalable design systems that bridge the gap between design and development, with real-world examples from production codebases.",
    date: "2024-02-10",
    readTime: "10 min read",
    slug: "design-systems-component-architecture",
    tags: ["Design Systems", "Architecture"],
    thumbnail: "/design-system-components-grid-layout.jpg",
  },
  {
    title: "Modern CSS techniques for responsive layouts",
    description:
      "Exploring CSS Grid, Container Queries, and modern layout patterns that create fluid, responsive interfaces without media query overload.",
    date: "2024-01-22",
    readTime: "6 min read",
    slug: "modern-css-responsive-layouts",
    tags: ["CSS", "Responsive Design"],
    thumbnail: "/responsive-grid-layout-wireframe.jpg",
  },
];
