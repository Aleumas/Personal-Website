import download from '../../Public/Download_icon.svg';
import resume from '../../Public/Resume.pdf';

function Resume() {
	return (
		<div>
       		    <button onClick={() => {
                window.open(resume, '_blank');
			}} className='roboto-mono resume'>Resume<div className='download'><img className='download-icon'src={download}/></div></button>
		</div>
	);
}

export default Resume;