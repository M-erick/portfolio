import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import { BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
<div className='App'>
  <Navbar/>

</div>
    <Switch>
{/* Switch component makes sure that only one route is shown  */}
      <Route  exact  path = "/">
      <About/>
      </Route>

      <Route path = "/contact">
      <Contact/>
      </Route>

      <Route path = "/project" >
      <Project/>
      </Route>


    </Switch>
    <div className="footer">
      <Footer/>
    </div>
  
    </Router>
  );
}

export default App;
