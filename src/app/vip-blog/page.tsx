import { Container } from '@/components/layout/Container'
import { getAllVipBlogs, getValidCodes } from '@/lib/vip'
import { cookies } from 'next/headers'
import { VipCheck } from '@/components/auth/VipCheck'
import { BlogList } from '@/components/blog/BlogList'
import { vipHeadLine, vipIntro } from '@/config/infoConfig'

export default async function VipBlogListPage() {
  const cookieStore = cookies()
  const vipCode = cookieStore.get('vip_access')?.value
  const validCodes = await getValidCodes()

  // 如果没有有效的会员码，显示验证界面
  if (!vipCode || !validCodes.includes(vipCode)) {
    return <VipCheck />
  }

  const blogs = await getAllVipBlogs()

  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {vipHeadLine}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {vipIntro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">
        <BlogList blogs={blogs} isVip={true} />
      </div>
    </Container>
  )
} 