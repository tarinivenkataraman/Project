import './App.css';
import Heading from './Heading';
import Main from './Main';
import Inserting from './Inserting';
import About from './About';
import Show from './Show';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Heading/>
     <Main />
     <About/>
     <Inserting/>
     <Show/>
     <Contact/>
    </div>
  );
}

export default App;
