module.exports = {
    title: 'gojs文档',
    description: 'Hello, my friend!',
    themeConfig: {
        // 顶部导航
        nav: [
            { text: '主页', link: '/' },
            { text: '概念', link: '/guide/' },
            { text: '文档API', link: '/API/' },
            // {
            //     text: 'Languages',
            //     items: [
            //         { text: 'Chinese', link: '/language/chinese' },
            //         { text: 'English', link: '/language/english' }
            //     ]
            // },
            // { text: 'External', link: 'https://www.baidu.com' },
        ],
        sidebar: 'auto',
        sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
        displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
        activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题
    },
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,

}
