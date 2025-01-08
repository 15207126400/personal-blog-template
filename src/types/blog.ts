import type { ReactElement } from 'react'

export type BlogType = {
  title: string
  description: string
  author?: string
  date: string
  content?: ReactElement | string
  slug: string
} 