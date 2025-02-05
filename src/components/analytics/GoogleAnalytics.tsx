'use client'

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google'

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  if (!gaId) {
    return null
  }

  return <NextGoogleAnalytics gaId={gaId} />
} 