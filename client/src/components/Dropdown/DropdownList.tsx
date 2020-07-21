import styled, { css } from "styled-components";
import { BORDER, BORDER_RADIUS, BUTTON_BACKGROUND_COLOR } from "../../values";
import React from "react";

export interface DropdownListWrapperProps {
  visible: boolean;
  offset?: number;
}
const DropdownListWrapper = styled.div<DropdownListWrapperProps>`
  position: absolute;
  top: ${(props) => props.offset || 36}px;
  left: 0;

  border: ${BORDER};
  border-radius: ${BORDER_RADIUS};

  background: ${BUTTON_BACKGROUND_COLOR};

  transition: all ease 0.25s;

  display: none;

  ${(props) =>
    props.visible &&
    css`
      display: block;
    `}
`;
export interface DropdownListProps {
  visible: boolean;
}
const DropdownList: React.FC<DropdownListProps> = ({ visible, children }) => {
  return (
    <DropdownListWrapper visible={visible}>{children}</DropdownListWrapper>
  );
};

export default DropdownList;
