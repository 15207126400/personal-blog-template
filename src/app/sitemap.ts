import { MetadataRoute } from 'next'
import { getAllBlogs } from '@/lib/blogs'
import { getAllVipBlogs } from '@/lib/vip'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 获取所有博客文章
  const blogs = await getAllBlogs()
  const blogUrls = blogs.map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 获取所有VIP文章
  const vipBlogs = await getAllVipBlogs()
  const vipBlogUrls = vipBlogs.map((blog) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/vip-blog/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // 静态路由
  const routes = [
    '',
    '/about',
    '/blogs',
    '/vip-blog',
    '/projects',
    '/friends',
    '/changelog',
    '/ivan-qrcode',
    '/appreciate',
  ].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.7,
  }))

  return [
    ...routes,
    ...blogUrls,
    ...vipBlogUrls,
  ]
} 