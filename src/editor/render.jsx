import React, { useEffect } from 'react';
import { Popup, List, Label } from 'semantic-ui-react';
import { useEditorContext } from 'volto-slate/hooks';

export const LabelElement = (props) => {
  const { attributes, children, element, mode, extras } = props;
  const { data = {} } = element;
  const { uid } = data;
  const editor = useEditorContext();

  useEffect(() => {
    const blockProps = editor?.getBlockProps ? editor.getBlockProps() : null;
    const metadata = blockProps
      ? blockProps.metadata || blockProps.properties
      : extras?.metadata || {};
  }, [editor, element, children]); // eslint-disable-line

  return (
    <>
      {mode === 'view' ? (
        <span id={`ref-${uid}`} aria-describedby="slate-label">
          {children}
          <Label
            {...attributes}
            content={data.label_content || ''}
            id={`label-${uid}`}
            className={data.type}
            pointing={data.pointing}
          ></Label>
        </span>
      ) : (
        <>
          {children}
          <Label
            {...attributes}
            content={data.label_content || ''}
            id={`label-${uid}`}
            className={data.type}
            pointing={data.pointing}
          ></Label>
        </>
      )}
    </>
  );
};
