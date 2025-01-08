"use client"

import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import type { NextPage } from 'next'

const Page: NextPage = () => {
  const [code, setCode] = useState('')
  
  const generateCode = () => {
    // 生成格式: VIP-XXXX-XXXX (X为数字和大写字母的组合)
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const part1 = Array(4).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
    const part2 = Array(4).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('')
    const newCode = `VIP-${part1}-${part2}`
    setCode(newCode)
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center">生成会员码</h1>
        
        <div className="mt-8 space-y-4">
          <div 
            className="p-4 bg-muted rounded-lg font-mono text-center text-lg cursor-pointer"
            onClick={() => {
              if (code) {
                navigator.clipboard.writeText(code)
              }
            }}
            title={code ? "点击复制" : ""}
          >
            {code || "点击下方按钮生成会员码"}
          </div>
          
          <button
            onClick={generateCode}
            className="w-full px-4 py-2 bg-primary text-white rounded-lg"
          >
            生成新会员码
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Page 