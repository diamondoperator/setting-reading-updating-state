import React,{ Component } from 'react';
//import { render } from 'react-dom';

// constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//     this.handleButtonClick = this.handleButtonClick.bind(this)
//   }

//can use functions from component
export default class HelloWorld extends Component{
    
    constructor(props) {
        super(props)
        this.state = { who: "world" };
    }
        render(){
        return <div>
            <p>Hello,{this.state.who}</p>
            <button 
            onClick={() => this.setState({who: 'world'})}>
                world
            </button>
            <button onClick={()=> this.setState({who:"friend"})}>
                friend
            </button>
            <button onClick={()=> this.setState({who:"react"})}>
                react
            </button>
        </div>
        }
   // }
}
