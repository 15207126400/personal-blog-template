"use client"

import { ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'
import { ProjectItemType } from '@/config/infoConfig'
import { utm_source } from '@/config/siteConfig'
import Link from 'next/link'
import { HashIcon } from 'lucide-react'
import { useState } from 'react'

// 定义项目类别常量
const PROJECT_CATEGORIES = {
  WEBSITE: 'Website',
  MINIPROGRAM: 'Wechat Mini Program'
} as const

export function ProjectCard({ project, titleAs }: { project: ProjectItemType, titleAs?: keyof JSX.IntrinsicElements }) {
  const [showQRCode, setShowQRCode] = useState(false)
  const isMiniProgram = project.category?.includes(PROJECT_CATEGORIES.MINIPROGRAM)
  const isWebsite = project.category?.includes(PROJECT_CATEGORIES.WEBSITE)
  
  // 只对网站类型添加 utm 参数
  const utmLink = isWebsite 
    ? `https://${project.link.href}?utm_source=${utm_source}`
    : project.link.href
  
  let Component = titleAs ?? 'h2'

  const handleClick = () => {
    if (!isMiniProgram) {
      window.open(utmLink, '_blank')
    }
  }

  // 修改 favicon 获取 URL 为 HTTPS
  const faviconUrl = project.logo ?? 
    `https://www.google.com/s2/favicons?client=SOCIAL&type=FAVICON&url=https://${project.link.href}&sz=32`;

  return (
    <li 
      className='group relative flex flex-col items-start h-full'
      onMouseEnter={() => setShowQRCode(true)}
      onMouseLeave={() => setShowQRCode(false)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      style={{ cursor: isMiniProgram ? 'default' : 'pointer' }}
    >
      <div className="relative flex flex-col justify-between h-full w-full p-4 rounded-2xl border border-muted-foreground/20 shadow-sm transition-all group-hover:scale-[1.03] group-hover:shadow-md group-hover:bg-muted/5">
        <div className=''>
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-start sm:items-center gap-4'>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full">
              <Image
                src={faviconUrl}
                alt={`${project.name} logo - ${project.description}`}
                width={36}
                height={36}
                className="rounded-full w-[36px] h-[36px] object-contain"
                loading="lazy"
              />
            </div>
            <Component className="text-base font-semibold">
              {project.name}
            </Component>
          </div>
          <p className="relative z-10 mt-2 text-sm text-muted-foreground ml-2">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 mt-auto pt-4 ml-1">
          {/* 显示项目类型 */}
          {project.category && project.category.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center mb-2">
              {project.category.map((cat, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}
          
          {/* 显示标签 */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-x-2 items-center">
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-0.5 group"
                >
                  <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                  <span className="text-xs text-muted-foreground tracking-tighter">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 链接处理 */}
        <div className="absolute top-2 right-4 z-20">
          <ArrowUpRight size={16} className="h-4 w-4 group-hover:text-primary" />
        </div>
      </div>
      
      {/* 小程序二维码 */}
      {isMiniProgram && showQRCode && (
        <div className="absolute left-1/2 -bottom-2 p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-lg z-[999] transform -translate-x-1/2 translate-y-full border border-muted-foreground/20">
          {/* 上方小三角 */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white dark:bg-zinc-900 border-l border-t border-muted-foreground/20" />
          <div className="relative w-[160px] h-[160px]">
            <Image
              src={project.link.href}
              alt={`${project.name} QR Code`}
              fill
              className="rounded-lg object-contain"
            />
          </div>
          <p className="text-xs text-center mt-2 text-muted-foreground">
            扫码访问小程序
          </p>
        </div>
      )}
    </li>
  )
}