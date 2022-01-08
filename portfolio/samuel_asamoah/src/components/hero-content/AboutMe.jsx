import Resume from "./Resume";
import Socials from "./Socials";

function AboutMe(props) {
	return (
        <div>
            <div className='my-info-container'>
                <div>
                    <h1 className={ props.theme + ' spectral header' }>Hi, I am <br/> Samuel Asamoah</h1>
                    <p className={ props.theme + ' roboto-mono header-description' }> A software developer who enjoys designing <br/> efficient solutions to emerging problems.</p>
                </div>
                <Socials theme={props.theme}/>
            </div>
            <Resume/>
        </div>
    );
}

export default AboutMe;