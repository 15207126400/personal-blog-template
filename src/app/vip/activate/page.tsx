import { Container } from '@/components/layout/Container'
import { VipActivateForm } from '@/components/vip/VipActivateForm'

export default function VipActivatePage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          激活VIP会员
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          请输入会员码激活VIP权限
        </p>
        <div className="mt-10 w-full max-w-md">
          <VipActivateForm />
        </div>
      </div>
    </Container>
  )
} 