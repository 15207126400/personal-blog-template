'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function VipActivateForm() {
  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/vip/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      })

      if (!res.ok) {
        throw new Error('会员码无效')
      }

      router.push('/vip-blog')
    } catch (err) {
      setError(err instanceof Error ? err.message : '激活失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="请输入会员码"
          className="w-full rounded-lg border border-zinc-200 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800/50"
          disabled={loading}
        />
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90 disabled:opacity-50"
        disabled={loading || !code}
      >
        {loading ? '激活中...' : '立即激活'}
      </button>
    </form>
  )
} 