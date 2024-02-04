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
        {
          type: 'category',
          label: 'Settings',
          link: {
            type: 'generated-index',
            title: 'Module Settings',
            slug: 'modules/settings',
          },
          items: [
            'Modules/Settings/settings-dynamic-values',
            'Modules/Settings/settings-module-item-types',
            'Modules/Settings/settings-customfields',
            'Modules/Settings/settings-relations',
          ],
        },
      ],
      link: {
        type: 'doc',
        id: 'Modules/modules-Intro-to-modules',
      },
    },
//    {
//      type: 'category',
//      label: 'Items',
//      collapsed: true,
//      items: [
//        'Items/items-how-to-create-an-item',
//        'Items/items-how-to-edit-an-item',
//        'Items/items-how-to-delete-an-item',
//      ],
//      link: {
//        type: 'doc',
//        id: 'Items/items-intro-to-items',
//      },
//    },
    {
      type: 'category',
      label: 'Actionable buttons',
      collapsed: true,
      items: [
        'actionable-buttons/ab-main-components',
        'actionable-buttons/ab-items',
        'actionable-buttons/ab-visibility',
        'actionable-buttons/ab-actions',
        'actionable-buttons/ab-outcome',
      ],
      link: {
        type: 'doc',
        id: 'actionable-buttons/ab-intro-to-ab', 
      },
    },
    {
      type: 'category',
      label: 'Forms',
      collapsed: true,
      items: [
      'Forms/forms-main-components',
      'Forms/forms-Items',
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
        'apps/widgets/apps-table',
        'apps/widgets/apps-details',
        'apps/integrations/integrations-365-sync',
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
        'JSON/json-actions'
      ],
      link: {
        type: 'doc',
        id: 'JSON/json-intro-to-json', 
      },
    },
  ],
};

export default sidebars;
