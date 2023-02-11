import './scss/app.scss';
import NavBar from './containers/NavBar'
import Main from './containers/Main'
import { Skills } from './containers/Skills'
import Projects from './containers/Projects'
import { Contact } from './containers/Contact'
import { useRef } from 'react';


function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactUsRef = useRef(null);
  return (
    <div className='container-fluid' >
      <NavBar
        homeRef={homeRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactUsRef={contactUsRef}
      />
      <Main homeRef={homeRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <Contact contactUsRef={contactUsRef}/>
    </div>
  );
}

export { App };
