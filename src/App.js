import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/HomePage.js';
import Header from './components/Header.js';
import AddRoom from './components/AddRoom.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Room from './components/Room.js';

export default class App extends Component {
 
  
  
  state={
    rooms:[],
    room:{},
    roomname:'',
    roomtype:''
  }
  
  UpdateTheState=(r)=>{
    // working
    // let curentRooms = this.state.rooms;
    // curentRooms.push(r);
    // this.setState({ rooms : curentRooms});

    this.setState({ 
      rooms: [...this.state.rooms,r],
    })    
  }
  updatedroomdetails=(room)=>{
    this.setState({room:room})
  }
  

  
   render() {
    return (
      <div className="container">
        <div className="App">
        <Header/>
        
        <Router>
  
          <Switch>
  
            <Route exact path="/"> 
              <HomePage  rooms={this.state.rooms} roomdetails={this.updatedroomdetails}/>
            </Route>

            <Route path="/add"> 
              <AddRoom update={this.UpdateTheState}/>
            </Route>
  
            <Route path="/room"> 
              <Room singleroom={this.state.room}/>
            </Route>
  
          </Switch>
          
        </Router>
        </div>
      </div>
    );
  }
}
