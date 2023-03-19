import styles from './Card.module.css'
import Button from "../Button/Button";
import {Link} from "react-router-dom";
import DatePost from "../DatePost/DatePost";

const Cards = ({id, setID, cardButton, ...props}) => {
	return (
		<div className={styles.card}>
			<img src={props.img} className={styles.card__img}/>
			<div className={styles.card__info}>
				<Link to="/paper">
					<Button onClick={() => setID(id)}>
						{cardButton}
					</Button>
				</Link>
				<span className={styles.card__date}>
						<DatePost
							dateLocale={props.dateLocale}
							date={props.date}
							option={{
								day: "2-digit",
								month: "long",
								year: "numeric"
							}}
						/>
					</span>
			</div>
			<span className={styles.card__title}>
					{props.title}
				</span>
		</div>
	);
};
export default Cards;
