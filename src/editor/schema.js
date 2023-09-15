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
      title: 'Type of label',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['simple', 'Simple'],
        ['medium', 'Medium importance'],
        ['high', 'High importance'],
        ['highlight', 'Highlight'],
      ],
      default: 'simple',
      description: 'Choose a type or leave the default value (Simple).',
      required: true,
      noValueOption: false,
    },
    label_pointing: {
      title: 'Label pointing',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['pointing', 'Up'],
        ['right pointing', 'Right'],
        ['left pointing', 'Left'],
        ['pointing below', 'Down'],
      ],
      description:
        'Choose an orientation or leave the default value (No value).',
    },
    tooltip_content: {
      title: 'Tooltip content',
      widget: 'slate',
      description: 'Enter the text you want to display in the tooltip.',
    },
    tooltip_pointing: {
      title: 'Tooltip position',
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
      title: 'Tooltip type',
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
      title: 'Always show tooltip',
      description: 'Always show the content label tooltip.',
      type: 'boolean',
    },
  },
  required: [],
};
