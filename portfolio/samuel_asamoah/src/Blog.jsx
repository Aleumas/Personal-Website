import Background from './components/Background';
import {
	Outlet,
	useParams,
	useLocation
} from "react-router-dom";

function Blog() {

	const params = useParams(); 
	const state = useLocation().state;

	console.log(state.theme);

	const blog = (
		<div>
			<h1>Hello, world!</h1>
		</div>
	)
	return (
		(useLocation().pathname == '/Portfolio/Blog') ? blog : <Outlet/>
	);
}

export default Blog;