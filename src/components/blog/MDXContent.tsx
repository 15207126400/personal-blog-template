'use client'

import { MDXRemote, type MDXRemoteProps } from 'next-mdx-remote'

interface MDXContentProps {
  code: MDXRemoteProps
}

export function MDXContent({ code }: MDXContentProps) {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote {...code} />
    </div>
  )
} 