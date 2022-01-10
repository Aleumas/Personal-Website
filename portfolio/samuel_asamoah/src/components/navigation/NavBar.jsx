import Icon from './Logo';
import Navigation from './Navigation';

function NavBar(props) {
	return (
        <div className='navigation-bar'>
            <Icon theme={props.theme}/>
            { (props.isBlog=='false') && <Navigation theme={props.theme}/> }
        </div>
	);
}

export default NavBar;