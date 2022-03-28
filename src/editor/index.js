import mentainanceSVG from '@plone/volto/icons/maintenance.svg';
import { defineMessages } from 'react-intl'; // , defineMessages

import { makeInlineElementPlugin } from 'volto-slate/components/ElementEditor';

import { LabelEditorSchema } from './schema';
import { withLabel, withBeforeInsertFragment } from './extensions';
import { LABEL } from '../constants';
import { LabelElement } from './render';

import './styles.less';

const messages = defineMessages({
  edit: {
    id: 'Edit label',
    defaultMessage: 'Edit label',
  },
  delete: {
    id: 'Remove label',
    defaultMessage: 'Remove label',
  },
});

export default function install(config) {
  const opts = {
    title: 'Label',
    pluginId: LABEL,
    elementType: LABEL,
    element: LabelElement,
    isInlineElement: true,
    editSchema: LabelEditorSchema,
    extensions: [withLabel, withBeforeInsertFragment],
    hasValue: (formData) => !!formData.label_content,
    toolbarButtonIcon: mentainanceSVG,
    messages,
  };
  const [installLabelEditor] = makeInlineElementPlugin(opts);
  config = installLabelEditor(config);

  const { slate } = config.settings;

  slate.toolbarButtons = [...(slate.toolbarButtons || []), 'label'];
  slate.expandedToolbarButtons = [
    ...(slate.expandedToolbarButtons || []),
    'label',
  ];

  return config;
}
