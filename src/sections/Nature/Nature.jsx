import React from 'react';
import styles from './Nature.module.css'
import Title from "../../components/Title/Title";
import Preview from "../../components/Preview/Preview";
import PostContent from "../../components/PostContent/PostContent";
import {useState} from "react";

const Nature = ({data, id}) => {
	/* вызываем хук useState для передачи события кнопки от Preview:
	 * setStyle - передаем через props в Preview, style - в PostContent */
	const [style, setStyle] = useState({"display": "none"});
	// от кнопки получаем ID поста
	const article = data.cards[id]
	return (
		<div className={styles.nature}>
			<Title dataInterface={data.interface} post={article} author={data.author}/>
			<Preview setStyle={setStyle} post={article}/>
			<PostContent style={style} post={article} />
		</div>
	);
};

export default Nature;
