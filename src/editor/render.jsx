import React from 'react';
import { Popup } from 'semantic-ui-react';

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
            open={data.label_content ? true : false}
            trigger={
              <span id={`cite_ref-${uid}`} {...attributes}>
                {children}
              </span>
            }
            style={{ fontSize: '14px', color: '#FFFFFF' }}
            className={data.type}
          >
            {data.label_content}
          </Popup>
        </span>
      ) : (
        <Popup
          position={data.pointing}
          open={data.label_content ? true : false}
          trigger={
            <span
              id={`cite_ref-${uid}`}
              {...attributes}
              className="label-edit-node"
            >
              {children}
            </span>
          }
          style={{ fontSize: '14px', color: '#FFFFFF' }}
          className={data.type}
        >
          {data.label_content}
        </Popup>
      )}
    </>
  );
};
