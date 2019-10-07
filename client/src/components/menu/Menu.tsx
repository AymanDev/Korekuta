import React from "react";
import MenuButton from "./MenuButton";
import UserButton from "./UserButton";
import {RouteComponentProps, withRouter} from 'react-router-dom'

import "./Menu.pcss";
import {ANIME_PAGE_PATH, INDEX_PATH} from '../../Routes';

const MenuLeft = props => (
  <div className="w-auto md:w-full flex justify-center md:justify-end">
    {props.children}
  </div>
);

export interface MenuProps {
  sticky: boolean;
}

const Menu = (props: MenuProps & RouteComponentProps) => (
  <div
    className={
      "menu " + (props.sticky ? "menu-sticky" : "")
    }
  >
    <div className="w-full container flex flex-col md:flex-row  items-center text-center mx-auto">
      <h1 className="text-4xl cursor-pointer" onClick={() => props.history.push(INDEX_PATH)}>Korekutā</h1>
      <MenuButton onClick={() => props.history.push(INDEX_PATH)}>News</MenuButton>
      <MenuButton onClick={() => props.history.push(ANIME_PAGE_PATH)}>Anime</MenuButton>
      <MenuButton>Manga</MenuButton>
      <MenuButton>Ranobe</MenuButton>
      <MenuButton>Blogs</MenuButton>
      <MenuLeft>
        <UserButton/>
      </MenuLeft>
    </div>
  </div>
);

export default withRouter(Menu);
