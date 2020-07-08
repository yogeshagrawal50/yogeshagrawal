import React from 'react';
import './App.css';
import './styles/Home.css';
import './styles/BurgerMenu.css';
import './styles/Bio.css';
import './styles/Portfolio.css';
import './styles/Contact.css';
import './styles/Sidebar.css';
import './styles/NavBar.css';
import './styles/Work.css';
import './styles/Projects.css';

import { Route, Switch, BrowserRouter as Router , HashRouter} from 'react-router-dom';
import Home from './components/home/Home';
import Bio from './components/pages.js/Bio';
import BurgerMenu from './components/menu/BurgerMenu';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Work from './components/portfolio/Work'
// import NavBar from './components/menu/NavBar';
import Project from './components/portfolio/Project'

function App() {
  return (
      
    <div id="outer-container" className="App">

    <Router>
      <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/bio' component={Bio} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/project' component={Project} />
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default App;
//<BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/>
//        {/* <NavBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} /> */}
//outerContainerId={"outer-container"}