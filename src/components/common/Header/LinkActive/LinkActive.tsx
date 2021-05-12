import classnames from "classnames";
import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from "./styled";
interface ILinkActiveProps {
    to: string,
    navItemName: string,
    rest?: any
}

const LinkActive = (props: ILinkActiveProps) => {
    const { to, navItemName, ...rest } = props
    const pathname = window.location.pathname;
    let isActive = to === pathname
    return (
        <NavItem isActive={isActive}>
            <Link to={to} {...rest}>{navItemName}</Link>
        </NavItem>
    );

}

export default LinkActive;