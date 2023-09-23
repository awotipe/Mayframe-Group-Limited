import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Driving from './Pages/Driving/Driving';
import Test from './Pages/Test/Test';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Driving}/>
        <Route path="/test" exact component={Test}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/About" exact component={About}/>
        <Route path="/Contact" exact component={Contact}/>
      </Switch>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
