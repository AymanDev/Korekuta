import styled from "styled-components";
import React from "react";
import Paragraph from "../../elements/Paragraph";
import Divider from "../../elements/Divider";
import Dropdown from "../Dropdown";
import { DropdownListItem } from "../Dropdown/Dropdown";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons/faUserCircle";
import { faUserCircle as faUserCircleSolid } from "@fortawesome/free-solid-svg-icons/faUserCircle";
import history from "../../history";
import { REGISTER_PATH } from "../../routes";
import { BORDER, MAIN_COLOR } from "../../values";

const Wrapper = styled.div`
  display: flex;

  background: ${MAIN_COLOR};
  color: white;

  padding: 10px;
  max-height: 40px;

  font-size: 14px;
`;

const EndBlock = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;

  *:not(:last-child) {
    margin-right: 5px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

`;

const Menu = ({}) => {
  const handleRegisterClick = () => {
    history.push(REGISTER_PATH);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <Paragraph fontSize={32}>Korekuta</Paragraph>
        <Divider />
      </LogoWrapper>
      <Dropdown title={"Anime"}>
        <DropdownListItem>1</DropdownListItem>
      </Dropdown>
      <EndBlock>
        <Button onClick={handleRegisterClick}>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>Register</span>
        </Button>
        <Button>
          <FontAwesomeIcon icon={faUserCircleSolid} />
          <span>Login</span>
        </Button>
      </EndBlock>
    </Wrapper>
  );
};

export default Menu;
