"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export function VipCheck() {
  const [code, setCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/vip/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      const data = await res.json()

      if (data.valid) {
        localStorage.setItem('vip_code', code)
        router.refresh()
      } else {
        setError('无效的会员码')
      }
    } catch (err) {
      setError('验证失败，请重试')
    }
  }

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-2xl border border-zinc-100 p-8 dark:border-zinc-700/40">
        <div className="text-center">
          <h2 className="text-2xl font-bold">VIP 订阅专栏</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            输入会员码访问完整内容
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <input
              type="text"
              required
              className="block w-full rounded-lg border border-zinc-200 bg-white/50 px-3 py-2 text-zinc-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-100 dark:focus:border-primary"
              placeholder="请输入会员码"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            {error && (
              <p className="mt-2 text-sm text-red-500">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-base font-semibold text-white shadow-lg hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900/50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 border-2 border-zinc-900 dark:border-zinc-200 transition-all"
          >
            立即验证
          </button>
        </form>

        <div className="mt-6 space-y-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <div className="space-y-2">
            <p className="font-medium text-primary">VIP 专栏特权</p>
            <p>• SEO优化策略和工具推荐</p>
            <p>• 详细的项目变现教程</p>
            <p>• 持续更新的优质内容</p>
          </div>
          
          <div className="pt-4">
            <p className="font-medium text-primary">订阅价格</p>
            <p className="text-xl font-bold text-zinc-900 dark:text-zinc-100">¥299 / 终身会员</p>
          </div>

          <div className="pt-4">
            <p className="text-zinc-500 dark:text-zinc-400">没有会员码？</p>
            <Link 
              href="/ivan-qrcode"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/90 mt-2"
            >
              添加作者微信咨询开通方式 
              <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 