import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Device from './device';

export default class Room extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            product:"",
            productsList:[],
            room:props.singleroom,
            showMe:false,
            colorofbutton:"red",
            onColor:"green",
            button:"Show"
        }
    }
    showHide=()=>{
        this.setState({ showMe:!this.state.showMe})
        this.state.button=="Add" ? this.setState({button:"Show"}) : this.setState({button:"Add"})
        
    }
    updateTheStateOfProduct=(p)=>{/// inserting different product each time to "product" in state
    // let counter=0;
    // p.target.value=="sterio" && p.target.value== this.state.product && counter<1
        this.setState({product:p.target.value 

        })
    }
     updatetheproductlist= ()=>{ 
        // this.state.productsList.length<=4 ? 
        //  this.setState({productsList:[...this.state.productsList,this.state.product] })
        //  : 
        //  this.setState({productsList:this.state.productsList})

        if ( this.state.room.roomType === "Bathroom"  ){
            if(this.state.product === "Dood" && this.state.productsList.length<=4){
            this.setState({ productsList:[...this.state.productsList,this.state.product ]})
            }else{
                this.setState({productsList:this.state.productsList})
            }
        }else{
            (this.state.product==="Dood" && this.state.room.roomType!=="Bathroom")|| this.state.productsList.length>4 ? this.setState({ productsList:this.state.productsList })
            :
            this.setState({productsList:[...this.state.productsList,this.state.product] })

        }
    
    //      if( this.state.product == "Sterio" && this.oneSterio()=== 1 ){

    //         this.setState({productsList:[...this.state.productsList,this.state.product] }) 
    //      }else{
    //          this.setState({productsList:this.state.productsList})
    //      } 
    // }

    // oneSterio=()=>{
    //     this.state.productsList.map( (device) =>{
    //         if( device ==="Sterio" ){
    //             return 1
    //         }
    //     })
    //     return 0 
    }


    // colorChange=(element)=>{
    //     this.state.colorofbutton == "red"? this.setState({colorofbutton:"green"}) 
    //     :
    //     this.setState({colorofbutton:"red"})
        
    // }
    
    
    render() {
        return (
            <div>
      
                {this.state.showMe ?
              <div className="roomslayoutdiv">
                  <div className="row" style={{textAlign:"left"}}>
                  <div className="col-2"><h3 style={{color:"yellow"}}> 
                    {this.state.room !== undefined ? this.state.room.roomName : "No room"}<br/>
                    {this.state.room !== undefined ? this.state.room.roomType : "No room" }</h3> </div>  
                  {this.state.productsList.map((element)=>{ 
                      
                            return <Device name={element} />;
                              

                  })}
                  
              </div>
              </div>
    : 
              <div className="addproductdiv">
                {/* <h1> show me</h1> */}
                <select className="rounded-pill" onChange={this.updateTheStateOfProduct} >
                    <option value="choose one...">choose one...</option>
                    <option value="Ac"> Ac</option>
                    <option value="Light bulb"> Light bulb</option>
                    <option value="Sterio"> Sterio</option>
                    <option value="Dood"> Dood</option>
                </select><br/><br/>
                <button className="btn btn-warning" onClick={this.updatetheproductlist} > Add</button>
              </div>
            }
                <button id="addbutton" onClick={()=>this.showHide()} className="btn btn-warning">{this.state.button} Products</button> 
                <Link to ="/add"> <button id="addbutton" className="btn btn-warning"> Add Room </button></Link>
            </div>
        )
    }
}
