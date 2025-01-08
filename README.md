# Ivan Portfolio Template

A modern portfolio template with VIP blog system, created by [Ivan](https://ivanvolt.com).

## Features

### Core Features
- 🎨 Modern UI with TailwindCSS and Shadcn/UI
- 🌓 Light/Dark Mode Support
- 📱 Fully Responsive Design
- 🚀 Built with Next.js 14 App Router
- 💻 Tech Stack Showcase with Icon Cloud
- 📊 Multiple Analytics Support
- 🔍 SEO Optimized

### Blog System
- 📝 MDX Support for Rich Content
- 🔐 VIP Content System
  - Member Code Generation
  - Protected VIP Content
  - Cookie-based Authentication
- 📰 RSS Feed Support
- 🎯 Category Management

### Developer Experience
- 🎯 TypeScript for Type Safety
- 📦 PNPM for Fast, Disk Space Efficient Installation
- 🔧 Easy Configuration
- 📱 Mobile-First Approach

## Highlights

### RSS Feed
The template includes RSS feed support:
1. Access feed via `/feed` endpoint
2. Auto-generated feed for latest blog posts
3. Compatible with major RSS readers
4. Keep readers updated with new content

### VIP Membership
The template includes a VIP membership system:
1. Generate member codes via `/admin/code`
2. Codes stored in `data/vip-codes.json`
3. Authentication required for VIP content access
4. 7-day authentication persistence

## Tech Stack

- [Next.js 14](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Create your environment variables:
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
pnpm dev
```

## Configuration

### Core Configuration Files
- `src/config/siteConfig.ts` - Site-wide settings
- `src/config/infoConfig.ts` - Personal information
- `data/vip-codes.json` - VIP member codes

### Content Management
- `src/content/blog/` - Public blog posts
- `src/content/vip-blog/` - VIP-only content

## Deployment

### Deploy on Vercel

Deploy using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo-name)

## License

MIT License - feel free to use this template for your own portfolio!

## Support

If you find this template helpful, please consider giving it a ⭐️ on GitHub!

## Feedback

If you encounter any issues or have suggestions, feel free to open an Issue or PR.
