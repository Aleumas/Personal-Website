import Background from './components/Background';
import PostInfo from './components/PostInfo';
import { useLocation, useParams } from 'react-router-dom';

function Post() {
	const params = useParams();
	const state = useLocation().state;
	const theme = (state) ? state.theme : 'dark';
	const post = params.post;
    	const backgroundColor = (theme == 'dark') ? 'black' : 'white';

	return(
            	<Background type='plain' color={backgroundColor}>
			    <div className={theme + ' section-1'}>
				<PostInfo theme={theme} post={post}/>
			    </div>
		</Background>
	);
}

export default Post;