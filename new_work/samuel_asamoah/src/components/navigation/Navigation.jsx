import React, { useContext } from 'react';
import { ThemeContext } from '../../theme-context';

function Navigation() {

    const { theme, updateTheme } = useContext(ThemeContext);
    const toggle = () => updateTheme((theme == 'dark' ? 'light' : 'dark'));

    return (
        <div className='navigation-right'>
            <a href='' className={theme + ' roboto-mono navigation-link'}> Projects </a>
            <a href='' className={theme + ' roboto-mono navigation-link'}> Blog </a>
            <button className='toggle' onClick={toggle}><img className='toggle-icon' src={require('../../Public/Theme_toggle_' + theme + '.svg')}/></button>
        </div>
    );
}

export default Navigation;