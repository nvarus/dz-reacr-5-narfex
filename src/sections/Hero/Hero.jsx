import React, {useState} from 'react';
import Card from "../../components/Card/Card";
import style from "../../data/ListCards/ListCard.module.css";



const Hero = ({data, setID}) => {
	const [showCards, setShowCards] = useState([...data.cards]);
	const list = showCards.map((item, index) => (
		<Card
			key={index}
			img={item.img}
			title={item.title}
			date={item.date}
			id={index}
			setID={setID}
			dateLocale={data.dateLocale}
			cardButton={data.interface.cardButton}
		/>
		));
	// выбираем пять последних элементов массива list
	let firstFive = list.slice(-5)
	
	
	return (
		<section className={style.listCard}>
			<div className={style.listCard__grid}>
				{firstFive}
			</div>
		
		</section>
	);
};


export default Hero;



