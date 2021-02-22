import React from 'react';
import { Link } from 'react-router-dom'
import classnames from "classnames"
import "./style.scss"
interface ILinkActiveProps{
    to:string,
    navItemName:string,
    rest?:any
}

const LinkActive = (props: ILinkActiveProps) => {
    const {to,navItemName,...rest}=props
    const pathname = window.location.pathname; 

        let isActive =  to===pathname
        return (
            <li className={classnames("sa_nav_item",{
                'sa_nav_item_active': isActive,
              })}>
                <Link to={to} {...rest}>{navItemName}</Link>
            </li>
        );
    
}

export default LinkActive;