// personal info
export const name = 'Ivan'
export const headline = 'SEO玩家、出海淘金者、独立开发者、全栈工程师。'
export const introduction = '我是Ivan，一名专注于全球化网站开发的独立开发者。通过SEO优化和技术创新，我帮助产品快速获得海外流量，实现盈利变现。目前维护着多个出海项目，月收入已突破万刀。'
export const email = 'yanzisu815@gmail.com'
export const githubUsername = '15207126400'

// about page
export const aboutMeHeadline = "Hi，我是Ivan，一名技术派的出海淘金者。"
export const aboutParagraphs = [
  "作为一名全栈工程师，我深谙技术驱动业务增长的真谛。我专注于开发面向全球市场的网站和应用，通过SEO优化和产品打磨，帮助项目获得持续增长的自然流量。",
  "在技术领域，我精通前后端开发、SEO优化、服务器架构等全栈技能。但我的价值不仅限于此 - 我更懂得如何将技术转化为实际收益。通过多个成功的出海项目实践，我摸索出了一套适合个人开发者的'技术变现'方法论。",
  "目前，我正在打造面向中国开发者的出海赚钱指南。这不是空谈的课程，而是基于我亲身经历和实战经验的分享。如果你也想通过技术实现财务自由，欢迎加入我的VIP专栏。"
]

// projects
export const projectHeadLine = "产品栏目"
export const projectIntro = "这些都是我亲手打造的盈利项目。从0到1，从构思到盈利，我会在VIP专栏中详细拆解每个项目的成功要素。"

// blog
export const blogHeadLine = "出海博客"
export const blogIntro = "分享独立开发、出海淘金日常，谈谈人生，讲讲理想"

// VIP专栏介绍
export const vipHeadLine = "VIP订阅专栏"
export const vipIntro = "这里是VIP会员专享的深度内容，提供最新的SEO优化工具和变现教程。助你少走弯路，节省大笔费用，实现快速盈利。"

// changelog
export const changelogHeadLine = "里程碑"
export const changelogIntro = "记录每一个值得纪念的时刻，见证项目的成长与突破。"

// friends
export const friendsHeadLine = "友情链接"
export const friendsIntro = "认识一些有趣的独立开发者朋友。"

// feed
export const feedHeadLine = "订阅我的博客"
export const feedIntro = "欢迎订阅我的博客，获取最新文章更新"
export const feedBtn = "订阅"

// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'WeChat',
    icon: 'wechat',
    href: '/ivan-qrcode'
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/yanzisu815'
  },
  {
    name: 'Appreciate',
    icon: 'coffee',
    href: '/appreciate'
  }
]

// education 
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

// corp
export const careerList: Array<CareerItemType> = [
  {
    company: '不方便透露',
    title: '软件工程师',
    logo: 'bank',
    start: '2018',
    end: '2024'
  },
]

// school
export const educationList: Array<EducationItemType> = [
  {
    school: '武汉理工大学',
    major: '计算机科学与技术',
    logo: 'college',
    start: '2014',
    end: '2018'
  },
]

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: 'PicMagix',
    description:
      '一款强大的AI图片分析工具，支持场景识别、颜色提取、标签分类等。还能自定义社交模板和分析报告',
    link: { href: 'picmagix.com', label: 'AI-Powered Image Analysis' },
    logo: '/images/icon/picmagix.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['ai', 'image', 'analysis']
  },
  {
    name: 'Squid Game Thanos',
    description:
      '一款基于《鱿鱼游戏》和灭霸改编的生存游戏，支持多语言。玩家需要在限定时间内完成任务，体验紧张刺激的游戏氛围',
    link: { href: 'sgthanos.com', label: 'Squid Game Thanos' },
    logo: '/images/icon/sgthanos.svg',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['game', 'thanos', 'squid game']
  },
  {
    name: 'Be Guess',
    description:
      '一站式开发者工具箱，集成国际化、数据格式转换、编码解码等实用功能，让开发工作更高效便捷',
    link: { href: 'beguess.com', label: 'BeGuess' },
    logo: '/images/icon/beguess.png',
    category: ['Website'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['i18n', 'json', 'yaml', 'base64', 'tools']
  },
  {
    name: 'Wordle Like Games',
    description:
      '一款灵感源自纽约时报的单词猜谜游戏，支持多种难度选择，让你在趣味竞猜中轻松提升词汇量。',
    link: { href: 'fourwordgame.com', label: 'Wordle Like Games' },
    logo: '/images/icon/fourwordgame.png',
    category: ['Website'],
    techStack: ['vue3', 'tailwindcss'],
    tags: ['game', 'wordle', 'four word']
  }
]

// Open Source Projects
export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'saas-base-template',
    description: '一个功能完整的SaaS产品启动模板，内置18种语言支持，助您快速构建国际化应用',
    link: { href: 'github.com/15207126400/saas-base-template', label: 'saas-base-template on GitHub' },
    gitStars: 1,
    gitForks: 1
  },
  {
    name: 'ivan-volt',
    description: '本博客站源码，基于Next.js构建，支持专栏订阅、主题切换等功能',
    link: { href: 'github.com/15207126400/ivan-volt', label: 'ivan-volt on GitHub' },
    gitStars: 1,
    gitForks: 1
  },
  {
    name: 'ivan-wallpaper-wechat',
    description: '精选壁纸小程序，画面精美，交互流畅，不包含服务端源码',
    link: { href: 'github.com/15207126400/ivan-wallpaper-wechat', label: 'wallpaper wechat' },
    gitStars: 2,
    gitForks: 1
  }
]

// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2024-10-18',
    content: [
      {
        title: '💡 想法产生',
        description: '我想要一个个人站点。这个网站不需要太花哨，但应该有一个好的设计。它需要展示我的作品，并有一个博客部分来分享我的想法和经验。'
      },
    ]
  },
  {
    date: '2024-10-30',
    content: [
      {
        title: '🛫 项目部署',
        description: '我的作品集网站第一个版本完成构建并部署'
      },
    ]
  },
  {
    date: '2024-11-18',
    content: [
      {
        title: '👭 添加朋友页面',
        description: '添加朋友页面来列出我的朋友'
      },
    ]
  },
  {
    date: '2024-11-20',
    content: [
      {
        title: '🌿 开源',
        description: '开源我的作品集网站'
      },
    ]
  },
  {
    date: '2024-12-04',
    content: [
      {
        title: '📖 发表博客',
        description: '发表我的第一篇博客'
      },
    ]
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];

// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'SocksTack',
    link: { href: 'https://sockstack.cn/' },
    logo: '/images/firends/sockstack.ico'
  },
  {
    name: 'CoreyChiu',
    link: { href: 'https://coreychiu.com' },
    logo: '/images/firends/coreychiu.jpg'
  },
  {
    name: 'Chuhailema',
    link: { href: 'https://chuhailema.com' },
    logo: '/images/firends/chuhailema.png'
  }
]


