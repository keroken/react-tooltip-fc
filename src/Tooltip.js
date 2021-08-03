import React, { useRef, useState } from 'react';
import { MyPortal } from './MyPortal';
import './App.css';

export const Tooltip = (props) => {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState({});
  const targetRef = useRef(null);
  const width = 256;
  const space = 16;
  
  const showTooltip = () => {
    const style = { width: width };
    const dimensions = targetRef.current.getBoundingClientRect();

    style.left = (dimensions.left + (dimensions.width / 2)) - (width / 2);
    style.left = Math.max(space, style.left);
    style.left = Math.min(style.left, document.body.clientWidth - width - space);

    if (dimensions.top < window.innerHeight / 2) {
      style.top = dimensions.top + dimensions.height + space;
    } else {
      style.bottom = (window.innerHeight - dimensions.top) + space;
    }
    setVisible(true);
    setStyle(style)
  };

  const hideTooltip = () => {
    setVisible(false);
  }

  return (
    <span
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
      className="tooltip-trigger-text"
      ref={targetRef}
    >
      {props.children}
      {visible &&
        <MyPortal>
          <div
            className="tooltip-body"
            style={style}
          >
            {props.text}
          </div>
        </MyPortal>
      }
    </span>
  );
}