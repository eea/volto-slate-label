import React from 'react';
import LabelWrapper from './LabelWrapper';

export const LabelElement = (props) => {
  const { element, mode } = props;
  const { data = {} } = element;
  const { uid } = data;

  return (
    <>
      {mode === 'view' ? (
        <span id={`ref-${uid}`} aria-describedby="slate-label">
          <LabelWrapper {...props} />
        </span>
      ) : (
        <LabelWrapper {...props} />
      )}
    </>
  );
};
