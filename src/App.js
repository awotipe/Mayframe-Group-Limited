import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import {useLayoutEffect} from 'react';
import Driving from './Pages/Driving/Driving';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Gallery from './Pages/Gallery/Gallery';
import Farm from './Pages/Farm/Farm';
import Initiative from './Pages/Development/Development';
import Consultancy from './Pages/Consultancy/Consultancy';
import Investment from './Pages/Investment/Investment';
import Property from './Pages/Property/Property';
import Footer from "./components/Footer/Footer"

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Wrapper>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/about" exact component={About}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/gallery" exact component={Gallery}/>
        <Route path="/driving" exact component={Driving}/>
        <Route path="/consultancy" exact component={Consultancy}/>
        <Route path="/investment" exact component={Investment}/>
        <Route path="/farm" exact component={Farm}/>
        <Route path="/property" exact component={Property}/>
        <Route path="/initiative" exact component={Initiative}/>
      </Switch>
      </Wrapper>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
