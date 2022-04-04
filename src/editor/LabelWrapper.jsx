import React from 'react';
import { Popup, Label } from 'semantic-ui-react';
import cx from 'classnames';
import {
  serializeNodes,
  serializeNodesToText,
} from 'volto-slate/editor/render';

const LabelWrapper = (props) => {
  const { attributes, children, element } = props;
  const { data = {} } = element;
  const { uid, label_type, label_pointing } = data;
  const isTooltipText =
    data.tooltip_content &&
    serializeNodesToText(data.tooltip_content).trim().length > 0;

  return isTooltipText ? (
    <Popup
      position={data.tooltip_pointing}
      open={data.always_show || undefined}
      on={!data.always_show && 'click'}
      trigger={
        label_type ? (
          <Label className={cx(label_type, label_pointing, 'with-popup')}>
            {children}
          </Label>
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
  ) : (
    <Label className={cx(label_type, label_pointing)}>{children}</Label>
  );
};

export default LabelWrapper;
