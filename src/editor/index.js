import commentSVG from '@plone/volto/icons/comment.svg';
import { defineMessages, useIntl } from 'react-intl';

import { makeInlineElementPlugin } from '@plone/volto-slate/elementEditor';

import { LabelEditorSchema } from './schema';
import { withLabel, withBeforeInsertFragment } from './extensions';
import { LABEL } from '../constants';
import { LabelElement } from './render';

import './styles.less';

const messages = defineMessages({
  edit: {
    id: 'editLabel',
    defaultMessage: 'Edit label',
  },
  delete: {
    id: 'removeLabel',
    defaultMessage: 'Remove label',
  },
});

const SchemaProvider = ({ editSchema, children }) => {
  const intl = useIntl();
  return children(editSchema({ intl }));
};

export default function install(config) {
  const opts = {
    title: 'Label',
    pluginId: LABEL,
    elementType: LABEL,
    element: LabelElement,
    isInlineElement: true,
    schemaProvider: SchemaProvider,
    editSchema: LabelEditorSchema,
    extensions: [withLabel, withBeforeInsertFragment],
    hasValue: (formData) => !!formData,
    toolbarButtonIcon: commentSVG,
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
