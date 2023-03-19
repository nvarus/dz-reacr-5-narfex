import React from 'react';
import style from './Nav.module.css'
import {Link} from "react-router-dom";

const Nav = ({data}) => {
	return (
		<nav className={style.nav}>
			<Link to="/">{data.interface.navHome}</Link>
			<Link to="/post">{data.interface.navGallery}</Link>
		</nav>
	);
};

export default Nav;
