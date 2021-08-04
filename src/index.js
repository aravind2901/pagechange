import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link,NavLink,Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Join from './joinus';
import Notfound from './notfound'





// 1. link component only used:



/*const router=(
  <Router>
    <div>
      <h1 style={{textAlign:'center'}}>React Router Example in my laptop</h1>


     <ol  style={{textAlign:'center'}}>
        <li >
          <Link to="/" ><h1> Home</h1></Link>
        </li>
        <li>
          <Link to="/a" ><h1> About</h1></Link>
        </li>
        <li>
          <Link to="/j" ><h1>Joinus</h1></Link>
        </li>
      </ol>
      <Route exact path="/" component={Home}/>
      <Route path="/a" component={About}/>
      <Route path="/j" component={Join}/>
    </div>
  </Router>
)
ReactDOM.render(router, document.getElementById('root'));*/



//2.NavLink component:type one.....

const router=(
  <Router>
    <div>
      <h1 style={{textAlign:'center'}}>React Router Example in my laptop</h1>


     <ol  style={{textAlign:'center'}}>
        <li >
          <NavLink to="/" exact activeStyle={{color:'red'}}><h1> Home</h1></NavLink>
        </li>
        <li>
        <NavLink to="/a" exact activeStyle={{color:'red'}}><h1> About</h1></NavLink>
        </li>
        <li>
        <NavLink to="/j" exact activeStyle={{color:'red'}}><h1> Joinus</h1></NavLink>
        </li>
      </ol>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/a" component={About}/>
      <Route path="/j" component={Join}/>
      <Route component={Notfound}/>
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(router, document.getElementById('root'));
  


     