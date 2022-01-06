import React, { Component, useState } from 'react';
import NavBar from './components/navigation/NavBar';
import Background from './components/Background'
import AboutMe from './components/hero-content/AboutMe';
import Project from './components/Project';
import { ThemeContext } from './theme-context';

function App() {

    document.title = 'Portfolio - Samuel Asamoah'
    const [theme, updateTheme] = useState('dark');
    const backgroundColor = (theme == 'dark') ? 'black' : 'white';

    return (
      <div className='App'>
        <ThemeContext.Provider value={{theme, updateTheme}}>
          <Background type='plain' color={backgroundColor}>
            <div className='section-1'>
              <NavBar theme={theme}/>
              <AboutMe theme={theme}/>
            </div>
            <div className='section-2'>
              <Project theme={theme}/>
            </div>
          </Background>
        </ThemeContext.Provider>
      </div>
    );
}

export default App;