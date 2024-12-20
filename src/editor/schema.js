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
      fields: ['tooltip_content', 'show_on_hover'],
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
    tooltip_content: {
      title: 'Tooltip content',
      widget: 'slate',
      description: 'Enter the text you want to display in the tooltip.',
    },
    show_on_hover: {
      title: 'Show tooltip on hover',
      description: 'Show the content label tooltip on hover.',
      type: 'boolean',
    },
  },
  required: [],
};
