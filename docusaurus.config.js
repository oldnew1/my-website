// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '我的文档',
  tagline: '笔记记录',
  favicon: 'img/favicon.ico',
 
  // Set the production url of your site here
 // url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //baseUrl: '/',
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-live-codeblock','@docusaurus/theme-mermaid'], 
  
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'facebook', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.
 
 
  url: 'http://62.234.30.27', // 不要加尾部斜杠！
  baseUrl: '/', // 必须带头尾斜杠（你的 repo 名）
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
 
  
  // GitHub pages deployment config.
  organizationName: 'oldnew1', // 你的 GitHub 用户名
  projectName: 'my-website',   // 你的仓库名（而不是 github.io）
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
    // 使用 GitHub Pages 部署插件
    plugins: [
      '@docusaurus/plugin-pwa',
    
      // 添加 ddocs 文档插件
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'qtdocs', // 唯一ID，和 sidebar/nav 要对应
          path: 'qtdocs', // 文件夹路径，相对于根目录
          routeBasePath: 'qtdocs', // URL 路径，例如 http://localhost:3000/ddocs
          sidebarPath: require.resolve('./sidebars-qtdocs.js'),
        },
      ],
    ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        
        
        blog: {
          
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
        },
 

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  
  ],
 
 
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '首页',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '工作笔记',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'qtdocs',
            sidebarId: 'qtdocsSidebar',
            position: 'left',
            label: '其他笔记',
          },
          {
            href: 'https://github.com/oldnew1/my-website.git',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right', // 表示在右侧显示
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title:"测试用的",
            items:[
              {
                label: '测试1',
                to: '/docs/intro',
              },
            ]
          },
          {
            title: '文档',
            items: [
              {
                label: '工作笔记',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'X',
          //       href: 'https://x.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: '代码地址',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/oldnew1/my-website.git',
              },
            ],
          },
        ],
         
 
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        magicComments: [
            {
              className: 'theme-code-block-highlighted-line',
              line: 'highlight-next-line',
              block: {start: 'highlight-start', end: 'highlight-end'},
            },
            {
              className: 'code-block-error-line',
              line: '高亮注释',
            },
        ],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
    }),
};

export default config;
