import React from 'react';
import { Popup } from 'semantic-ui-react';
import cx from 'classnames';
import {
  serializeNodes,
  serializeNodesToText,
} from '@plone/volto-slate/editor/render';

const LabelWrapper = (props) => {
  const { attributes, children, element } = props;
  const { data = {} } = element;
  const { uid, show_on_hover, tooltip_content } = data;
  console.log('here data', data);

  const isTooltipText =
    tooltip_content && serializeNodesToText(tooltip_content).trim().length > 0;

  return isTooltipText ? (
    <Popup
      on={show_on_hover ? 'hover' : 'click'}
      trigger={
        <span
          id={`label_ref-${uid}`}
          {...attributes}
          className="label-node with-popup"
        >
          {children}
        </span>
      }
      className={
        data.label_theme === 'dark' ? 'label-wrapper-dark' : 'label-wrapper'
      }
    >
      {serializeNodes(tooltip_content)}
    </Popup>
  ) : (
    <label className="ui label">{children}</label>
  );
};

export default LabelWrapper;
