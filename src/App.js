
import './App.css';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { Skills } from './Components/Skills/Skills';
import { Contact } from './Components/Contact/Contact';
import { Projects } from './Components/Project/Projects';

function App() {
  return (
 
    <div className="App">
         
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
     <Contact/>


   
    </div>
  );
}

export default App;
