import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./Menu.pcss";

export interface UserButtonProps {
  onClick?: () => any;
}

const UserButton = (props: UserButtonProps) => (
  <button className="user-button" onClick={props.onClick}>
    <FontAwesomeIcon size="lg" icon={faUser}></FontAwesomeIcon>
  </button>
);

export default UserButton;
