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
  const {
    uid,
    always_show,
    show_on_hover,
    label_type,
    label_pointing,
    tooltip_type,
    tooltip_size,
    tooltip_content,
    tooltip_pointing,
  } = data;

  const isTooltipText =
    tooltip_content && serializeNodesToText(tooltip_content).trim().length > 0;

  return isTooltipText ? (
    <Popup
      wide={
        tooltip_size === 'wide'
          ? true
          : tooltip_size === 'extra'
          ? 'very'
          : null
      }
      position={tooltip_pointing}
      open={always_show || undefined}
      on={show_on_hover ? 'hover' : 'click'}
      trigger={
        label_type !== undefined && label_type !== 'simple' ? (
          <label
            className={cx(label_type, label_pointing, 'with-popup ui label')}
          >
            {children}
          </label>
        ) : (
          <span
            id={`label_ref-${uid}`}
            {...attributes}
            className="label-node with-popup"
          >
            {children}
          </span>
        )
      }
      className={tooltip_type}
    >
      {serializeNodes(tooltip_content)}
    </Popup>
  ) : (
    <label className={cx(label_type, label_pointing, 'ui label')}>
      {children}
    </label>
  );
};

export default LabelWrapper;
