import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class HomePage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             roomList: props.rooms,
        }
    }
    // 
    // pushRoomToArr = () =>{
    //     // let oldRoomList = this.state.roomList;
    //     this.setState({roomList:[this.props.room]})
    //     console.log(this.roomList);
        
    // }
    // componentDidMount(){
        
    // }
    sendRoomProperties=(room)=>{
       
        this.props.roomdetails(room)
        console.log(room.roomName);
    }
    

    render() {
        return (

            <div className="container">
                <div className="row"> 
                
                { this.state.roomList.map( (room,a ) => {
                     let changeRoomFunction = () => this.sendRoomProperties(room);
                    return room.roomName !== "" && room.roomType.length > 0  ?  <div className="col-2" key={a} >  
                    <Link to= "/room">
                        <button onClick={changeRoomFunction} id="roombutton" style={{backgroundColor:room.roomColor}}>
                        {room.roomType}<br/>
                        {room.roomName}<br/>
                        </button></Link> 
                        {/* {console.log(room)} */}
                         
                        </div>
                        : 
                        <div id="disappering"  key={a} > 
                                
                        </div>
                          
                        
                    
                })}
 
                    
                  </div>
                  <Link to="/add"><button  id="addbutton" className="btn btn-warning">ADD</button></Link> 

            </div>
        )
    }
}





