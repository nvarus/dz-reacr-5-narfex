import styles from './SelectLang.module.css'
import React from 'react';
import euImg from '../../eu.png'
import ruImg from '../../ru.png'



const SelectLang = ({onChange, value, ...props}) => {
	return (
		<div className={styles.flex}>
			<div className={styles.flag}>
				{value === 'eu'
					?
					<img src={euImg} alt=""/>
					:
					<img src={ruImg} alt=""/>
				}
			</div>
			<select
			className={styles.selectLang}
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			
			<option value="eu">Eu</option>
			<option value="ru">Ru</option>
		</select>
		</div>
	);
}

export default SelectLang;