export const LabelEditorSchema = {
  title: 'Add label',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['label_content', 'pointing', 'type'],
    },
  ],
  properties: {
    label_content: {
      title: 'Content',
      widget: 'text',
    },
    pointing: {
      title: 'Pointing',
      type: 'string',
      factory: 'Choice',
      choices: [
        ['left', 'left'],
        ['right', 'right'],
        ['below', 'below'],
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
    },
  },
  required: [''],
};
