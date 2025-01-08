import { getBlogBySlug, getAllBlogs } from '@/lib/blogs'
import { BlogLayout } from '@/components/layout/BlogLayout'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const blogs = await getAllBlogs()
  
  return blogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug)
  
  if (!blog) {
    notFound()
  }

  return (
    <BlogLayout blog={blog}>
      <div className="prose dark:prose-invert max-w-none">
        {blog.content}
      </div>
    </BlogLayout>
  )
} 