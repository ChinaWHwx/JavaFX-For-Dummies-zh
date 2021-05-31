module.exports = {
  base: "/JavaFX-For-Dummies-zh/",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  title: 'JavaFX For Dummies',
  description: '《JavaFX For Dummies》中文版',
  // 主题配置
  themeConfig: {
    logo: '/favicon.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '购买本书', link: 'https://www.amazon.com/JavaFX-Dummies-Doug-Lowe/dp/1118385349' },
    ],
    // 仓库相关
    repo: 'Angus-Liu/JavaFX-For-Dummies-zh',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '翻译有错？帮助改进:)',
    // 侧边栏配置
    sidebar: [
      '/Introduction',
      '/Part-1',
      '/Chapter-1',
      '/Chapter-2',
      '/Chapter-3',
      '/Chapter-4',
      '/Chapter-5',
      '/Chapter-6',
      '/Part-2',
      '/Chapter-7',
      '/Chapter-8',
      // '/Chapter-9',
      '/Chapter-10',
      '/Part-3',
      '/Chapter-11',
      '/Chapter-12',
      '/About-the-Author',
    ]
  },
  // markdown 配置
  markdown: {
    // lineNumbers: true
  }
}
