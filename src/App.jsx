import './scss/app.scss';
import NavBar from './containers/NavBar'
import Main from './containers/Main'
import { Skills } from './containers/Skills'
import Projects from './containers/Projects'
import { Contact } from './containers/Contact'


function App() {
  return (
    <div className='container-fluid' >
      <NavBar/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export { App };
