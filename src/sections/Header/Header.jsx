import styles from './Header.module.css'
import React from 'react';
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import Nav from "../../components/Nav/Nav";
import SelectLang from "../../components/SelectLang/SelectLang";

const Header = ({data, onChange, value}) =>  {
	const clickBtn = () => {
	}
	return (
		<header className={styles.header}>
			<div className={styles.header__grid}>
				<div className={styles.header__logo}>
					<Logo/>
				</div>
				<Nav data={data}/>
				<SelectLang
					onChange={onChange}
					value={value}
				/>
				<Button onClick={clickBtn}>
					Headings
				</Button>
			</div>
		</header>
	);
}

export default Header;