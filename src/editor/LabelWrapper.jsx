import React, { useRef, useState } from 'react';
import { Popup } from 'semantic-ui-react';
import {
  serializeNodes,
  serializeNodesToText,
} from '@plone/volto-slate/editor/render';

const LabelWrapper = (props) => {
  const { attributes, children, element } = props;
  const { data = {} } = element;
  const { uid, show_on_hover, tooltip_content } = data;

  const triggerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const isTooltipText =
    tooltip_content && serializeNodesToText(tooltip_content).trim().length > 0;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(true); // Show popup on Enter or Space
    } else if (event.key === 'Escape') {
      setIsOpen(false); // Close popup on Escape
    }
  };

  const handleFocus = () => {
    setIsOpen(true); // Show popup on focus
  };

  const handleBlur = () => {
    setIsOpen(false); // Hide popup on blur
  };

  const handleMouseEnter = () => {
    if (show_on_hover) {
      setIsOpen(true); // Show popup on mouse hover
    }
  };

  const handleMouseLeave = () => {
    if (show_on_hover) {
      setIsOpen(false); // Hide popup on mouse leave
    }
  };

  return isTooltipText ? (
    <Popup
      position="top center"
      open={isOpen}
      trigger={
        <span
          id={`label_ref-${uid}`}
          {...attributes}
          className="label-node with-popup"
          ref={triggerRef}
          tabIndex={0}
          role="button"
          aria-haspopup="true"
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
    <label
      className="ui label"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </label>
  );
};

export default LabelWrapper;
