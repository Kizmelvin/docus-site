import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docus-site/__docusaurus/debug',
    component: ComponentCreator('/docus-site/__docusaurus/debug', '83d'),
    exact: true
  },
  {
    path: '/docus-site/__docusaurus/debug/config',
    component: ComponentCreator('/docus-site/__docusaurus/debug/config', 'ba5'),
    exact: true
  },
  {
    path: '/docus-site/__docusaurus/debug/content',
    component: ComponentCreator('/docus-site/__docusaurus/debug/content', '60b'),
    exact: true
  },
  {
    path: '/docus-site/__docusaurus/debug/globalData',
    component: ComponentCreator('/docus-site/__docusaurus/debug/globalData', '40f'),
    exact: true
  },
  {
    path: '/docus-site/__docusaurus/debug/metadata',
    component: ComponentCreator('/docus-site/__docusaurus/debug/metadata', '673'),
    exact: true
  },
  {
    path: '/docus-site/__docusaurus/debug/registry',
    component: ComponentCreator('/docus-site/__docusaurus/debug/registry', '17b'),
    exact: true
  },
  {
    path: '/docus-site/__docusaurus/debug/routes',
    component: ComponentCreator('/docus-site/__docusaurus/debug/routes', '6dd'),
    exact: true
  },
  {
    path: '/docus-site/blog',
    component: ComponentCreator('/docus-site/blog', '4eb'),
    exact: true
  },
  {
    path: '/docus-site/markdown-page',
    component: ComponentCreator('/docus-site/markdown-page', '88f'),
    exact: true
  },
  {
    path: '/docus-site/',
    component: ComponentCreator('/docus-site/', '91c'),
    routes: [
      {
        path: '/docus-site/',
        component: ComponentCreator('/docus-site/', '17d'),
        routes: [
          {
            path: '/docus-site/',
            component: ComponentCreator('/docus-site/', '561'),
            routes: [
              {
                path: '/docus-site/api-reference',
                component: ComponentCreator('/docus-site/api-reference', 'cea'),
                exact: true,
                sidebar: "referenceSidebar"
              },
              {
                path: '/docus-site/tutorial',
                component: ComponentCreator('/docus-site/tutorial', '593'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docus-site/',
                component: ComponentCreator('/docus-site/', '7e6'),
                exact: true,
                sidebar: "overviewSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
