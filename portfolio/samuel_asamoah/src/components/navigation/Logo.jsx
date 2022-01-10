import { Link } from "react-router-dom";

function Logo(props) {

	return (
        <div>
            <Link to='/Portfolio' style={{ textDecoration: 'none' }}>
                <h1 className={props.theme + ' yeseva-one logo'}> <span className='logo-brackets'>[</span>s.<span className='logo-brackets'>]</span> </h1>
            </Link>
        </div>
	);

}

export default Logo;