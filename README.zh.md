# Ivan 个人网站模板

一个现代化的个人网站模板，集成了会员专栏功能。由 [Ivan](https://coreychiu.com) 开发。

## 特性

### 核心功能
- 🎨 使用 TailwindCSS 和 Shadcn/UI 的现代化界面
- 🌓 明暗主题切换
- 📱 完全响应式设计
- 🚀 基于 Next.js 14 App Router 构建
- 💻 技术栈展示墙
- 📊 多平台数据分析支持
- 🔍 SEO 优化

### 博客系统
- 📝 支持 MDX 富文本内容
- 🔐 会员专栏系统
  - 会员码生成
  - 内容访问控制
  - 基于 Cookie 的身份验证
- 📰 RSS 订阅支持
- 🎯 分类管理

### 开发体验
- 🎯 TypeScript 类型安全
- 📦 使用 PNPM 实现快速、节省空间的包管理
- 🔧 简单的配置
- 📱 移动优先的开发理念


## 亮点

### RSS 订阅
本模板支持 RSS 订阅功能：
1. 通过 `/feed` 访问 RSS 源
2. 自动生成最新博客文章的 Feed
3. 支持主流 RSS 阅读器订阅
4. 方便读者及时获取更新

### 会员专栏
本模板集成了会员专栏功能：
1. 通过 `/admin/code` 生成会员码
2. 会员码存储在 `data/vip-codes.json` 中
3. 访问会员文章时需要验证会员码
4. 验证通过后 7 天内无需重复验证

## 技术栈

- [Next.js 14](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [MDX](https://mdxjs.com/)

## 快速开始

1. 克隆仓库：
```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. 安装依赖：
```bash
pnpm install
```

3. 创建环境变量：
```bash
cp .env.example .env.local
```

4. 启动开发服务器：
```bash
pnpm dev
```

## 配置说明

### 核心配置文件
- `src/config/siteConfig.ts` - 网站配置
- `src/config/infoConfig.ts` - 个人信息配置
- `data/vip-codes.json` - 会员码管理

### 内容管理
- `src/content/blog/` - 公开博客文章
- `src/content/vip-blog/` - 会员专享内容

## 部署

### Vercel 部署

使用 [Vercel](https://vercel.com) 一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo-name)

## 开源协议

MIT 协议 - 欢迎使用此模板构建你的个人网站！

## 支持

如果这个模板对你有帮助，欢迎给个 ⭐️！

## 问题反馈

如果你在使用过程中遇到任何问题，欢迎提 Issue 或 PR。 