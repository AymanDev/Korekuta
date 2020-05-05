import styled from "styled-components";
import React from "react";
import Paragraph from "../../elements/Paragraph";
import Divider from "../../elements/Divider";
import Dropdown from "../Dropdown";
import { DropdownListItem } from "../Dropdown/Dropdown";

const Wrapper = styled.div`
  display: flex;

  background: rgba(0, 0, 0, 0.75);
  color: white;

  padding: 10px;
  max-height: 40px;

  font-size: 14px;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  & > ${Paragraph} {
    margin-right: 10px;
  }
`;

const Menu = ({}) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Paragraph fontSize={32}>Korekuta</Paragraph>
        <Divider />
      </LogoWrapper>
      <Dropdown title={"Anime"}>
        <DropdownListItem>1</DropdownListItem>
      </Dropdown>
    </Wrapper>
  );
};

export default Menu;
