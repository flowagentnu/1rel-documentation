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
    'New to 1Relation/Start here',
    {
      type: 'category',
      label: 'Forms',
      collapsed: true,
      items: ['Forms/Pages', 'Forms/Items'],
      link: { type: 'doc', id: 'Forms/Intro to Forms' },
    },
    {
      type: 'category',
      label: 'Forms',
      collapsed: true,
      items: [
        'Forms/Intro to Forms', 
        'Forms/Items',
        {
          type: 'category',
          label: 'Forms',
          collapsed: true,
          items: ['Forms/Pages', 'Forms/Items'],
          link: { type: 'doc', id: 'Forms/Intro to Forms' },
        },
      ],
      link: { 
        type: 'generated-index',
        title: 'Forms',
      },
    }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
