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
  const { uid, label_type, label_pointing } = data;
  const isTooltipText =
    data.tooltip_content &&
    serializeNodesToText(data.tooltip_content).trim().length > 0;

  if (isTooltipText) {
    return (
      <Popup
        position={data.tooltip_pointing}
        open={data.always_show || undefined}
        on={!data.always_show ? 'click' : undefined}
        trigger={
          label_type ? (
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
        className={data.tooltip_type}
      >
        {serializeNodes(data.tooltip_content)}
      </Popup>
    );
  } else {
    return (
      <label className={cx(label_type, label_pointing, 'ui label')}>
        {children}
      </label>
    );
  }
};

export default LabelWrapper;
