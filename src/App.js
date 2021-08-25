
import React, { Component } from 'react'
import './App.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state={seconds:0};
}
 
onStart=()=>{
   this.setState({seconds:this.state.seconds+1});
}
timer=()=>{
  this.f=setInterval(this.onStart,1000);
  
}
onPause=()=>{
    clearInterval(this.f);
}
onReset=()=>{
    clearInterval(this.f);
    
    this.setState({seconds:0})
}
render(){
    return(
      <>
    
        <div className="timer">
          
            <h1>{this.state.seconds}</h1>
            <button id='btn' className="startBtn" onClick={this.timer}>Start</button>
            <button  className="stopBtn" onClick={this.onPause}>Stop</button>
            <button className="resetBtn" onClick={this.onReset}>Reset</button>
        </div>
        </>
    )
}
}
export default App

