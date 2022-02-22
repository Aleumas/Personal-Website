import Background from './components/Background';
import NavBar from './components/navigation/NavBar';
import Project from './components/Project';
import React, {Fragment} from 'react';
import {
	Outlet,
	useLocation
} from "react-router-dom";

function Blog() {

	const state = useLocation().state;
    	const backgroundColor = (state.theme == 'dark') ? 'black' : 'white';
    	const projects = require('./Public/Projects.json');
	const blogPosts = projects.filter(project => project.is_blog == 'true');
	const posts = (
		blogPosts.map((project, index) =>
                	<Fragment  key={index}>
                    		<Project id={index} theme={state.theme} name={project.name} languages={project.languages} summary={project.summary} link_type={project.link_type} link={project.link} />
                	</Fragment>   
	));

	const blog = (
            	<Background type='plain' color={backgroundColor}>
			<div className={state.theme + ' section-1'}>
				<NavBar isBlog={true} theme={state.theme}/>
				<h1 className={'spectral header'}>Blog</h1>
				{posts}
			</div>
		</Background>
	);

	return (
		(useLocation().pathname == '/Blog') ? blog : <Outlet/>
	);
}

export default Blog;