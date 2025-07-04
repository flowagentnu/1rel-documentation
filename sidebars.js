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
      label: 'Modules',
      collapsed: true,
      items: [
        'modules/general',
        'modules/customfields',
        'modules/module-item-types',
        'modules/relations',
        'modules/tabs',
        {
          type: 'category',
          label: 'Widgets',
          collapsed: true,
          items: [
            'modules/widgets/common-properties',
            'modules/widgets/count',
            'modules/widgets/sum',
            'modules/widgets/table',
            'modules/widgets/details',
            'modules/widgets/maps',
            'modules/widgets/chart',
            'modules/widgets/calendar-timeline',
            'modules/widgets/files',
          ]
        },
        'modules/documents',
        {
          type: 'category',
          label: 'Forms',
          collapsed: true,
          items: [
            'modules/forms/forms-main-components',
            'modules/forms/forms-visibility',
            'modules/forms/forms-items',
            {
              type: 'category',
              label: 'Pages',
              link: {
                type: 'doc',
                id: 'modules/forms/forms-pages',
              },
              items: [
                'modules/forms/forms-pages-fields',
                {
                  type: 'category',
                  label: 'Submit & Cancel',
                  link: {
                    type: 'doc',
                    id: 'modules/forms/forms-pages-submit-cancel',
                  },
                  items: [
                    'modules/forms/forms-pages-submit-cancel-triggers',
                  ],
                },
                'modules/forms/forms-endflow',
              ],
            },
          ],
          link: {
            type: 'doc',
            id: 'modules/forms/forms-introduction',
          },
        },
        'modules/import',
        'modules/powersearch',
        'modules/dynamic-values',
        'modules/trash',
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
            'JSON/actions-note',
            'JSON/actions-files',
            'JSON/actions-item-image',
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
    {
      'type': 'category',
      'label': 'Miscellaneous',
      'collapsed': true,
      items: [
        'misc/languages',
        'misc/replaceables',
        'misc/conditionals',
        'misc/economic-setup',
      ],
      link: {
        type: 'generated-index'
      },
    }
  ],
};

export default sidebars;
