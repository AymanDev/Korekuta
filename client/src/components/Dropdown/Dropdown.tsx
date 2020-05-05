import React from "react";
import styled from "styled-components";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DROPDOWN_BACKGROUND_COLOR } from "../../values";
import { withModal } from "../../utils/hoc";

export interface DropdownListProps {}
const DropdownListWrapper = styled.div<DropdownListProps>`
  position: absolute;
  top: 32px;
  left: 0;
  width: 100%;

  border-radius: 0 0 5px 5px;

  background: ${DROPDOWN_BACKGROUND_COLOR};

  transition: all ease 0.25s;
`;
const DropdownList = withModal(({ visible, onClickOutside, children }) => {
  return <DropdownListWrapper>{visible && children}</DropdownListWrapper>;
});

export const DropdownListItem = styled.div`
  color: white;
  margin: 10px;
`;

const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  width: max-content;
  min-height: 20px;
  padding: 7px;

  background: ${DROPDOWN_BACKGROUND_COLOR};
  border-radius: 5px;

  font-size: 16px;

  cursor: pointer;

  & > svg {
    font-size: 18px;
  }
`;
const Title = styled.span`
  margin-left: 5px;
`;
export interface DropdownProps {
  title: string;
  open?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}
const Dropdown: React.FC<DropdownProps> = ({
  title,
  children,
  onClick,
  ...rest
}) => {
  return (
    <Wrapper
      {...rest}
      onClick={e => {
        onClick(e);
        e.preventDefault();
      }}
    >
      <FontAwesomeIcon size={"1x"} icon={faAngleDown} />
      <Title>{title}</Title>
      <DropdownList>{children}</DropdownList>
    </Wrapper>
  );
};

export default Dropdown;
