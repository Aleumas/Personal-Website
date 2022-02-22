import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../theme-context';

function Navigation() {

    const { theme, updateTheme } = useContext(ThemeContext);
    const toggle = () => updateTheme((theme == 'dark' ? 'light' : 'dark'));
    let navigate = useNavigate();

    return (
        <div className='navigation-right'>
            <a onClick={() => {document.getElementById('projects').scrollIntoView({ block: 'start',  behavior: 'smooth' })}} className={theme + ' roboto-mono navigation-link'}> Projects </a>
            <a onClick={() => { navigate('/Blog', { state: {
				theme: `${theme}`
			}})}} className={theme + ' roboto-mono navigation-link'}> Blog </a>
            <button className='toggle' onClick={toggle}><img className='toggle-icon' src={require('../../Public/Theme_toggle_' + theme + '.svg')}/></button>
        </div>
    );
}

export default Navigation;