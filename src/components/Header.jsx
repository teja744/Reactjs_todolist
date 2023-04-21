import React from 'react';
import { BrowserRouter, Route ,Routes ,Link} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Form from './Form';
import ServerData from './ServerData';

function Header(){
    return (<header>
        
        <BrowserRouter>
      <div>
        <nav class="navbar navbar-default">
          <div class="container">
            <div class="navbar-header">
              <p class="navbar-brand">To Do List</p>
            </div>
              <ul class="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/note">Note</Link></li>
              </ul>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route  path="/about" element={<About/>}/>
          <Route  path="/note" element={<Form/>}/>
          <Route  path="/api" element={<ServerData/>}/>
          <Route  path="*" element={<ErrorPage/>}/> 
        </Routes>
        </div>
      </BrowserRouter>
    </header>);
}

export default Header;
