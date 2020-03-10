import React, { Component } from 'react'
import HomePage from './HomePage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class AddRoom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // room: {name:'',type:"",color: ''},
            roomName:'',
            roomColor: '',
            roomType: '',
        }
    }

    roomNameUpdate=(e)=>{
        this.setState({roomName:e.target.value})
        
    }

    roomColor=(el)=>{
        this.setState({roomColor:el.target.value})
    }
    roomTypeUpdate=(el)=>{
        this.setState({roomType:el.target.value})
    }

    AddTheRoom=()=>{
        let room = {
            roomName: this.state.roomName,
            roomColor: this.state.roomColor,
            roomType: this.state.roomType,
        }
        this.datasToHomepage(room)
    }

datasToHomepage=(room)=>{
    this.props.update(room)
}
//  myFunction=()=> {
//      if( room.roomName == "" && room.roomType.length < 0){
//     // Get the snackbar DIV
//     let x = document.getElementById("snackbar");
  
//     // Add the "show" class to DIV
//     x.className = "show";
  
//     // After 3 seconds, remove the show class from DIV
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
//      }
//   }
    
    render() {
        return (
            <div>
                {/* {this.datasToHomepage()} */}
                {/* <HomePage roomname={this.roomName} roomcolor={this.state.roomColor} plusRoom={this.AddTheRoom}/> */}
                <select id="selectstyle" className="rounded-pill" onChange={this.roomTypeUpdate}>
                    <option value="">Room Type...</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="kitchen">kitchen</option> 
                </select> <br/>
                <input className="rounded-pill"  maxLength="5" onChange={this.roomNameUpdate} placeholder="Name of the room"/><br/>
                <input className="rounded-pill" onChange={this.roomColor} placeholder="Color of the room"/><br/>
                <Link to="/">  <button onClick={this.myFunction} className="btn btn-warning" id="addbutton" onClick={this.AddTheRoom}>Add room</button></Link>
                <div  id="snackbar"> Something wrong</div>
            </div>
        )
    }
}   
