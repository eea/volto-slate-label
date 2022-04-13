export const LabelEditorSchema = {
  title: 'Add label',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['label_type', 'label_pointing'],
    },
    {
      id: 'tooltip',
      title: 'Tooltip',
      fields: [
        'tooltip_content',
        'tooltip_pointing',
        'tooltip_type',
        'always_show',
      ],
    },
  ],
  properties: {
    label_type: {
      title: 'Type',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['medium', 'Medium importance'],
        ['high', 'High importance'],
        ['highlight', 'Highlight'],
      ],
    },
    label_pointing: {
      title: 'Pointing',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['pointing', 'Up'],
        ['right pointing', 'Right'],
        ['left pointing', 'Left'],
        ['pointing below', 'Down'],
      ],
    },
    tooltip_content: {
      title: 'Content',
      widget: 'slate',
    },
    tooltip_pointing: {
      title: 'Position',
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
    tooltip_type: {
      title: 'Type',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['medium', 'Medium importance'],
        ['high', 'High importance'],
        ['highlight', 'Highlight'],
      ],
      default: '',
    },
    always_show: {
      title: 'Always show',
      description: 'Always show the content label tooltip',
      type: 'boolean',
    },
  },
  required: [],
};
