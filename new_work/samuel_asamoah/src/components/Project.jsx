import { Fragment } from 'react';
import Explore_dark from '../Public/Explore_dark.svg';
import Explore_light from '../Public/Explore_light.svg';

function Project(props) {

    const projects = require('../Public/Projects.json');
    const Explore = (props.theme == 'dark') ? Explore_dark : Explore_light;

	return ( projects.map((project, index) =>
            <Fragment key={index}>
            <div className={props.theme}>
                <div className='project-title'>
                    <h2 className='spectral project-name'>{project.name + ' | '}</h2>
                    <p className='roboto-mono languages'>{project.languages}</p>
                </div>
                <p className='roboto-mono project-summary'>{project.summary}</p>
                <button className={props.theme + ' explore roboto-mono'}>Explore project<img className='arrow' src={Explore}/></button>
            </div>
            </Fragment>
        )
	);
}

export default Project;