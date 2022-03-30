import React from 'react';
import { Popup } from 'semantic-ui-react';
import { serializeNodes } from 'volto-slate/editor/render';

export const LabelElement = (props) => {
  const { attributes, children, element, mode } = props;
  const { data = {} } = element;
  const { uid } = data;

  return (
    <>
      {mode === 'view' ? (
        <span id={`ref-${uid}`} aria-describedby="slate-label">
          <Popup
            position={data.pointing}
            open={data.always_show || undefined}
            on={!data.always_show && 'click'}
            trigger={
              <span
                id={`cite_ref-${uid}`}
                {...attributes}
                className="label-node"
              >
                {children}
              </span>
            }
            className={`ui label ${data.type}`}
          >
            {serializeNodes(data.label_content)}
          </Popup>
        </span>
      ) : (
        <Popup
          position={data.pointing}
          open={data.always_show || undefined}
          on={!data.always_show && 'click'}
          trigger={
            <span
              id={`label_ref-${uid}`}
              {...attributes}
              className="label-node"
            >
              {children}
            </span>
          }
          className={`ui label ${data.type}`}
        >
          {serializeNodes(data.label_content)}
        </Popup>
      )}
    </>
  );
};
