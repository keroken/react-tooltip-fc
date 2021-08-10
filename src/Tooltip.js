import React, { useRef, useState } from 'react';
import { MyPortal } from './MyPortal';
import styled from 'styled-components';

export const Tooltip = (props) => {
  const [visible, setVisible] = useState(false);
  const [style, setStyle] = useState({});
  const targetRef = useRef(null);
  const width = 200;
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
    <TooltipTriggerText
      onMouseOver={showTooltip}
      onMouseOut={hideTooltip}
      className="tooltip-trigger-text"
      ref={targetRef}
    >
      {props.children}
      {visible &&
        <MyPortal>
          <TooltipBody
            className="tooltip-body"
            style={style}
          >
            {props.text}
            <TooltipTail className="tooltip-tail" />
          </TooltipBody>
        </MyPortal>
      }
    </TooltipTriggerText>
  );
}

const TooltipTriggerText = styled.span`
  border-bottom: 1px dashed grey;
`;

const TooltipBody = styled.div`
  position: fixed;
  padding: 8px;
  background: #333;
  color: white;
  box-shadow: 2px 2px 3px rgba(0 ,0, 0, 0.3);
  text-align: center;
  font-size: 16px;
  border-radius: 4px;
`;

const TooltipTail = styled.span`
  position: absolute;
  bottom: 0;
  left: calc(50% - 7px);
  width: 10px;
  height: 10px;
  background: #333;
  content: '';
  transform: rotate(45deg);
  transform-origin: 0 10px;
  box-shadow: 2px 2px 3px rgba(0 ,0, 0, 0.3);
`;
