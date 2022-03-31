export const LabelEditorSchema = {
  title: 'Add label',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['label_type'],
    },
    {
      id: 'tooltip',
      title: 'Tooltip',
      fields: ['tooltip_content', 'pointing', 'type', 'always_show'],
    },
  ],
  properties: {
    tooltip_content: {
      title: 'Content',
      widget: 'slate',
    },
    pointing: {
      title: 'Pointing',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['top center', 'top center'],
        ['top left', 'top left'],
        ['top right', 'top right'],
        ['bottom center', 'bottom center'],
        ['bottom left', 'bottom left'],
        ['bottom right', 'bottom right'],
        ['right center', 'right center'],
        ['left center', 'left center'],
      ],
    },
    type: {
      title: 'Type',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['medium', 'medium'],
        ['high', 'high'],
        ['highlight', 'highlight'],
      ],
      default: ['highlight', 'highlight'],
    },
    label_type: {
      title: 'Type',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['medium', 'medium'],
        ['high', 'high'],
        ['highlight', 'highlight'],
      ],
    },
    always_show: {
      title: 'Always show',
      description: 'Always show the content label tooltip',
      type: 'boolean',
    },
  },
  required: [],
};
