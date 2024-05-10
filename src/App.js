import './index.css';
import Nav from './Nav';
import Home from './Home';
import Gallery from './Gallery';
import Couple from './Couple';
import Story from './Story';
import Event from './Event';
import Footer from './Footer';
import Funds from './Funds';
import Quotes from './Quotes';
import BackgroundMusic from './BackgroundMusic';

function App() {
  const man ="Joshua";
  const woman = "Yosiana";
  return (
    <div className="App">
      <Nav/>
      <Home man={man} woman={woman}/>
      <Quotes/> 
      <Couple man={man} woman={woman}/>
      <Story/>
      <Gallery/>  
      <Event/> 
      <Funds/>
      <BackgroundMusic />
      <Footer man={man} woman={woman}/>
    </div>
  );
}

export default App;
