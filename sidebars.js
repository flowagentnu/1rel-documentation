/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'New to 1Relation/welcome-to-documentation',
    {
      type: 'category',
      label: 'New to 1Relation',
      collapsed: true,
      items: [
        'New to 1Relation/new-to-what-is-a-site',
      ],
      link: {
        type: 'doc',
        id: 'New to 1Relation/new-to-what-is-1relation',
      },
    },
    {
      type: 'category',
      label: 'Modules',
      collapsed: true,
      items: [
        'Modules/modules-how-to-create-a-module',
        'Modules/modules-how-to-delete-a-module',
      ],
      link: {
        type: 'doc',
        id: 'Modules/modules-Intro-to-modules',
      },
    },
    {
      type: 'category',
      label: 'Items',
      collapsed: true,
      items: [
        'Items/items-how-to-create-an-item',
        'Items/items-how-to-edit-an-item',
        'Items/items-how-to-delete-an-item',
      ],
      link: {
        type: 'doc',
        id: 'Items/items-intro-to-items',
      },
    },
    {
      type: 'category',
      label: 'Forms',
      collapsed: true,
      items: ['Forms/forms-Items',
      'Forms/forms-pages',
      'Forms/forms-pages-fields',
      `Forms/forms-pages-submit&cancel`,
      `Forms/forms-pages-submit&cancel-triggers`,
      'Forms/forms-endflow',

],
      link: {
        type: 'doc',
        id: 'Forms/forms-introduction',
      },
    },
    {
      type: 'category',
      label: 'Apps',
      collapsed: true,
      items: [
        'apps/apps-install-apps',
      ],
      link: {
        type: 'doc',
        id: 'apps/apps-intro-to-apps',
      },
    },
    {
      type: 'category',
      label: 'Jay-Sawn',
      collapsed: true,
      items: [
        'JSON/json-query',
      ],
      link: {
        type: 'doc',
        id: 'JSON/json-intro-to-json', 
      },
    },
  ],
};

export default sidebars;
