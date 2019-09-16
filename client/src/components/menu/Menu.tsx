import React from "react";
import MenuButton from "./MenuButton";
import UserButton from "./UserButton";

import "./Menu.pcss";

const MenuLeft = props => (
  <div className="w-auto md:w-full flex justify-center md:justify-end">
    {props.children}
  </div>
);

export interface MenuProps {
  sticky: boolean;
}

const Menu = (props: MenuProps) => (
  <div
    className={
      "menu " + (props.sticky ? "menu-sticky" : "")
    }
  >
    <div className="w-full container flex flex-col md:flex-row  items-center text-center mx-auto">
      <h1 className="text-4xl">Korekutā</h1>
      <MenuButton>News</MenuButton>
      <MenuButton>Anime</MenuButton>
      <MenuButton>Manga</MenuButton>
      <MenuButton>Ranobe</MenuButton>
      <MenuButton>Blogs</MenuButton>
      <MenuLeft>
        <UserButton></UserButton>
      </MenuLeft>
    </div>
  </div>
);

export default Menu;
