import React from 'react';
import styles from './Aside.module.css'
import AppNarfex from "../../components/AppNarfex/AppNarfex";
import MostPopular from "../../components/MostPopular/MostPopular";
import CreateWallet from "../../components/CreateWallet/CreateWallet";

const Aside = () => {
	return (
		
		<div className={styles.aside}>
			<div className={styles.aside__firstBlock}></div>
			<AppNarfex/>
			<MostPopular/>
			<CreateWallet/>
		</div>
	);
};

export default Aside;
