import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface BlogCardProps {
  title: string
  description: string
  date: string
  readTime: string
  slug: string
  tags?: string[]
  thumbnail: string
}

export function BlogCard({ title, description, date, readTime, slug, tags = [], thumbnail }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block border border-border bg-card overflow-hidden transition-colors hover:border-foreground"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
        <Image
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={date}>{date}</time>
              <span>·</span>
              <span>{readTime}</span>
            </div>

            <h3 className="font-sans text-xl font-medium leading-tight text-foreground transition-colors group-hover:text-foreground">
              {title}
            </h3>

            <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  )
}
