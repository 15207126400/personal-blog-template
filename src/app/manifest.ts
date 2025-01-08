import { MetadataRoute } from 'next'
import { name, introduction } from '@/config/infoConfig'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: name,
    short_name: name,
    description: introduction,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/ivanvolt.jpg',
        sizes: '192x192',
        type: 'image/jpg'
      },
      {
        src: '/ivanvolt.jpg',
        sizes: '512x512',
        type: 'image/jpg'
      }
    ]
  }
} 