import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getValidCodes } from '@/lib/vip'

export async function POST(request: Request) {
  try {
    const { code } = await request.json()
    const validCodes = await getValidCodes()
    
    console.log('Validating code:', code) // 添加日志
    console.log('Valid codes:', validCodes) // 添加日志
    
    if (validCodes.includes(code)) {
      // 设置 cookie
      cookies().set('vip_access', code, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7 // 7天
      })
      
      return NextResponse.json({ valid: true })
    }
    
    return NextResponse.json({ valid: false, message: '无效的会员码' })
  } catch (error) {
    console.error('Validation error:', error) // 添加错误日志
    return NextResponse.json({ 
      valid: false, 
      message: '验证失败，请重试',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { 
      status: 400 
    })
  }
} 