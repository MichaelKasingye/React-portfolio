import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Pages/Home/Home";
// import Projects from "./components/pages/Projects/Projects";
// import About from "./components/pages/About/About";
// import Resume from "./components/pages/Resume/Resume";


// import PostOrder from "./components/pages/Certification/Certification";
// import CareerJourney from "./components/pages/CareerJourney/CareerJourney";
// import Blogs from "./components/pages/Blogs/Blogs";
// import Contact from "./components/pages/Contact/Contact";
// import Skills from "./components/pages/Contact/Skills";


function App() {
  return (
    <div className="App">
          <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" component={About} />
          <Route path="/certification" component={Certification} />
          <Route path="/resume" component={Resume} />
          <Route path="/journey" component={CareerJourney} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />



          <Route path="/adminviewOrder/:Id" component={AdminViewOrder} />
          <Route path="/viewOrder/:Id" component={ViewOrder} />
         */}


        </Switch>
      </Router>
    </div>
  );
}

export default App;
