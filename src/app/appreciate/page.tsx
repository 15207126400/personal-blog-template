import Image from 'next/image'
import { Container } from '@/components/layout/Container'

export default function AppreciatePage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          打赏Ivan
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          请博主喝一杯92年的美式咖啡
        </p>
        
        <div className="mt-10 flex flex-col md:flex-row gap-8 items-center">
          {/* 支付宝收款码 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64">
              <Image
                src="/images/qrcode/ali_pay_qrcode.png"
                alt="支付宝收款码"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
} 