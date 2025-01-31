import { defineMessages } from 'react-intl';

const messages = defineMessages({
  addLabel: {
    id: 'addLabel',
    defaultMessage: 'Add label',
  },
  labelType: {
    id: 'labelType',
    defaultMessage: 'Type of label',
  },
  tooltip: {
    id: 'tooltip',
    defaultMessage: 'Tooltip',
  },
  tooltipContent: {
    id: 'tooltipContent',
    defaultMessage: 'Tooltip content',
  },
  tooltipContentDescription: {
    id: 'tooltipContentDescription',
    defaultMessage: 'Enter the text you want to display in the tooltip.',
  },
  simple: {
    id: 'simple',
    defaultMessage: 'Simple',
  },
  mediumImportance: {
    id: 'mediumImportance',
    defaultMessage: 'Medium importance',
  },
  highImportance: {
    id: 'highImportance',
    defaultMessage: 'High importance',
  },
  highlight: {
    id: 'highlight',
    defaultMessage: 'Highlight',
  },
  labelTypeDescription: {
    id: 'labelTypeDescription',
    defaultMessage: 'Choose a type or leave the default value (Simple).',
  },
  labelPointing: {
    id: 'labelPointing',
    defaultMessage: 'Label pointing',
  },
  labelPointingDescription: {
    id: 'labelPointingDescription',
    defaultMessage:
      'Choose an orientation or leave the default value (No value).',
  },
  up: {
    id: 'up',
    defaultMessage: 'Up',
  },
  right: {
    id: 'right',
    defaultMessage: 'Right',
  },
  left: {
    id: 'left',
    defaultMessage: 'Left',
  },
  down: {
    id: 'down',
    defaultMessage: 'Down',
  },
  tooltipPointingTitle: {
    id: 'tooltipPointingTitle',
    defaultMessage: 'Tooltip position',
  },
  tooltipPointingTopCenter: {
    id: 'tooltipPointingTopCenter',
    defaultMessage: 'Top center',
  },
  tooltipPointingTopLeft: {
    id: 'tooltipPointingTopLeft',
    defaultMessage: 'Top left',
  },
  tooltipPointingTopRight: {
    id: 'tooltipPointingTopRight',
    defaultMessage: 'Top right',
  },
  tooltipPointingBottomCenter: {
    id: 'tooltipPointingBottomCenter',
    defaultMessage: 'Bottom center',
  },
  tooltipPointingBottomLeft: {
    id: 'tooltipPointingBottomLeft',
    defaultMessage: 'Bottom left',
  },
  tooltipPointingBottomRight: {
    id: 'tooltipPointingBottomRight',
    defaultMessage: 'Bottom right',
  },
  tooltipPointingRightCenter: {
    id: 'tooltipPointingRightCenter',
    defaultMessage: 'Right center',
  },
  tooltipPointingLeftCenter: {
    id: 'tooltipPointingLeftCenter',
    defaultMessage: 'Left center',
  },
  tooltipTypeTitle: {
    id: 'tooltipTypeTitle',
    defaultMessage: 'Tooltip type',
  },
  tooltipSizeTitle: {
    id: 'tooltipSizeTitle',
    defaultMessage: 'Tooltip size',
  },
  wide: {
    id: 'wide',
    defaultMessage: 'Wide',
  },
  extraWide: {
    id: 'extraWide',
    defaultMessage: 'Extra wide',
  },
  alwaysShowTitle: {
    id: 'alwaysShowTitle',
    defaultMessage: 'Always show tooltip',
  },
  alwaysShowDescription: {
    id: 'alwaysShowDescription',
    defaultMessage: 'Always show the content label tooltip.',
  },
  showOnHoverTitle: {
    id: 'showOnHoverTitle',
    defaultMessage: 'Show tooltip on hover',
  },
  showOnHoverDescription: {
    id: 'showOnHoverDescription',
    defaultMessage: 'Show the content label tooltip on hover.',
  },
});

export const LabelEditorSchema = ({ intl }) => {
  return {
    title: intl.formatMessage(messages.addLabel),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['label_type', 'label_pointing'],
      },
      {
        id: 'tooltip',
        title: intl.formatMessage(messages.tooltip),
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
        title: intl.formatMessage(messages.labelType),
        type: 'string',
        factory: 'Choice',
        choices: [
          ['simple', intl.formatMessage(messages.simple)],
          ['medium', intl.formatMessage(messages.mediumImportance)],
          ['high', intl.formatMessage(messages.highImportance)],
          ['highlight', intl.formatMessage(messages.highlight)],
        ],
        default: 'simple',
        description: intl.formatMessage(messages.labelTypeDescription),
        required: true,
        noValueOption: false,
      },
      label_pointing: {
        title: intl.formatMessage(messages.labelPointing),
        type: 'string',
        factory: 'Choice',
        choices: [
          ['pointing', intl.formatMessage(messages.up)],
          ['right pointing', intl.formatMessage(messages.right)],
          ['left pointing', intl.formatMessage(messages.left)],
          ['pointing below', intl.formatMessage(messages.down)],
        ],
        description: intl.formatMessage(messages.labelPointingDescription),
      },
      tooltip_content: {
        title: intl.formatMessage(messages.tooltipContent),
        widget: 'slate',
        description: intl.formatMessage(messages.tooltipContentDescription),
      },
      tooltip_pointing: {
        title: intl.formatMessage(messages.tooltipPointingTitle),
        type: 'string',
        factory: 'Choice',
        choices: [
          ['top center', intl.formatMessage(messages.tooltipPointingTopCenter)],
          ['top left', intl.formatMessage(messages.tooltipPointingTopLeft)],
          ['top right', intl.formatMessage(messages.tooltipPointingTopRight)],
          [
            'bottom center',
            intl.formatMessage(messages.tooltipPointingBottomCenter),
          ],
          [
            'bottom left',
            intl.formatMessage(messages.tooltipPointingBottomLeft),
          ],
          [
            'bottom right',
            intl.formatMessage(messages.tooltipPointingBottomRight),
          ],
          [
            'right center',
            intl.formatMessage(messages.tooltipPointingRightCenter),
          ],
          [
            'left center',
            intl.formatMessage(messages.tooltipPointingLeftCenter),
          ],
        ],
      },
      tooltip_type: {
        title: intl.formatMessage(messages.tooltipTypeTitle),
        type: 'string',
        factory: 'Choice',
        choices: [
          ['medium', intl.formatMessage(messages.mediumImportance)],
          ['high', intl.formatMessage(messages.highImportance)],
          ['highlight', intl.formatMessage(messages.highlight)],
        ],
        default: '',
      },
      tooltip_size: {
        title: intl.formatMessage(messages.tooltipSizeTitle),
        type: 'string',
        factory: 'Choice',
        choices: [
          ['wide', intl.formatMessage(messages.wide)],
          ['extra', intl.formatMessage(messages.extraWide)],
        ],
        default: '',
      },
      always_show: {
        title: intl.formatMessage(messages.alwaysShowTitle),
        description: intl.formatMessage(messages.alwaysShowDescription),
        type: 'boolean',
      },
      show_on_hover: {
        title: intl.formatMessage(messages.showOnHoverTitle),
        description: intl.formatMessage(messages.showOnHoverDescription),
        type: 'boolean',
      },
    },
    required: [],
  };
};
