/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: true,
      items: [
        'getting-started/about',
        'getting-started/what-is-a-site',
      ],
      link: {
        type: 'generated-index',
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
        'site-settings/site-settings-cronjobs',
        'site-settings/site-settings-fields',
        'site-settings/site-settings-marketplace',
        'site-settings/site-settings-solutions',

        {
          type: 'category',
          label: 'Actional buttons',
          collapsed: true,
          items: [
            'site-settings/actionable-buttons/ab-main-components',
            'site-settings/actionable-buttons/ab-items',
            'site-settings/actionable-buttons/ab-visibility',
            'site-settings/actionable-buttons/ab-actions',
            'site-settings/actionable-buttons/ab-outcome',
          ],
          link: {
            type: 'doc',
            id: 'site-settings/actionable-buttons/ab-intro-to-ab',
          },
        },
      ],
      link: {
        type: 'doc',
        id: 'site-settings/site-settings-introduction',
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
            'Modules/Settings/settings-general',
            'Modules/Settings/settings-dynamic-values',
            'Modules/Settings/settings-module-item-types',
            'Modules/Settings/settings-customfields',
            'Modules/Settings/settings-relations',
            'Modules/Settings/settings-documents',
            'Modules/Settings/settings-import',
            'Modules/Settings/settings-powersearch',
            'Modules/Settings/settings-tabs',
            'Modules/Settings/settings-trash',
            'Modules/Settings/settings-widgets',
            {
              type: 'category',
              label: 'Forms',
              collapsed: true,
              items: [
                'Modules/Settings/Forms/forms-main-components',
                'Modules/Settings/Forms/forms-Items',
                {
                  type: 'category',
                  label: 'Pages',
                  link: {
                    type: 'doc',
                    id: 'Modules/Settings/Forms/forms-pages',
                  },
                  items: [
                    'Modules/Settings/Forms/forms-pages-fields',
                    {
                      type: 'category',
                      label: 'Submit & Cancel',
                      link: {
                        type: 'doc',
                        id: 'Modules/Settings/Forms/forms-pages-submit&cancel',
                      },
                      items: [
                        'Modules/Settings/Forms/forms-pages-submit&cancel-triggers',
                      ],
                    },
                    'Modules/Settings/Forms/forms-endflow',
                  ],
                },
              ],
              link: {
                type: 'doc',
                id: 'Modules/Settings/Forms/forms-introduction',
              },
            },
          ],
        },
      ],
      link: {
        type: 'doc',
        id: 'Modules/modules-Intro-to-modules',
      },
    },
    {
      type: 'category',
      label: 'Apps',
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Intergrations',
          collapsed: true,
          items: [
            'apps/integrations/integrations-365-sync',
            'apps/integrations/integrations-optimo-route',
          ]
        },
        {
          type: 'category',
          label: 'Plugins',
          collapsed: true,
          items: [
            'apps/plugins/fields',
          ]
        },
        {
          type: 'category',
          label: 'Widget',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Common',
              collapsed: true,
              link: {
                type: 'doc',
                id: 'apps/widgets/common-properties',
              },
              items: [
                'apps/widgets/apps-asset-booking',
                'apps/widgets/apps-count',
                'apps/widgets/apps-sum',
                // number
                'apps/widgets/apps-table',
                'apps/widgets/apps-details',
                // image
                // iframe
                'apps/widgets/apps-maps',
                // audithistory
                // actionalbutton
                'apps/widgets/apps-chart',
                // note
                // comments
              ],
            },
            {
              type: 'category',
              label: 'Installed',
              collapsed: true,
              items: [
                // calendar
                'apps/widgets/apps-calendar-timeline',
                'apps/widgets/apps-files',
                'apps/widgets/apps-pos',
              ],
            },
          ],
        },
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
        'JSON/json-actions',
        'JSON/json-relations',
      ],
      link: {
        type: 'doc',
        id: 'JSON/json-intro-to-json',
      },
    },
    
  ],
};

export default sidebars;
