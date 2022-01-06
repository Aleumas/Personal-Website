import Github_dark from '../../Public/Github_dark.svg';
import Github_light from '../../Public/Github_light.svg';
import Linkedin_dark from '../../Public/Linkedin_dark.svg';
import Linkedin_light from '../../Public/Linkedin_light.svg';
import Email_dark from '../../Public/Email_dark.svg';
import Email_light from '../../Public/Email_light.svg';

function Socials(props) {
    const Github = (props.theme == 'dark') ? Github_dark : Github_light;
    const Linkedin = (props.theme == 'dark') ? Linkedin_dark : Linkedin_light;
    const Email = (props.theme == 'dark') ? Email_dark : Email_light;
	return (
		<div className='socials-container'>
           <button className='socials'><img className='socials-icon' src={Github}/></button> 
           <button className='socials'><img className='socials-icon' src={Linkedin}/></button> 
           <button className='socials'><img className='socials-icon' src={Email}/></button> 
		</div>
	);
}

export default Socials;