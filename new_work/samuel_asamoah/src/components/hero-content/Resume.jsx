import download from '../../Public/Download_icon.svg';

function Resume() {
	return (
		<div>
            <button className='roboto-mono resume'>Resume<div className='download'><img className='download-icon'src={download}/></div></button>
		</div>
	);
}

export default Resume;