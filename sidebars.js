/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: true,
      items: [
        'getting-started/structure',
        'getting-started/configuration',
        'getting-started/documentation',
      ],
      link: {
        type: 'generated-index',
      },
    },
    {
      type: 'category',
      label: 'Sites',
      collapsed: true,
      items: [
        'sites/general',
        'sites/users',
        'sites/groups',
        'sites/organisations',
        'sites/modules',
        {
          type: 'category',
          label: 'Actional Buttons',
          collapsed: true,
          items: [
            'sites/actionalbuttons/introduction',
            'sites/actionalbuttons/how-to-use',
            {
              type: 'category',
              label: 'Components',
              link: {
                type: 'doc',
                id: 'sites/actionalbuttons/components/components'
              },
              items: [
                'sites/actionalbuttons/components/items',
                'sites/actionalbuttons/components/visibility',
                'sites/actionalbuttons/components/actions',
                'sites/actionalbuttons/components/outcome'
              ]
            }
          ],
          link: {
            type: 'doc',
            id: 'sites/actionalbuttons/introduction',
          },
        },
        'sites/marketplace',
        'sites/automations',
        'sites/solutions',
      ],
      link: {
        type: 'generated-index'
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
        {
          type: 'category',
          label: 'Resource Planning',
          items: [
            'apps/resourceplanning/introduction',
            'apps/resourceplanning/configuration'
          ],
        },
        {
          type: 'category',
          label: 'Price Group',
          items: [
            'apps/pricegroup/introduction',
            'apps/pricegroup/configuration'
          ]
        }
      ],
      link: {
        type: 'doc',
        id: 'apps/intro-to-apps',
      },
    },
    {
      type: 'category',
      label: 'JSON',
      collapsed: true,
      items: [
        'JSON/json-query',
        {
          type: 'category',
          label: 'JSON Actions',
          collapsed: true,
          items: [
            'JSON/actions-crud',
            'JSON/actions-open-location',
            'JSON/actions-send-email',
            'JSON/actions-send-toast',
            'JSON/actions-show-form',
            'JSON/actions-show-relevant-forms',
            'JSON/actions-webhook',
          ],
          link: {
            type: 'doc',
            id: 'JSON/json-actions',
          },
        },
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
