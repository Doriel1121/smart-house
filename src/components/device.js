import React, { Component } from 'react'

export default class Device extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: this.props.name,
            color: 'red',
            on: false
        }
    }

    toggleOnOff(){
        this.state.on ? this.setState({color:"red",on: false}) : this.setState({color:"green",on: true})
    }

    render() {
        return (
            <div>
                <button style={{backgroundColor:this.state.color}} onClick={()=>this.toggleOnOff()} >{this.state.name}</button>
            </div>
            
        )
    }
}
