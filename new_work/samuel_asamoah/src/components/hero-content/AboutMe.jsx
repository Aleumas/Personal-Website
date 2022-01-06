import Resume from "./Resume";
import Socials from "./Socials";

function AboutMe(props) {
	return (
        <div>
            <div className='my-info-container'>
                <div>
                    <h1 className={ props.theme + ' spectral header' }>Hi, I am <br/> Samuel Asamoah</h1>
                    <p className={ props.theme + ' roboto-mono header-description' }>I am a software developer who values robust and <br/>scalable solutions to complex problems.</p>
                </div>
                <Socials theme={props.theme}/>
            </div>
            <Resume/>
        </div>
    );
}

export default AboutMe;