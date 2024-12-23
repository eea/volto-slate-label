export const LabelEditorSchema = {
  title: 'Add label',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['label_theme'],
    },
    {
      id: 'tooltip',
      title: 'Tooltip',
      fields: ['tooltip_content', 'show_on_hover'],
    },
  ],
  properties: {
    label_theme: {
      title: 'Label Theme',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['dark', 'Dark theme'],
        ['light', 'Light theme'],
      ],
      default: 'dark',
      description: 'Choose a theme or leave the default value (dark).',
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
