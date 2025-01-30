import { defineMessages } from 'react-intl';

const messages = defineMessages({
  LabelType: {
    id: 'LabelType',
    defaultMessage: 'Type of label',
  },
});

export const LabelEditorSchema = ({ intl }) => {
  return {
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
          'tooltip_size',
          'always_show',
          'show_on_hover',
        ],
      },
    ],
    properties: {
      label_type: {
        title: intl.formatMessage(messages.LabelType),
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
      tooltip_size: {
        title: 'Tooltip size',
        type: 'string',
        factory: 'Choice',
        choices: [
          ['wide', 'Wide'],
          ['extra', 'Extra wide'],
        ],
        default: '',
      },
      always_show: {
        title: 'Always show tooltip',
        description: 'Always show the content label tooltip.',
        type: 'boolean',
      },
      show_on_hover: {
        title: 'Show tooltip on hover',
        description: 'Show the content label tooltip on hover.',
        type: 'boolean',
      },
    },
    required: [],
  };
};
