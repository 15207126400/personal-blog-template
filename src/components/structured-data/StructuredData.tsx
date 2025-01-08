import { name, introduction } from '@/config/infoConfig'

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    description: introduction,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    author: {
      "@type": "Person",
      name: name,
      url: process.env.NEXT_PUBLIC_SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 