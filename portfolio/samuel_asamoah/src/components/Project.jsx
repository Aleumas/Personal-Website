import { Fragment } from 'react';
import Explore_dark from '../Public/Explore_dark.svg';
import Explore_light from '../Public/Explore_light.svg';

function Project(props) {

    const projects = require('../Public/Projects.json');
    const Explore = (props.theme == 'dark') ? Explore_dark : Explore_light;

	return ( projects.map((project, index) =>
            <Fragment key={index}>
            <div className={props.theme + ' project'}>
                <div className='project-title'>
                    <h2 className='spectral project-name'>{project.name + ' | '}</h2>
                    <p className='roboto-mono languages'>{project.languages}</p>
                </div>
                <p className='roboto-mono project-summary'>{project.summary}</p>
                {(project.link_type=='project') && (<a target='_blank' rel='noopener' className={props.theme + ' explore roboto-mono'} href={project.link}>Explore project<img className='arrow' src={Explore}/></a>)} 
                {(project.link_type=='blog') && (<a target='_blank' rel='noopener' className={props.theme + ' explore roboto-mono'} href={project.link}>Read blog<img className='arrow' src={Explore}/></a>)}
            </div>
            </Fragment>
        )
	);
}

export default Project;