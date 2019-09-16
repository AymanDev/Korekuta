import React from "react";

import "./Menu.pcss";

export interface MenuButtonProps {
  children?: React.ReactNode;
  onClick?: () => any;
}

const MenuButton = (props: MenuButtonProps) => (
  <button
    className="menu-button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default MenuButton;
