import React from 'react';
import styles from './RecentCards.module.css'
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import Author from "../Author/Author";

const RecentCards = ({id, setID, author, dataInterface, ...props}) => {
	return (
		<div className={styles.RecentCards}>
			<div className={styles.RecentCards__img}>
				<img src={props.img} />
			</div>
			<div className={styles.RecentCards__info}>
				<div className={styles.RecentCards__btn}>
					<Link to="/paper">
						<Button onClick={() => setID(id)}>
							{dataInterface.cardButton}
						</Button>
					</Link>
				</div>
				<span className={styles.RecentCards__title}>
					{props.title}
				</span>
				<div className={styles.RecentCards__author}>
					<Author dataInterface={dataInterface} author={author} authorID={props.authorID}/>
				</div>
			</div>
		</div>
	);
};

export default RecentCards;