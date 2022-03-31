import React from 'react';
import { Popup, Label } from 'semantic-ui-react';
import {
  serializeNodes,
  serializeNodesToText,
} from 'volto-slate/editor/render';

const LabelWrapper = (props) => {
  const { attributes, children, element } = props;
  const { data = {} } = element;
  const { uid, label_type } = data;
  const isTooltipText =
    serializeNodesToText(data.label_content).trim().length > 0;

  return isTooltipText ? (
    <Popup
      position={data.pointing}
      open={data.always_show || undefined}
      on={!data.always_show && 'click'}
      trigger={
        label_type ? (
          <Label className={label_type}>{children}</Label>
        ) : (
          <span id={`label_ref-${uid}`} {...attributes} className="label-node">
            {children}
          </span>
        )
      }
      className={`ui label ${data.type}`}
    >
      {serializeNodes(data.label_content)}
    </Popup>
  ) : (
    <Label className={label_type}>{children}</Label>
  );
};

export default LabelWrapper;
