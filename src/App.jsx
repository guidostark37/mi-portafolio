import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Evidence from './components/Evidence';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Home />
        <About/>
        <Skills />
        <Resume/>
        <Portfolio />
        <Services />
        <Contacts />
        <Evidence />
        {/* Aquí iremos colgando las demás secciones a medida que las crees */}
      </main>
    </>
  );
}

export default App;