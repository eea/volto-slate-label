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
    },
  },
  required: [''],
};
