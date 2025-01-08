import type { ReactElement } from 'react'
import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import type { BlogType } from '@/types/blog'

export type { BlogType }

// 获取所有博客
export async function getAllBlogs(): Promise<BlogType[]> {
  const blogPath = path.join(process.cwd(), 'src/content/blog')
  const files = await fs.readdir(blogPath)
  
  const blogs = await Promise.all(
    files
      .filter((file) => file.endsWith('.mdx') && file !== 'example.example.mdx')
      .map(async (file) => {
        const filePath = path.join(blogPath, file)
        const fileContent = await fs.readFile(filePath, 'utf8')
        const { data: meta, content } = matter(fileContent)
        
        return {
          title: meta.title,
          description: meta.description,
          author: meta.author,
          date: meta.date,
          content: content,
          slug: file.replace('.mdx', '')
        }
      })
  )

  return blogs.sort((a, z) => {
    return new Date(z.date).getTime() - new Date(a.date).getTime()
  })
}

// 添加 frontmatter 的类型定义
type Frontmatter = {
  title: string
  description: string
  author?: string
  date: string
}

// 根据 slug 获取博客
export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
  // 如果是示例文件，返回 null
  if (slug === 'example.example') {
    return null
  }

  try {
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    // 使用 compileMDX 处理 MDX 内容，并指定 frontmatter 类型
    const { frontmatter, content } = await compileMDX<Frontmatter>({
      source: fileContent,
      options: { parseFrontmatter: true }
    })

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      author: frontmatter.author,
      date: frontmatter.date,
      content,
      slug
    }
  } catch (error) {
    console.error('Error getting blog:', error)
    return null
  }
}