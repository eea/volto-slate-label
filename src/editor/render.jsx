import React from 'react';
import LabelWrapper from './LabelWrapper';
import './styles.less';

export const LabelElement = (props) => {
  const { element, mode } = props;
  const { data = {} } = element;
  const { uid } = data;

  const handleKeyDown = (event) => {
    // Handle keyboard interactions
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const labelElement = document.querySelector(`#popup-${uid}`);
      if (labelElement) {
        labelElement.focus();
      }
    }
  };

  return (
    <>
      {mode === 'view' ? (
        <span
          id={`ref-${uid}`}
          aria-describedby="slate-label"
          onKeyDown={handleKeyDown}
          role="button"
          aria-haspopup="true"
        >
          <LabelWrapper {...props} />
        </span>
      ) : (
        <LabelWrapper {...props} />
      )}
    </>
  );
};
