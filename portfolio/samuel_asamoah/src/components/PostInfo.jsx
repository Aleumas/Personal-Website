import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown';
import style from '../styles/markdown-styles.module.css';
import NavBar from './navigation/NavBar'

function PostInfo(props) {

	const [post, setPost] = useState('');

	useEffect(() => {
		import(`../Public/${props.post.replace(/ /g, "_")}.md`).then((response) => {
			fetch(response.default)
			.then((response) => response.text())
			.then((response) => setPost(response))
		})
	}, []);
        
	return (
		<div className={props.className}>
			<NavBar isBlog={true} theme={props.theme}/>
			<ReactMarkdown className={style.reactMarkDown} >{post}</ReactMarkdown>
		</div>
	);
}

export default PostInfo;