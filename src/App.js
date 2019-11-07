import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StyleOptions from './components/StyleOptions/styleoptions'
import Header from './components/Header/header'
// import Bannerarea from './components/BannerArea/bannerarea'
import Homepage from './components/Homepage/homepage'
import Blogs from './components/Blogs/blogs'
import Footer from './components/Footer/footer'
import Copyright from './components/Copyright/copyright'
import './App.css';


function App() {
  return (
    
    <Router>
      <div className="App">
        <StyleOptions />
        <div className='body-inner'>
          <Header />
          {/* { banner 
            ? (
              <div>
                <Bannerarea />
                <Route path='/blogs' exact><Blogs /></Route>
              </div>
            )
            : (<Route path='/' exact><Homepage /></Route>) } */}
          <Route path='/' exact><Homepage /></Route>
          <Route path='/blogs' exact><Blogs /></Route>
          <Footer />
          <Copyright />
        </div>
      </div>
    </Router>
  );
}

export default App;
