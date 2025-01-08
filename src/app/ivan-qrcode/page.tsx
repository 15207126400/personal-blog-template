import Image from 'next/image'
import { Container } from '@/components/layout/Container'

export default function QRCodePage() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            联系Ivan
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            请扫码添加微信
        </p>
        <div className="mt-10 relative w-64 h-64">
          <Image
            src="/images/qrcode/ivan-qrcode.jpg"
            alt="Ivan WeChat QR Code"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Container>
  )
} 