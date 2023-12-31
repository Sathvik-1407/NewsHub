import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  apiKey=process.env.REACT_APP_NEWS_API

  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}            
          />
          <Routes>
            <Route key={'general'} exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'general'} pageSize={5} country={'in'} category={'general'} />} />
            <Route key={'general'} exact path='/home' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'general'} pageSize={5} country={'in'} category={'general'} />} />
            <Route key={'general'} exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'general'} pageSize={5} country={'in'} category={'general'} />} />
            <Route key={'business'} exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'business'} pageSize={5} country={'in'} category={'business'} />} />
            <Route key={'entertainment'} exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'entertainment'} pageSize={5} country={'in'} category={'entertainment'} />} />
            <Route key={'health'} exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'health'} pageSize={5} country={'in'} category={'health'} />} />
            <Route key={'science'} exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'science'} pageSize={5} country={'in'} category={'science'} />} />
            <Route key={'sports'} exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'sports'} pageSize={5} country={'in'} category={'sports'} />} />
            <Route key={'technology'} exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={'technology'} pageSize={5} country={'in'} category={'technology'} />} />
          </Routes>
        </BrowserRouter>

      </>
    )
  }
}

