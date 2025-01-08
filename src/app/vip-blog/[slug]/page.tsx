import { getValidCodes, getVipBlogBySlug } from '@/lib/vip'
import { BlogLayout } from '@/components/layout/BlogLayout'
import { VipCheck } from '@/components/auth/VipCheck'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function VipBlogPage({
  params,
}: {
  params: { slug: string }
}) {
  const cookieStore = cookies()
  const vipCode = cookieStore.get('vip_access')?.value
  const validCodes = await getValidCodes()
  
  if (!vipCode || !validCodes.includes(vipCode)) {
    return <VipCheck />
  }

  const blog = await getVipBlogBySlug(params.slug)
  
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