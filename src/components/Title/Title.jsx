import React from 'react';
import styles from './Title.module.css'
import DatePost from "../DatePost/DatePost";
import Author from "../Author/Author";

const Title = ({dataInterface, post, author}) => {
	return (
		<div className={styles.title}>
			<div className={styles.title__theme}>{post.theme}</div>
			<DatePost
				
				date={post.date}
				option={{
					day: "2-digit",
					month: "short",
					year: "numeric"
				}}
			/>
			<h2>
				{post.title}
			</h2>
			<Author dataInterface={dataInterface} authorID={post.authorID} author={author}/>
		</div>
	);
};

export default Title;
