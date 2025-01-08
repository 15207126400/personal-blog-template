import Link from 'next/link'
import type { BlogType } from '@/types/blog'
import { formatDate } from '@/lib/formatDate'

interface BlogListProps {
  blogs: BlogType[]
  isVip?: boolean
}

export function BlogList({ blogs, isVip = false }: BlogListProps) {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {blogs.map((blog) => (
          <article key={blog.slug} className="md:grid md:grid-cols-4 md:items-baseline">
            <div className="md:col-span-3 group relative flex flex-col items-start">
              <h2 className="text-base font-semibold tracking-tight flex items-center gap-2">
                <Link
                  href={isVip ? `/vip-blog/${blog.slug}` : `/blog/${blog.slug}`}
                  className="hover:text-primary"
                >
                  {blog.title}
                </Link>
              </h2>
              <time
                dateTime={blog.date}
                className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
              >
                {formatDate(blog.date)}
              </time>
              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {blog.description}
              </p>
            </div>
            <time
              dateTime={blog.date}
              className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
            >
              {formatDate(blog.date)}
            </time>
          </article>
        ))}
      </div>
    </div>
  )
} 