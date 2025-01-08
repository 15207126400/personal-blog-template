import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/layout/Layout'
import { Analytics } from "@/components/analytics/analytics";
import { name, headline, introduction } from '@/config/infoConfig'
import '@/styles/tailwind.css'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'

export const metadata: Metadata = {
  title: {
    template: `%s - ${name}`,
    default: `${name} - ${headline}`,
  },
  description: introduction,
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: name,
    title: `${name} - ${headline}`,
    description: introduction,
    images: [
      {
        url: '/ivanvolt-index.jpg',
        width: 1200,
        height: 630,
        alt: `${name}'s Portfolio`,
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${name} - ${headline}`,
    description: introduction,
    creator: '@ivanvolt',
    images: ['/ivanvolt-index.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="ivanvolt" sizes="180x180" href="/icon/ivanvolt.jpg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex h-full">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
          <Analytics />
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  )
}
