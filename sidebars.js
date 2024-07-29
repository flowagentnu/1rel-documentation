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
      label: 'Site settings',
      collapsed: true,
      items: [
        'site-settings/site-settings-general',
        'site-settings/site-settings-modules',
        'site-settings/site-settings-groups',
        'site-settings/site-settings-users',
      ],
      link: {
        type: 'doc',
        id: 'site-settings/site-settings-introduction',
      },
    },
    {
      type: 'category',
      label: 'Best practices',
      collapsed: true,
      items: [
        'best-practices/bs-customer-intro',
      ],
      link: {
        type: 'doc',
        id: 'best-practices/bp-introduction',
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
        {
          type: 'category',
          label: 'Pages',
          link: {
            type: 'doc',
            id: 'Forms/forms-pages',
          },
          items: [
            'Forms/forms-pages-fields',

            {
              type: 'category',
              label: 'Submit & Cancel',
              items: [
                'Forms/forms-pages-submit&cancel-triggers'
              ],
              link: {
                type: 'doc',
                id: 'Forms/forms-pages-submit&cancel',
              },
            },
            'Forms/forms-endflow'
          ]
        },
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
        'apps/widgets/apps-files',
      ],
      link: {
        type: 'doc',
        id: 'apps/apps-intro-to-apps',
      },
    },
    {
      type: 'category',
      label: 'JSON',
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
    {
      type: 'category',
      label: 'Knowledge Base',
      collapsed: true,
      items: [
        
        {
          type: 'category',
          label: 'Users and Permissions',
          items: [
            {
              type: 'category',
              label: 'Users',
              items: [
                'knowledge-base/knb-users-and-permssions/knb-users/knb-users-how-to-invite'
              ],
              link: {
              type: 'doc',
              id: 'knowledge-base/knb-users-and-permssions/knb-users/knb-introduction-to-users'
          }
            },
            {
              type: 'category',
              label: 'Permissions',
              items: [
                'knowledge-base/knb-users-and-permssions/knb-permissions/knb-permissions-how-to-create-group'
              ],
              link: {
              type: 'doc',
              id: 'knowledge-base/knb-users-and-permssions/knb-permissions/knb-introduction-to-permisisons'
          }
            }
          ],
            link: {
            type: 'doc',
            id: 'knowledge-base/knb-users-and-permssions/knb-introduction-to-users-and-permissions'
        }
      },
      {
        type: 'category',
        label: 'Modules',
        items: [
          'knowledge-base/knb-modules/knb-modules-how-to-create-a-module',
          'knowledge-base/knb-modules/knb-modules-how-to-create-a-module-item-type',
          'knowledge-base/knb-modules/knb-modules-how-to-archive-a-module-item-type',
          'knowledge-base/knb-modules/knb-modules-how-to-create-a-module-customfield',
          'knowledge-base/knb-modules/knb-modules-how-to-create-a-module-customfileld-options',
          'knowledge-base/knb-modules/knb-modules-how-to-archive-a-module-customfield',
          'knowledge-base/knb-modules/knb-modules-how-to-restore-a-module-customfield',
          'knowledge-base/knb-modules/kbn-modules-how-create-relations-between-modules',
          'knowledge-base/knb-modules/knb-modules-how-to-create-a-dynamic-value-for-customfields'
        ],
        link: {
        type: 'doc',
        id: 'knowledge-base/knb-modules/knb-modules-introduction-to-modules'
    }
    },
    {
      type: 'category',
      label: 'Site settings',
      items: [
        'knowledge-base/knb-site-settings/knb-site-settings-how-to-create-a-custom-fieldtype'
      ],
      link: {
      type: 'doc',
      id: 'knowledge-base/knb-site-settings/knb-introduction-to-site-settings'
  }
  },
  {
    type: 'category',
    label: 'Actional buttons',
    items: [
      'knowledge-base/knb-actional-buttons/knb-modules-introduction-to-actional-buttons'
    ],
    link: {
    type: 'doc',
    id: 'knowledge-base/knb-actional-buttons/knb-modules-introduction-to-actional-buttons'
}
}
      ],
       link: {
        type: 'doc',
        id: 'knowledge-base/knb-intro'
      }
    }
  ],
};

export default sidebars;
