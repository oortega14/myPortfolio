import './scss/app.scss';
import {NavBar} from './containers/NavBar'
import {Main} from './containers/Main'
import {Skills} from './containers/Skills'
import {Projects} from './containers/Projects'
import {GetInTouch} from './containers/GetInTouch'
import {Footers} from './containers/Footers'

function App() {
  return (
    <>
      <NavBar/>
      <Main/>
      <Skills/>
      <Projects/>
      <GetInTouch/>
      <Footers/>
    </>
  );
}

export default App;
