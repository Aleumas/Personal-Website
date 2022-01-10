import Background from './components/Background';
import PostInfo from './components/PostInfo';
import { useLocation } from 'react-router-dom';

function Post() {
	const { state } = useLocation();
	const theme = state.theme;
	const post = state.name;
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