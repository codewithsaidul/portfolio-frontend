"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Pencil, Trash2, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { BlogDialog } from "@/components/Dashboard/Dialog/BlogDialog"
import { DeleteDialog } from "@/components/Dashboard/Dialog/DeleteDialog"

type Blog = {
  id: string
  title: string
  description: string
  content: string
  thumbnail: string
  tags: string[]
  slug: string
  status: "published" | "draft"
  readTime: string
  createdAt: string
}

const initialBlogs: Blog[] = [
  {
    id: "1",
    title: "Building accessible components with React and TypeScript",
    description:
      "A deep dive into creating reusable, accessible UI components that work for everyone. Learn about ARIA patterns, keyboard navigation, and screen reader support.",
    content: "Full blog content here...",
    thumbnail: "/abstract-code-editor-with-react-components.jpg",
    tags: ["React", "TypeScript", "Accessibility"],
    slug: "accessible-components-react-typescript",
    status: "published",
    readTime: "8 min read",
    createdAt: "2024-03-15",
  },
  {
    id: "2",
    title: "Optimizing Next.js applications for performance",
    description:
      "Practical strategies for improving Core Web Vitals, reducing bundle size, and implementing effective caching strategies in production applications.",
    content: "Full blog content here...",
    thumbnail: "/performance-dashboard-with-speed-metrics.jpg",
    tags: ["Next.js", "Performance", "Web Vitals"],
    slug: "optimizing-nextjs-performance",
    status: "published",
    readTime: "12 min read",
    createdAt: "2024-02-28",
  },
  {
    id: "3",
    title: "Design systems and component architecture",
    description:
      "How to structure scalable design systems that bridge the gap between design and development, with real-world examples from production codebases.",
    content: "Full blog content here...",
    thumbnail: "/design-system-components-grid-layout.jpg",
    tags: ["Design Systems", "Architecture"],
    slug: "design-systems-component-architecture",
    status: "draft",
    readTime: "10 min read",
    createdAt: "2024-02-10",
  },
]

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null)
  const [deletingBlogId, setDeletingBlogId] = useState<string | null>(null)

  const handleCreate = (blog: Omit<Blog, "id" | "createdAt">) => {
    const newBlog: Blog = {
      ...blog,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split("T")[0],
    }
    setBlogs([newBlog, ...blogs])
    setIsDialogOpen(false)
  }

  const handleUpdate = (updatedBlog: Blog) => {
    setBlogs(blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b)))
    setIsDialogOpen(false)
    setEditingBlog(null)
  }

  const handleDelete = () => {
    if (deletingBlogId) {
      setBlogs(blogs.filter((b) => b.id !== deletingBlogId))
      setIsDeleteDialogOpen(false)
      setDeletingBlogId(null)
    }
  }

  const openEditDialog = (blog: Blog) => {
    setEditingBlog(blog)
    setIsDialogOpen(true)
  }

  const openDeleteDialog = (blogId: string) => {
    setDeletingBlogId(blogId)
    setIsDeleteDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setEditingBlog(null)
  }

  return (
    <div className="flex flex-col gap-8 p-4 pt-20 sm:p-6 lg:p-8 lg:pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="mb-2 font-sans text-3xl font-semibold text-foreground">Blog Posts</h1>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      <div className="space-y-4">
        {blogs.map((blog) => (
          <Card key={blog.id} className="overflow-hidden border-border bg-card">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative aspect-video w-full max-h-52 overflow-hidden bg-muted md:w-64">
                <Image
                  src={blog.thumbnail || "/placeholder.svg"}
                  alt={blog.title}
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant={blog.status === "published" ? "default" : "secondary"}>{blog.status}</Badge>
                    <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{blog.createdAt}</span>
                  </div>
                  <CardTitle className="text-card-foreground">{blog.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-muted-foreground">{blog.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => openEditDialog(blog)}>
                      <Pencil className="mr-2 h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => openDeleteDialog(blog.id)}>
                      <Trash2 className="mr-2 h-3 w-3" />
                      Delete
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`/blog/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                        <Eye className="mr-2 h-3 w-3" />
                        View
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <BlogDialog
        open={isDialogOpen}
        onOpenChange={closeDialog}
        blog={editingBlog}
        onSave={editingBlog ? handleUpdate : handleCreate}
      />

      <DeleteDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
        onConfirm={handleDelete}
        title="Delete Blog Post"
        description="Are you sure you want to delete this blog post? This action cannot be undone."
      />
    </div>
  )
}
