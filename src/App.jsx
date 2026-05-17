import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
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
        {/* Aquí iremos colgando las demás secciones a medida que las crees */}
      </main>
    </>
  );
}

export default App;