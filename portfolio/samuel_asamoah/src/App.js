import React, { useState } from 'react';
import NavBar from './components/navigation/NavBar';
import Background from './components/Background'
import AboutMe from './components/hero-content/AboutMe';
import Project from './components/Projects';
import { ThemeContext } from './theme-context'

function App() {

    document.title = 'Portfolio - Samuel Asamoah'
    const [theme, updateTheme] = useState('dark');
    const backgroundColor = (theme == 'dark') ? 'black' : 'white';

    return (
      <ThemeContext.Provider value={{theme, updateTheme}}>
        <div className='App'>
            <Background type='plain' color={backgroundColor}>
              <div className='section-1'>
                <NavBar isBlog='false' theme={theme}/>
                <AboutMe theme={theme}/>
              </div>
              <div id='projects' className='section-2'>
                <h1 className={theme + ' spectral header'}>Projects</h1>
                <Project theme={theme}/>
              </div>
            </Background>
        </div>
      </ThemeContext.Provider>
    );
}

export default App;