
import './App.css';
import About from './components/About';
import Homepage from './components/Homepage';
import NavbarComponents from './components/Navbar';
import Workpage from './components/Workpage';

function App() {
  return (
    <div className="App">
    <NavbarComponents></NavbarComponents>
    <Homepage></Homepage>
    <Workpage></Workpage>
    <About></About>
    </div>
  );
}

export default App;
