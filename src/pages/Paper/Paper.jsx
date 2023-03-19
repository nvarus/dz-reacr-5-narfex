import React from 'react';
import Nature from "../../sections/Nature/Nature";
import styles from "./Paper.module.css"
import Aside from "../../sections/Aside/Aside";

const Paper = ({data, id}) => {
	return (
		<div className={styles.paper}>
			<Nature id={id} data={data}/>
			<Aside/>
		</div>
	);
};

export default Paper;
