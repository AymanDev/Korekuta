import { faUserCircle } from '@fortawesome/free-regular-svg-icons/faUserCircle';
import { faUserCircle as faUserCircleSolid } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Divider from '../../elements/Divider';
import Paragraph from '../../elements/Paragraph';
import history from '../../history';
import { GAMES_PATH, LOGIN_PATH, REGISTER_PATH } from '../../routes';
import Button from '../Button';
import Dropdown from '../Dropdown';
import DropdownListItem from '../Dropdown/DropdownListItem';
import NavLink from '../NavLink';

import styles from './Menu.module.scss';

const Menu = () => {
    const handleRegisterClick = () => {
        history.push(REGISTER_PATH);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <NavLink to="/">
                    <Paragraph fontSize={32}>Korekuta</Paragraph>
                </NavLink>
                <Divider />
            </div>
            <Dropdown title="Games">
                <DropdownListItem to={GAMES_PATH}>Nintendo Switch</DropdownListItem>
            </Dropdown>
            <div className={styles.end}>
                <Button onClick={handleRegisterClick}>
                    <FontAwesomeIcon icon={faUserCircle} />
                    <span>Register</span>
                </Button>
                <Button>
                    <NavLink to={LOGIN_PATH}>
                        <FontAwesomeIcon icon={faUserCircleSolid} />
                        <span>Login</span>
                    </NavLink>
                </Button>
            </div>
        </div>
    );
};

export default Menu;
