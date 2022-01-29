import React, { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import Explore_dark from '../Public/Explore_dark.svg';
import Explore_light from '../Public/Explore_light.svg';

function Project(props) {
	const [post, changePost] = useState(undefined);
    	let navigate = useNavigate();
	const Explore = (props.theme == 'dark') ? Explore_dark : Explore_light;

	useEffect(() => {
		if (post != undefined) {
			const postExtention = post.replace(/ /g, "_");
			navigate(`/Portfolio/Blog/${postExtention}`, { state: {
				theme: `${props.theme}`,
				name:  `${post}` 
			}});
			changePost(undefined);
		}
	}, [post]);

	return (
		<div className={props.theme}>
			<div className='project-title'>
				<h2 className='spectral project-name'>{props.name + ' | '}</h2>
				<p className='roboto-mono languages'>{props.languages}</p>
			</div>
			<p className='roboto-mono project-summary'>{props.summary}</p>
			{(props.link_type=='project') && (<a target='_blank' rel='noopener' className={props.theme + ' explore roboto-mono'} href={props.link}>Explore project<img className='arrow' src={Explore}/></a>)} 
			{(props.link_type=='blog') && (<a id={props.id} onClick={() => changePost(props.name)} className={props.theme + ' explore roboto-mono'}>Read post<img className='arrow' src={Explore}/></a>)}
		</div>

	);
}

export default Project;