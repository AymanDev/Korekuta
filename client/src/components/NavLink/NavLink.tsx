import cn from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavLink.module.scss';

export type Props = { to: string; className?: string };
const NavLink: React.FC<Props> = ({ className, to, children, ...props }) => {
    const classNames = cn(className, styles.wrapper);
    return (
        <Link className={classNames} to={to} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;
