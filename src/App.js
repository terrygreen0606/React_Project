import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StyleOptions from './components/StyleOptions/styleoptions'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Homepage from './components/Homepage/homepage'
import Footer from './components/Footer/footer'
import Copyright from './components/Copyright/copyright'
import './App.css';
import MainContainer from './components/MainContainer/MainContainer'

export class App extends Component {

  state = {
    page_name : ''
  }

  handlePagename = (page_name)=>{
    this.setState({page_name: page_name})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <StyleOptions />
          <div className='body-inner'>            
            <Header getPagename={this.handlePagename}/>
            <Home />
            <Route path='/' exact><Homepage /></Route>
            <MainContainer page_name={this.state.page_name}/>
            <Footer />
            <Copyright />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
