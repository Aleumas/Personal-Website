import { useState, useEffect, Fragment } from 'react';

import Project from './Project';

function Projects(props) {
    const projects = require('../Public/Projects.json');
   
    
	return ( projects.map((project, index) =>
                <Fragment  key={index}>
                    {(project.is_blog == 'false' || project.blog_type == 'project') && <Project id={index} {...props} name={project.name} languages={project.languages} summary={project.summary} blog_type={project.blog_type} is_blog={project.is_blog} link_type={project.link_type} link={project.link} />}
                </Fragment>
        )
	);
}

export default Projects;