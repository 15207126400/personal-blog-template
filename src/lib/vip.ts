import { promises as fs } from 'fs'
import path from 'path'
import { BlogType } from '@/types/blog'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

// 从文件读取会员码列表
export const getValidCodes = async () => {
  try {
    const codesPath = path.join(process.cwd(), 'data', 'vip-codes.json')
    const fileExists = await fs.stat(codesPath).catch(() => false)
    if (!fileExists) {
      console.log('Codes file not found')
      return []
    }
    const data = JSON.parse(await fs.readFile(codesPath, 'utf-8'))
    console.log('Valid codes:', data.codes)
    return data.codes || []
  } catch (error) {
    console.error('Error reading codes:', error)
    return []
  }
}

// 获取所有VIP博客
export async function getAllVipBlogs(): Promise<BlogType[]> {
  const blogPath = path.join(process.cwd(), 'src/content/vip-blog')
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
          date: meta.date,
          content,
          slug: file.replace('.mdx', '')
        }
      })
  )

  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 添加 Frontmatter 类型定义
type Frontmatter = {
  title: string
  description: string
  date: string
}

// 根据 slug 获取 VIP 博客
export async function getVipBlogBySlug(slug: string): Promise<BlogType | null> {
  // 如果是示例文件，返回 null
  if (slug === 'example.example') {
    return null
  }

  try {
    const filePath = path.join(process.cwd(), 'src/content/vip-blog', `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    const { frontmatter, content } = await compileMDX<Frontmatter>({
      source: fileContent,
      options: { parseFrontmatter: true }
    })

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      date: frontmatter.date,
      content,
      slug
    }
  } catch (error) {
    console.error('Error getting VIP blog:', error)
    return null
  }
} 