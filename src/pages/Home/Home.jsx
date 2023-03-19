import React from 'react';
import Hero from "../../sections/Hero/Hero";
import OtherPosts from "../../sections/OthetPosts/OtherPosts";

const Home = ({data, setID}) => {
	return (
		<>
		<Hero setID={setID} data={data}/>
		<OtherPosts setID={setID} data={data}/>
		</>
	);
};

export default Home;
