import './App.css';
import './Components/styles/home.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Projects from "./Components/Pages/Projects/Projects";
import Resume from "./Components/Pages/Resume/Resume";


import Certification from "./Components/Pages/Certification/Certification";
// import CareerJourney from "./Components/Pages/CareerJourney/CareerJourney";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Contact from "./Components/Pages/Contact/Contact";
// import Skills from "./Components/Pages/Contact/Skills";


function App() {
  return (
    <div className="App">
          <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/certification" component={Certification} />
          <Route path="/resume" component={Resume} />
          {/* <Route path="/journey" component={CareerJourney} /> */}
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact}/>
          <Route path="/projects" component={Projects} />
          {/* <Route path="/skills" component={Skills} /> */}



          {/* <Route path="/adminviewOrder/:Id" component={AdminViewOrder} /> */}
          {/* <Route path="/viewOrder/:Id" component={ViewOrder} /> */}
        


        </Switch>
      </Router>
    </div>
  );
}

export default App;
